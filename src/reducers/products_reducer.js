import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN)
  {
    console.log(action.type)
    return {...state, isSideBarOpen: true}
    
  }
  
  if(action.type === SIDEBAR_CLOSE)
  {
    console.log(action.type)
    return {...state, isSideBarOpen:false}
  }

  if(action.type === GET_PRODUCTS_BEGIN)
  { 
    console.log(action.type)
    return {...state, productsLoading:true}
  }

  if(action.type === GET_PRODUCTS_SUCCESS)
  {
    console.log(action.type)
    const featured = action.payload.filter((product)=> product.featured == true)

    return {...state, productsLoading:false,featured:featured,products:action.payload}
  }

  if(action.type === GET_PRODUCTS_ERROR)
  { 
    console.log(action.type)
    return {...state, productsLoading:false, productError:true}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
