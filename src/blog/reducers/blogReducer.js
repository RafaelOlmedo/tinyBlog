import { INITIAL_STATE } from "../data/inititalState";
import { SAVE_POST } from "../actions/blogActions"

export const blogReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case FIELD_CHANGE:
            return state;        
        case SAVE_POST:
            return state;
        default:
            return state;
    }
}