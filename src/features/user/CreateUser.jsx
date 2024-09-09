import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-6 w-72"
      />

      {username !== '' && <Button>Pesan sekarang!</Button>}
    </form>
  );
}

export default CreateUser;
