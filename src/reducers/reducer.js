import {ACTION_TYPES} from "./../actions/action"
import {markReadAPost} from "../actions/action";

const initialState = {posts: []}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({...action.post, new: true})
            }

        case ACTION_TYPES.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }

        case ACTION_TYPES.MARK_READ:
            return {
                ...state,
                posts: markReadAPost([...state.posts], action.index)
            }
        case ACTION_TYPES.LOAD_POST:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
}


export default reducer