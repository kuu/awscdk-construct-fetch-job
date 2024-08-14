import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import fetch from 'node-fetch'; // For making a request to the origin
import * as HLS from 'hls-parser'; // For reading/writing the HLS manifest

const client = new SNSClient({ region: process.env.REGION });
const SESSION_INITIALIZATION_URL = process.env.SESSION_INITIALIZATION_URL as string;
const SNS_TOPIC_ARN = process.env.SNS_TOPIC_ARN as string;
const INDEX_OF_RENDITIONS = Number.parseInt(process.env.INDEX_OF_RENDITIONS as string, 10);

HLS.setOptions({ silent: true }); // Surpress the error message

export async function handler(event: any) {
  let url = event.url;
  if (!url) {
    const manifestUrl = await createSession(SESSION_INITIALIZATION_URL);
    if (manifestUrl.includes('.m3u8')) {
      url = await getRendtionUrl(manifestUrl, INDEX_OF_RENDITIONS);
    } else {
      url = manifestUrl;
    }
  }
  console.log(`Fetching the manifest: ${url}`)
  const rendition = await getManifest(url);
  if (!rendition) {
    const message = trimMessage(`
      ==========
      Failed to fetch URL: ${url}
      Date: ${new Date().toISOString()}
      ----------
    `);
    const command = new PublishCommand({
      TopicArn: SNS_TOPIC_ARN,
      Subject: 'Unabled to load manifest',
      Message: message,
    });
    const response = await client.send(command);
    console.log(`[FAIL] Unabled to load manifest![${event.i}]`);
    console.log(message);
    console.log(`SNS message sent: ${response.MessageId}`);
  } else {
    console.log(`[PASS] Fetched URL[${event.i}]: ${url}`);
  }
  return { i: event.i + 1, url };
}

async function createSession(sessionInitializationUrl: string): Promise<string> {
  const res = await fetch(sessionInitializationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ logMode: 'DEBUG' }),
  });
  if (!res.ok) {
    console.error(`Failed to create a session: ${res.status} ${res.statusText} - ${sessionInitializationUrl}`);
    return '';
  }
  const {manifestUrl} = await res.json() as { manifestUrl?: string };

  return manifestUrl ? new URL(manifestUrl, sessionInitializationUrl).href : '';
}

function trimMessage(msg: string): string {
  return msg.trim().replace(/\n\n|\n\s*/g, '\n');
}

async function getRendtionUrl(masterPlaylistUrl: string, index: number): Promise<string | undefined> {
  const playlist = await getPlaylist(masterPlaylistUrl);
  if (!playlist || !playlist.isMasterPlaylist) {
    console.error('Failed to fetch the master playlist');
    return undefined;
  }
  const masterPlaylist = playlist as HLS.types.MasterPlaylist;
  if (masterPlaylist.variants.length === 0) {
    console.error('No variant found in the master playlist');
    return undefined;
  }
  return getAbsoluteUrl(masterPlaylistUrl, masterPlaylist.variants[index].uri);
}

async function getRendition(mediaPlaylistUrl: string): Promise<HLS.types.Playlist | undefined> {
  const mediaPlaylist = await getPlaylist(mediaPlaylistUrl);
  if (!mediaPlaylist) {
    console.error(`Failed to fetch the media playlist: ${mediaPlaylistUrl}`);
    return undefined;
  }
  return mediaPlaylist;
}

function getAbsoluteUrl(parent: string, current: string): string {
  try {
    const url = new URL(current, parent);
    return url.href;
  } catch (e) {
    console.error(`Failed to parse the URL: ${parent} - ${current}`)
  }
  return current;
}

async function getManifest(url: string): Promise<string | undefined> {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch the manifest: ${res.status} ${res.statusText} - ${url}`)
    return undefined;
  }
  return await res.text();
}

async function getPlaylist(url: string): Promise<HLS.types.Playlist | undefined> {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch the HLS manifest: ${res.status} ${res.statusText} - ${url}`)
    return undefined;
  }
  // Parse the HLS manifest
  return HLS.parse(await res.text());
}
