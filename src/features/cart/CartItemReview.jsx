/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function CartItemReview({ item }) {
  const { name, quantity, totalPrice, imageUrl, notes } = item;

  return (
    <li className="px-1 py-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={imageUrl} alt={name} className="h-10" />
          <p className="mb-1 sm:mb-0">
            {quantity}&times; {name}
          </p>
        </div>
        <p className="w-28 text-end text-sm font-bold">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-xs">{notes}</p>
    </li>
  );
}

export default CartItemReview;
