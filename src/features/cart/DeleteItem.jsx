/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

function DeleteItem({ menuId }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(menuId))}
      className="rounded bg-orange-400 px-2 py-1 font-bold text-black hover:bg-orange-700"
    >
      <span>Hapus</span>
    </button>
  );
}

export default DeleteItem;
