import './Header.css';
import Nav from '../nav/Nav';

function Header() {
  return (
    <header className="header">
      <div className="headerLogo">Nido Estudiantil Granada</div>
      <Nav />
    </header>
  );
}

export default Header;