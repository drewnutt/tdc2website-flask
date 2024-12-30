import React from 'react';
import Image from 'next/image';

type SecWelcomeMeterProps = {
  img: string;
};

const SecWelcomeMeter: React.FC<SecWelcomeMeterProps> = ({ img }) => {
  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
      <div className="welcome-meter">
        <a>
        <Image src={img} className="img-responsive center-block" alt="" layout="fill" />
        </a>     
        <div className="growing-company text-center mt-30">
        </div>
      </div>
    </div>
  );
};

export default SecWelcomeMeter;
