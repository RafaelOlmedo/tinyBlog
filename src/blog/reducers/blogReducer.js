import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/inititalState";
import { SAVE_POST, FIELD_CHANGE, DELETE_POST, EDIT_POST } from "../actions/blogActions"

export const blogReducer = (state = INITIAL_STATE, action) => {

    let posts = [];

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

            if(action.payload === undefined){
                return { ...state }
            }

            return {
                ...state,
                posts: [...action.payload.posts],
                tempPost: {...INITIAL_TEMP_STATE}
            }
            break;

        case EDIT_POST:

            console.log("EDIT");
            console.log(state);

            const tagsWithLabel = action.payload.tags.
                map(tag => ({
                    value: tag,
                    label: state.tags.find(t => (t.value === tag)).label
                }))

            return {
                ...state,
                tempPost: {
                    ...action.payload,
                    tags: tagsWithLabel
                }
            }

        case DELETE_POST:

            console.log(action.payload.id)
            console.log(state)
            console.log(state.posts)


            // let teste = state.posts.reduce(function (Acumulador, valorAtual) {

            //     //console.log(Acumulador)

            //     return [
            //         ...Acumulador,
            //         valorAtual
            //     ]

            // }, []);

            // console.log(teste)

            // let teste = state.posts.filter( post => {
            //     return post.id !== action.post;
            // })

            // console.log(teste)

            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => {
                        return post._id !== action.payload.id;
                    })
                ],
                tempPost: { ...INITIAL_TEMP_STATE }
            }

        // return state;

        default:
            return state;
    }
}