import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi'; // Si vous souhaitez utiliser l'icône de react-icons
import { FaArrowAltCircleUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {visible && (
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
    <FaArrowAltCircleUp />
        </a>
      )}
    </div>
  );
};

export default BackToTop;
