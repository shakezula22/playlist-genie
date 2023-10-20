import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BASE_URL, SPOTIFY_CLIENT_ID } from '../types';
import { UserContext } from '../context/user-context';

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const { persistUser, persistToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    if (!code || !codeVerifier) return;

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `${BASE_URL}/callback`,
      client_id: SPOTIFY_CLIENT_ID,
      code_verifier: codeVerifier,
    });

    const getProfile = async (accessToken: string) => {
      const res = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
      if (!res.ok) return;

      const data = await res.json();
      const user = {
        id: data.id,
        name: data.display_name,
        country: data.country,
      };

      persistUser(user);
    };

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
      .then(async data => {
        if (data === null) return;
        persistToken(data.access_token);
        await getProfile(data.access_token);
        navigate('/');
      });
  }, [searchParams]);

  return <div></div>;
}
