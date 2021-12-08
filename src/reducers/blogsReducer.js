const initState = {
    devBlogs: [],
    techBlogs: []
}

const blogsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_BLOGS":
            return {...state, devBlogs: action.payload.devBlogs}
        default:
            return {...state}
    }
}

export default blogsReducer;