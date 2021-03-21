import * as actionType from '../Literal';
import axios from 'axios';

//Add to cart 
export const AddCart=(data)=>{
    return {
        type:actionType.ADD_CART,
        payLoad:data
    }
} 

//Remove from cart from main card *** not in use
export const RemoveCart=(data)=>{
    return {
        type:actionType.Remove_CART,
        payLoad:data,
    }
}
 
//Remove from cart from modal
export const RemoveCart1=(data)=>{
    return {
        type:actionType.Remove_CART1,
        payLoad:data,
    }
}

//get data from backend
export const setProduct=(data)=>{
    return {
        type:actionType.GET_PRODUCT,
        payLoad:data
    }
}

//error while receiving data from backend 
export const fetcherror=(error)=>{
    return {
        type:actionType.FETCH_ERROR,
        payLoad:error
    }
}

//async for fetching data
export const fetchData=()=>{
  return (dispatch,getState)=>{
    axios.get('http://localhost:3000/posts')
    .then(response=>{
        const posts=response.data;
        dispatch(setProduct(posts));
    }).catch(function (error) {
        dispatch(fetcherror(error.message))
      })
       
}
}

//decreasesorting

export const decSort=(data)=>{
    return {
        type:actionType.DEC_SORT, 
        payLoad:data
    }
}

//increasing sort
export const incSort=(data)=>{
    return {
        type:actionType.INC_SORT,
        payLoad:data,
    }
}

//pagination

export const paginate=(data)=>{
    return {
        type:actionType.PAGINATION,
        payLoad:data
    }
}

//sort by company

export const companySort=(data,data1)=>{
    return {
        type:actionType.COMPANYSORT,
        payLoad:data,value:data1
    }
}


//sort by type

export const typeSort=(data,data1)=>{
    console.log(data1);
    return {
        type:actionType.TYPESORT,
        payLoad:data,
        value:data1
    }
}

//search name

export const nameSort=(data)=>{
    return {
        type:actionType.NAMESORT,
        payLoad:data
    }
}