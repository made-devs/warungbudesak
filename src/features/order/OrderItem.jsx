/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice, notes } = item;

  return (
    <li className="py-3">
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs">{notes}</p>
    </li>
  );
}

export default OrderItem;
