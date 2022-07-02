import axios from "axios";
import apis from "../../shared/api/main";

// initialState 

const initialState = {
    posts: [],
};

// action 

const ADD_COMMENT = "comment_reducer/ADD_COMMENT";
const LOAD_COMMENT = "comment_reducer/LOAD_COMMENT"
const DELETE_COMMENT = "comment_reducer/DELETE_COMMENT"
const UPDATE_COMMENT = "comment_reducer/UPDATE_COMMENT"


// action creator

export const addComment = (payload) => { 
    return {
        type: ADD_COMMENT, 
        payload
    }; 
}
export const loadComment = (payload) => { 
    return {
        type: LOAD_COMMENT, 
        payload
    }; 
}

export const deleteComment = (payload) => {
    console.log("지울 Comment 인덱스" , payload)
    return {
        type: DELETE_COMMENT,
        payload
    };
}

export const updateComment = (payload) => {    
    return {
        type: UPDATE_COMMENT,
        payload
    }
}


// middleware

export const __addComment = (payload) => async (dispatch, getState) => {
    try {

        const response = await axios.post("http://localhost:4000/Review",
            
            payload
        );
        alert("Review 저장완료!")
        console.log(response);
        dispatch(addComment(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const __loadComment = () => async(dispatch, getState) => {
    
    try {
        const posts = await axios.get("http://localhost:4000/Review");
        console.log(posts.data); 
        dispatch(loadComment(posts.data))
        }
        
    catch (error) {
        console.log(error)
    }
}


export const __deleteComment = (payload) => async(dispatch, getState) => {
    try {
        console.log(payload);
        await axios.delete(`http://localhost:4000/Review/${payload}`);
        dispatch(deleteComment(payload));
    } catch (error) {
        console.log(error);
    }
}

export const __updateComment = (payload, index) => async(dispatch, getState) => {
    try {
        await axios.put("http://localhost:4000/Review");
        dispatch(updateComment(payload));
    } catch (error) {
        console.log(error);
    }
}


// reducer

export default function postReducer (state = initialState, action) {
    switch (action.type){
        case ADD_COMMENT:            
            return {
                ...state, 
                posts: [...state.posts, action.payload]
            };
        case LOAD_COMMENT:
            return {
                ...state,
                posts: [...action.payload]
            }
        case DELETE_COMMENT:
            const new_comment_list = state.posts.filter((item, index)=>{                
                return action.payload !== state.posts.id;
            })            
            return {
                ...state,
                posts: [...new_comment_list]
            };
        case UPDATE_COMMENT:
            return state;
        default:
            return state;
        }
    };
