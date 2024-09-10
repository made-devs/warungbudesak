import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [tempUsername, setTempUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!tempUsername) return;
    dispatch(updateName(tempUsername));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="z-20 h-40 w-[25rem]">
      <p className="my-3 font-outfit text-sm font-medium text-stone-600 md:text-lg">
        Om Swastyastu
        <br />
        Masukan namamu untuk mulai memesan.
      </p>

      <input
        type="text"
        placeholder="Nama Kamu"
        value={tempUsername}
        onChange={(e) => setTempUsername(e.target.value)}
        className="input mb-6 w-72"
      />

      {tempUsername !== '' && <Button>Pesan sekarang!</Button>}
    </form>
  );
}

export default CreateUser;
