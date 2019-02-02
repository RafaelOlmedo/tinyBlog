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

            let newPost = {
                ...state.tempPost,
                tags: [...state.tempPost.tags.map(tag => (tag.value))],
                date: new Date().toLocaleDateString('en-US')
            }

            if (newPost.title !== undefined && newPost.title !== '' &&
                newPost.tags !== undefined && newPost.tags.length > 0 &&
                newPost.content !== undefined && newPost.content !== '') {

                if(newPost.id === 0){
                    const newId = 1 + state.posts.reduce(
                        (p, post) => (p > newPost.id ? p : newPost.id), 0
                    )

                    posts = [...state.posts, { ...newPost, id: newId}]
                }
                else {
                    posts = [...state.posts.map(postAtual => 
                        postAtual.id === newPost.id ? { ...newPost} : { ...postAtual}
                    )]
                }

                return {
                    ...state,
                    posts: [
                        ...posts
                    ],
                    tempPost: { ...INITIAL_TEMP_STATE }
                }
            }

            break;

        case EDIT_POST:

            return {
                ...state,
                tempPost: {
                    ...action.payload
                }
            }            

        case DELETE_POST:

            console.log(action)
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
                ...state.posts.filter( post => {
                    return post.id !== action.post;
                })
            ],
            tempPost: {...INITIAL_TEMP_STATE}
        }

        // return state;

        default:
            return state;
    }
}