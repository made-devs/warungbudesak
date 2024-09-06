import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-bold text-white md:text-3xl">
        Bali dalam Setiap Gigitan.
        <br />
        <span className="text-lg font-semibold text-stone-700">
          Dari Dapur Bu Desak, kenikmatan tradisi kuliner
          <br />
          Bali yang tak terlupakan.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
