import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/inititalState";
import { SAVE_POST, FIELD_CHANGE, DELETE_POST } from "../actions/blogActions"

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
                    tempPost: { ...INITIAL_TEMP_STATE }
                }
            }

            break;

        case DELETE_POST:

            console.log(action)
            console.log(state)
            console.log(state.posts)


            // let teste = state.posts.reduce(function (Acumulador, valorAtual) {
            //     // console.log("===========================================================")
            //     // console.log("Acumulador: " + Acumulador.id)
            //     console.log(Acumulador)

            //     // console.log("Valor atual: " + valorAtual.id)
            //     // console.log(valorAtual)


            //     // console.log("Indice: " + indice)
            //     // console.log("===========================================================")

            //     return {
            //                 posts : [
            //                     ...Acumulador,
            //                     ...valorAtual
            //                 ]
            //             }   
            // }, []);

            // console.log(teste)

        let teste = state.posts.filter( post => {
            return post.id !== action.post;
        })

        console.log(teste)

        return {
            ...state,
            posts: [
                ...state.posts.filter( post => {
                    return post.id !== action.post;
                })
            ],
            tempPost: {...INITIAL_TEMP_STATE}
        }

        return state;

        default:
            return state;
    }
}