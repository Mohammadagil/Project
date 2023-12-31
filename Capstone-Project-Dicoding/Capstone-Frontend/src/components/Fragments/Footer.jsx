import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="bg-sky-700 md:px-10 lg:px-20 px-5 py-5 pb-9 flex flex-col md:flex-row justify-between">
        <div className=" pt-5 md:pt-20">
          <img
            src="/images/fit-life-hub-white-logo.png"
            alt="Fit-life-hub-white-logo"
            className="lg:h-10 h-8"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5 lg:space-x-20 text-white leading-loose">
          <div className="md:py-0 py-10 text-sm md:text-base">
            <p className="font-bold md:text-lg">Our Members</p>
            <p className="border-b py-1">
              <Link to="/about-us#memberSection">Tralya Dharmada</Link>
            </p>
            <p className="border-b py-1">
              <Link to="/about-us#memberSection">Prasetya Kusuma Atmaja</Link>
            </p>
            <p className="border-b py-1">
              <Link to="/about-us#memberSection">Muhammad Abyan Shidqi</Link>
            </p>
            <p className="border-b py-1">
              <Link to="/about-us#memberSection">
                Ahmad Hauzan Abid Romadhon
              </Link>
            </p>
            <p className="border-b py-1">
              <Link to="/about-us#memberSection">
                Mohammad Agil Rofiqul Zein
              </Link>
            </p>
          </div>
          <div className="w-full md:w-56 pb-16 md:pb-0 text-sm md:text-base">
            <p className="font-bold md:text-lg">Explore</p>
            <p className="border-b py-1">
              <a href="/">Home</a>
            </p>
            <p className="border-b py-1">
              <a href="/articles">Articles</a>
            </p>
            <p className="border-b py-1">
              <a href="/calc-it">Calc It !</a>
            </p>
            <p className="border-b py-1">
              <a href="/about-us">About Us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
