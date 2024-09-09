/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ menuBali }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = menuBali;

  return (
    <li className="flex gap-4 py-2 font-outfit">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-red-600">Sold out</p>
          )}

          <Button>+ Keranjang</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
