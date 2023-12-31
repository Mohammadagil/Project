import Profile from '../components/Fragments/Profile';
import Members from '../components/Fragments/Members';
import WhyUs from '../components/Fragments/WhyUs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <body>
        <Profile />
        <WhyUs />
        <Members />
      </body>
    </div>
  );
};

export default AboutUs;
