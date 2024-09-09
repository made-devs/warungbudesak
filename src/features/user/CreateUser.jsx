import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-outfit mb-3 text-base font-medium text-stone-600 md:text-base">
        Om Swastyastu 👋
        <br />
        Masukan namamu untuk mulai memesan.
      </p>

      <input
        type="text"
        placeholder="Nama Kamu"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
