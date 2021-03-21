import * as actionType from '../Literal';

const initialStatefetch = {
    DataB: [], //getting data from db
    error: '', //error in case of fetch failure
    totalPage: 0, // total number of pages in pagination
    activePage: 1, // active page or current page
    perPage: 6, // no f cards per page
    dec: false, // condition for sorting
    companySortId: 0, // id of company name
    typeSortId: 0, // id of type of product
    nameSortId: 0, // id of nameof product
    name: "all", //name of type of product
    name1: "all" //name of company
}
const initialStateCart = []

export const reducer2 = (state = initialStatefetch, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT:
            return {
                ...state,
                DataB: action.payLoad,

            }
        case actionType.FETCH_ERROR:
            return {
                ...state,
                error: action.payLoad,
            }
        case actionType.DEC_SORT:
            return {
                ...state,
                dec: true
            }
        case actionType.INC_SORT:
            return {
                ...state,
                dec: false
            }
        case actionType.PAGINATION:
            return {
                ...state,
                activePage: action.payLoad,

            }
        case actionType.COMPANYSORT:
            return {
                ...state,
                companySortId: action.payLoad,
                name1: action.value
            }
        case actionType.TYPESORT:
            console.log(action.value);
            return {
                ...state,
                typeSortId: action.payLoad,
                name: action.value
            }
        case actionType.NAMESORT:
            return {
                ...state,
                nameSortId: action.payLoad
            }


        default:
            return state
    }
}


export const reducer1 = (state = initialStateCart, action) => {
    switch (action.type) {
        case actionType.ADD_CART:

            return [
                ...state,
                { DataR: action.payLoad }
            ]
        case actionType.Remove_CART:
            state = state.filter(item => item.DataR.id !== action.payLoad.id);
            return [
                ...state,
            ]
        case actionType.Remove_CART1:
            state = state.filter((item, index) => index !== action.payLoad);
            return [
                ...state,
            ]
        default:
            return state
    }

}




