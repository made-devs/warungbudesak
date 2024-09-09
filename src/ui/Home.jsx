import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="transition-all">
      <img
        src="../../public/full-art3.webp"
        className="absolute right-0 top-0 z-0 hidden xl:block"
      />
      <div className="mx-auto my-8 flex w-[60%] flex-col items-center text-center xl:ml-[1rem] xl:mt-[4rem] xl:w-[40%]">
        <img src="../../public/mobile2.webp" className="w-[70%]" />

        <CreateUser />
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
