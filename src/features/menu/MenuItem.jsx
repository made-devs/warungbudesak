/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/CartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ menuBali }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = menuBali;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      menuId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 overflow-hidden py-2 font-outfit">
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

          {currentQuantity ? (
            <div className="flex gap-2">
              <UpdateItemQuantity menuId={id} quantity={currentQuantity} />
              <DeleteItem menuId={id} />
            </div>
          ) : null}

          {!soldOut && !currentQuantity && (
            <button onClick={handleAddToCart} className="relative z-10">
              <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-orange-400 px-3 py-1 text-base font-bold text-black transition-all duration-300 hover:bg-orange-300 active:left-1 active:top-1">
                +Keranjang
              </span>
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
