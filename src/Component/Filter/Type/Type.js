// filter according to type of product
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {typeSort,paginate} from '../../../Container/Store/Action/Action';

const Type = (props) => {
    const state=useSelector(state=>state.reducer2.DataB);
    const dispatch=useDispatch();
    const objects = state.map(p => {
        return {
            id: p.category.id,
            name: p.category.name
        }
    });
    let mymap = new Map();

    const unique = objects.filter(el => {
        const val = mymap.get(el.name);
        if (val) {
            if (el.id < val) {
                mymap.delete(el.name);
                mymap.set(el.name, el.id);
                return true;
            } else {
                return false;
            }
        }
        mymap.set(el.name, el.id);
        return true;
    });
    const changeHandler = (e,data,data1) => {
        dispatch(typeSort(data,data1));
        dispatch(paginate(1));
    }
    const company = unique.map((p, index) => {
        return <Dropdown.Item key={index} onSelect={(e) => { changeHandler(e, p.id,p.name) }}>{p.name}</Dropdown.Item>
    })  
    return (
        <>
           <DropdownButton id="dropdown-basic-button" title="Type of product" 
             variant="outline-info" style={{float:"right",marginLeft:"5px"}}>
                {company}
            </DropdownButton> 
            
        </>
    )
}
export default Type;