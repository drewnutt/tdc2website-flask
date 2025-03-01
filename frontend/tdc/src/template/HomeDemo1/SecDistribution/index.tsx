import Image from 'next/image';
import React from 'react';
import SectionHeading from '../../../components/SectionHeading';
import TokenInfo from './TokenInfo';

type TokenData = {
  text: string;
  img: string;
};

type SecDistributionProps = {
  img: string;
  data: TokenData[];
};

const SecDistribution: React.FC<SecDistributionProps> = ({ img, data }) => {
  return (
    <section className="token-distribution">
      <div className="container">
        <SectionHeading
          title="Our ICO Distribution"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        />

        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="text-center mb-30">Token Allocation</h2>
          <div className="token-allocation">
            <Image src={img} className="center-block" alt="Token Allocation" layout="fill" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="token-info-wapper"></div>
          <h2 className="text-center mb-30">More Token Info</h2>
          {data &&
            data.map((item, key) => (
              <TokenInfo key={key} text={item.text} img={item.img} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SecDistribution;
