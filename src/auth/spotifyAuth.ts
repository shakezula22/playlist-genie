const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = `${import.meta.env.VITE_BASE_URL}/callback`;
const scopes =
  'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

function generateRandomString(length: number): string {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function base64encode(digest: ArrayBuffer) {
  const byteArr = new Uint8Array(digest);
  let output = '';

  byteArr.forEach(byte => {
    output += String.fromCharCode(byte);
  });

  return btoa(output)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}

let codeVerifier = generateRandomString(128);

generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  });

  window.location.assign('https://accounts.spotify.com/authorize?' + args);
});
