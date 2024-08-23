import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScrollToSectionLink = ({ to, children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Link to={to}>
      {children}
    </Link>
  );
};
export default ScrollToSectionLink;
