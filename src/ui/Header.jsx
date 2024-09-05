import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
function Header() {
  return (
    <header>
      <Link to="/">Warung Bu Desak</Link>
      <SearchOrder />
      <p>Made</p>
    </header>
  );
}

export default Header;
