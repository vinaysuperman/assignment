// filet according to company name

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { companySort,paginate } from '../../../Container/Store/Action/Action';

const Category = (props) => {
    const state = useSelector(state => state.reducer2.DataB);
    const dispatch = useDispatch();

    const objects = state.map(p => {
        return {
            id: p.company.id,
            name: p.company.name
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
        dispatch(companySort(data,data1));
        dispatch(paginate(1));
    }
    const company = unique.map((p, index) => {
        return <Dropdown.Item key={index} onSelect={(e) => { changeHandler(e, p.id,p.name) }}>{p.name}</Dropdown.Item>
    })
    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="By Company"
                variant="outline-info" style={{ float: "right", marginLeft: "5px", marginBottom: "20px" }}>
                {company}
            </DropdownButton>

        </>
    )
}
export default Category;