// Pagination of page
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import { paginate } from '../../Container/Store/Action/Action';
import style from './Paginations.module.css';

const Paginations = (props) => {

    const details = useSelector(state => state.reducer2);
    const dispatch = useDispatch();
    const onPageChangeHandler = (data) => {
        const d=+data.target.innerText;
        dispatch(paginate(d));
        window.scrollTo(0, 350);
    }
    let length=Math.ceil(props.length/details.perPage);

    let items = [];
    for (let number = 1; number <= length; number++) {
        items.push(
            <Pagination.Item key={number} active={number === details.activePage} onClick={(e) => { onPageChangeHandler(e) }}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination className={style.just}>{items}</Pagination>
    )
}
export default Paginations;
