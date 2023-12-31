const Profile = () => {
  return (
    <section className="">
      <div className="container mt-4 px-6 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:flex lg:max-w-full">
        <div className="lg:p-12 lg:flex-1 m-auto">
          <img
            src="../../images/nurse-1.webp"
            alt="Laptop"
            className="my-4 max-w-full rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
          />
          <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
            Fit Life Hub
          </h3>
          <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
            Welcome to{' '}
            <span className="text-sky-900 font-semibold">Fit Life Hub</span> We
            are dedicated team committed to guiding you towards optimmal health.
            With the latest articles and accurate calculation tools, Fit Life
            Hub is your steadfast companion on your health journey. we are here
            to provide trustworthy information and personal support for your
            healthy lifestyle. Start today, discover your health potential with{' '}
            <span className="text-sky-900 font-semibold">Fit Life Hub.</span>
          </p>
        </div>
        <div className="hidden m-auto lg:flex lg:p-12">
          <img
            src="../../images/nurse-1.webp"
            alt="Laptop"
            className="object-cover rounded-[52px] justify-items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
