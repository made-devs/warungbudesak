import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { Link } from 'react-router-dom';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="transition-all">
      <img
        src="../../public/full-art3.webp"
        className="absolute right-0 top-0 z-0 hidden xl:block"
      />
      <div className="mx-auto my-8 flex w-[60%] flex-col items-center text-center xl:ml-[1rem] xl:mt-[4rem] xl:w-[40%]">
        <img
          src="../../public/mobile2.webp"
          className={`w-[70%] ${username ? 'my-10' : ''}`}
        />

        {!username ? (
          <CreateUser />
        ) : (
          <Link to="/menu">
            <button className="relative z-10 mb-[5rem]">
              <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-orange-400 px-3 py-1 text-base font-bold text-black transition-all duration-300 hover:bg-orange-300 active:left-1 active:top-1">
                Lanjutkan pesanan, {username}?
              </span>
            </button>
          </Link>
        )}
      </div>
      <img
        src="../../public/mobile1.webp"
        className="absolute left-0 z-0 w-[40rem] sm:hidden"
      />
      <img
        src="../../public/full-art1.webp"
        className="absolute bottom-0 left-0 hidden sm:block sm:w-[45rem]"
      />
      <img
        src="../../public/full-art2.webp"
        className="absolute bottom-0 right-0 hidden w-[50%] sm:block xl:w-[60%]"
      />
    </div>
  );
}

export default Home;
