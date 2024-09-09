import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-outfit text-xl font-semibold">
        Your cart, %NAME%
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-5">
        <Link to="/order/new">
          <Button to="/order/new">Pesan Sekarang</Button>
        </Link>
        <button className="relative z-0">
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
