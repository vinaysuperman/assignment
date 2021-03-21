// Increase sorting
import React from 'react';
import {useDispatch} from 'react-redux';
import {incSort} from '../../Container/Store/Action/Action';

const Increasing=(props)=>{
  const dispatch=useDispatch();
  const clickHandler=()=>{
    dispatch(incSort())
  }
 return(
     <>
    <p  onClick={clickHandler}>Increase</p>
    </>
 )
}

export default Increasing;