// search by name **** NOT IN USE
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {nameSort} from '../../../Container/Store/Action/Action'



const Search = (props) => {
    const state=useSelector(state=>state.reducer2.DataB);
    const dispatch=useDispatch();
    console.log(state,"search");
    const onClickHandler=(e)=>{
     e.preventDefault();
      console.log("search id",e)
    }
    const onHandler=(e)=>{
    console.log(e.target.value,"e");
    dispatch(nameSort(e.target.value));
    }
    const data=state.map((p,index)=>{
        return <option key={index} value={p.name}/>
    })
    return (
        <form onSubmit={(e)=>{onClickHandler(e)}}>
            <label>
                Choose a browser from this list:
            <input list="browsers" onSelect={onHandler} id="browsersInput" step="5"/>
            </label>
            <datalist id="browsers" >
                {data}
            </datalist>
        </form>

    )
}

export default Search
