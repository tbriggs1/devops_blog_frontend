import axios from "axios"

const initState = {
    devBlogs: [],
    techBlogs: []
}

const blogsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_BLOGS":
            return {...state}
        default:
            return {...state}
    }
}

export default blogsReducer;