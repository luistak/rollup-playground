import React, { FC } from 'react';

interface BlaProps {
  name: string,
  age?: number
}

const Bla: FC<BlaProps> = ({ name, age }) => (
  <div>
    <div> Name: { name }</div>
    { age && <div> Age: { age }</div> }
  </div>
);

export default Bla;