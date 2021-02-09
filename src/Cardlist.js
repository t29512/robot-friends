import React from 'react';
import Card from './Card';
import { robots } from './robots';

const Cardlist = () => {
  return (
    <div>
      {robots.map((robots, i) => {
        return <Card key={i} {...robots} />;
      })}
    </div>
  );
};

export default Cardlist;
