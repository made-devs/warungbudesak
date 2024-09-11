/* eslint-disable react/prop-types */
import { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useDispatch } from 'react-redux';
import { updateNotes } from './CartSlice';

function CartItem({ item }) {
  const [notes, setNotes] = useState(item.notes || '');
  const { menuId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleNotesChange(e) {
    const newNotes = e.target.value;
    setNotes(newNotes);
    dispatch(updateNotes({ menuId: menuId, notes: newNotes }));
  }

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
      <form>
        <input
          placeholder="Tambahkan catatan"
          type="text"
          onChange={handleNotesChange}
          value={notes}
          className="rounded-full bg-stone-200 px-2 py-1 text-sm"
        />
      </form>
    </li>
  );
}

export default CartItem;
