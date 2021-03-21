import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Decreasing from './Decrease';
import Increasing from './Increase';

const Sorting = (props) => {
   
    return (
        <>
           <DropdownButton id="dropdown-basic-button" title="By Price" 
             variant="outline-info" style={{float:"right",marginLeft:"5px"}}>
            <Dropdown.Item><Decreasing /></Dropdown.Item>
            <Dropdown.Item><Increasing /></Dropdown.Item>
            </DropdownButton> 

        </>
    )
}
export default Sorting;