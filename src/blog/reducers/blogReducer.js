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

            console.log('SAVE_POST')

            let newPost = {
                ...state.tempPost,
                tags: [...state.tempPost.tags.map(tag => (tag.value))]
            }

            console.log(newPost);

            if (newPost.title !== undefined && newPost.title !== '' &&
                newPost.tags !== undefined && newPost.tags.length > 0 &&
                newPost.content !== undefined && newPost.content !== '') {

                console.log('validou')
                if (newPost.id === 0) {
                    const newId = 1 + state.posts.reduce(
                        (p, post) => (p > newPost.id ? p : newPost.id), 0
                    )

                    posts = [...state.posts, {
                        ...newPost,
                        id: newId,
                        date: new Date().toLocaleString('en-US')
                    }]
                }
                else {
                    posts = [...state.posts.map(postAtual =>
                        postAtual.id === newPost.id ? { ...newPost } : { ...postAtual }
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
            else {
                alert('Preencha todas as informações antes de salvar.')

                return state;
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
                        return post.id !== action.payload.id;
                    })
                ],
                tempPost: { ...INITIAL_TEMP_STATE }
            }

        // return state;

        default:
            return state;
    }
}