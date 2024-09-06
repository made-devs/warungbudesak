import { Link } from 'react-router-dom';
function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-700 p-4 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>2 Ayam Betutu(1 Ekor)</span>
        <span>Rp 240.000,-</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
