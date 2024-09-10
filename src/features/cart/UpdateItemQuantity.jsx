/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice';

function UpdateItemQuantity({ menuId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 text-center md:mr-0 md:gap-4">
      <button
        onClick={() => dispatch(decreaseItemQuantity(menuId))}
        className="rounded bg-orange-500 px-2 py-1 font-bold text-black hover:bg-orange-700"
      >
        <span>-</span>
      </button>
      <p className="w-4 font-outfit text-sm font-semibold">{quantity}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(menuId))}
        className="rounded bg-orange-500 px-2 py-1 font-bold text-black hover:bg-orange-700"
      >
        <span>+</span>
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
