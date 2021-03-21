// Decrease sorting
import React from 'react';
import {useDispatch} from 'react-redux';
import {decSort} from '../../Container/Store/Action/Action';

const Decreasing=(props)=>{
  const dispatch=useDispatch();
  const clickHandler=()=>{
    dispatch(decSort())
  }
 return(
     <>
    <p variant="outline-info" onClick={clickHandler}>Decrease</p>
    </>
 )
}

export default Decreasing;
