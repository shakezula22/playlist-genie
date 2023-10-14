export default function LogInPage() {
  const clientId = '08547b47e3a9425992a780af5276909b';
  const redirectUri = 'http://localhost:5174/';
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
  const handleClick = () => {
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
  };
  return (
    <div>
      <div className="card">
        <h1 className="card__title">
          Playlist<br></br> Genie
        </h1>
      </div>
      <div className="btn-container">
        <button onClick={handleClick} className="btn-container__btn">
          Play On!
        </button>
      </div>
    </div>
  );
}
