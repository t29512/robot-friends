import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((robots, i) => {
        return <Card key={i} {...robots} />;
      })}
    </div>
  );
};

export default Cardlist;
