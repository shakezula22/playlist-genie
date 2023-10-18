import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="page">
      <div className="page__center">
        <h1>Oops!</h1>
        <p>An unexpected error has occured.</p>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
}
