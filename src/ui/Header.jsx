import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
function Header() {
  return (
    <header className="z z-10 flex items-center justify-between border-b border-stone-300 bg-orange-400 px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-widest">
        <img src="/logo.png" className="mt-[-5px] w-32" />
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
