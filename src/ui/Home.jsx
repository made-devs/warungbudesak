import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      {/* <h1 className="font-outfit mb-8 text-xl font-bold text-orange-500 md:text-3xl">
        Bali dalam Setiap Gigitan.
        <br />
        <span className="text-lg font-semibold text-stone-700">
          Dari Dapur Bu Desak, kenikmatan tradisi kuliner
          <br />
          Bali yang tak terlupakan.
        </span>
      </h1> */}
      <img
        src="../../public/mobile2.webp"
        className="mx-auto mb-4 mt-[-1rem] w-60"
      />

      <CreateUser />
      <img
        src="../../public/mobile1.webp"
        className="absolute left-0 z-0 w-[30rem]"
      />
    </div>
  );
}

export default Home;
