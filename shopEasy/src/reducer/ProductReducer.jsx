const productReducer = (state, action) => {

    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            }
        case("SET_API_DATA"):

        const featueProducts = action.payload.filter((curElem)=>{
           return curElem.featured === true;
        })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featueProducts
            }    
        default:
            return state;    
    }
    return state; 
}


export default productReducer;
