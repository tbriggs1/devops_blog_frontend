import axios from "axios"
import { pokemon } from "../components/API/Api"

export const loadBlogs = () => async (dispatch) => {
    const getBlogs = await axios.get(pokemon);
    dispatch({
        type: "FETCH_BLOGS",
        payload: {
            devBlogs: getBlogs.data.results,
        }
    })
}