import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/inititalState";
import { SAVE_POST, FIELD_CHANGE } from "../actions/blogActions"

export const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIELD_CHANGE:
            return {
                ...state,
                tempPost: {
                    ...state.tempPost,
                    [action.payload.name]: action.payload.value
                }
            };
        case SAVE_POST:       

            let newPost = {
                ...state.tempPost,
                tags: [...state.tempPost.tags.map(tag => (tag.value))],
                date: new Date().toLocaleDateString('en-US'),
                id: state.posts.length + 1
            }
       
            if (newPost.title !== undefined && newPost.title !== '' &&
                newPost.tags !== undefined && newPost.tags.length > 0 &&
                newPost.content !== undefined && newPost.content !== '') {                
            
                    return {
                        ...state,
                        posts: [
                            ...state.posts,
                            newPost
                        ],
                        tempPost: {...INITIAL_TEMP_STATE}
                    }
                }                
        default:
            return state;
    }
}