import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalPrice, getTotalQuantity } from './CartSlice';
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="fixed bottom-0 z-10 flex w-screen items-center justify-between bg-stone-700 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} Pesanan</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="uppercase">
        Buka Keranjang &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
