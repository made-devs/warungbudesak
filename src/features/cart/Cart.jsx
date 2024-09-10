import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getCartUsername } from './CartSlice';

function Cart() {
  const username = useSelector(getCartUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleDeleteCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 font-outfit xl:mx-auto xl:w-[70rem]">
      <LinkButton to="/menu">&larr; Kembali ke Menu</LinkButton>

      <h2 className="mt-7 font-outfit text-xl font-semibold">
        Your cart, {username}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.menuId} />
        ))}
      </ul>

      <div className="mt-6 space-x-5">
        <Link to="/order/new">
          <Button to="/order/new">Pesan Sekarang</Button>
        </Link>
        <button onClick={handleDeleteCart} className="relative z-0">
          <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-black"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-stone-100 px-3 py-1 text-base font-bold text-stone-700 transition-all duration-300 hover:bg-stone-300 active:left-1 active:top-1">
            Batalkan
          </span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
