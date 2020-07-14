import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => (
    <ReactLoading type={'bars'} color={color} height={'20%'} width={'20%'} />
);
 
export default Example;