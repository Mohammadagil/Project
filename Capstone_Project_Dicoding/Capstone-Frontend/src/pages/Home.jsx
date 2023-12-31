const Home = () => {
  return (
    <div className="px-5 py-3 md:px-10 lg:px-20 md:py-24 lg:py-10 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col text-center md:text-left md:w-1/2">
        <div className="mb-5">
          <div className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Welcome to <p>Fit Life Hub</p>
          </div>
          <div className="text-lg md:text-lg text-stone-700 leading-relaxed">
            Look for information about your
            <p>health on our website</p>
          </div>
        </div>
        <div className="text-white font-semibold pb-10">
          <a
            href="/articles"
            className="bg-sky-900 rounded-xl text-center md:text-base text-sm py-3 px-5"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/nurse-1.webp"
          alt=""
          className="rounded-xl w-full mb-10 md:mb-0 md:w-auto lg:h-auto md:h-96 h-40 md:object-none object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Home;
