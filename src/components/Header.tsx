import { Link, useNavigate } from 'react-router-dom';
import { IconHome, IconX } from '@tabler/icons-react';
import { useContext } from 'react';
import { UserContext } from '../context/user-context';

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/');
  };
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <div className="header__nav">
        <Link to="/dashboard" className="header__btn">
          <IconHome color="pink" />
        </Link>
        <button onClick={handleLogout} className="header__btn">
          <IconX color="pink" />
        </button>
      </div>
    </header>
  );
}
