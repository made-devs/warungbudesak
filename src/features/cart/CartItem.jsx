/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { menuId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="w-28 text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-3">
          <UpdateItemQuantity menuId={menuId} quantity={quantity} />
          <DeleteItem menuId={menuId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
