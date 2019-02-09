import axios from 'axios'

export const SAVE_POST = 'SAVE_POST'
export const FIELD_CHANGE = 'FIELD_CHANGE'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

const URL = 'http://localhost:3010';


export const savePost = (tempPost) => {

    return dispatch => {

        let newPost = {
            title: tempPost.title,
            content: tempPost.content,
            tags: [...tempPost.tags.map(tag => (tag.value))]
        }

        if (newPost.title !== undefined && newPost.title !== '' &&
            newPost.tags !== undefined && newPost.tags.length > 0 &&
            newPost.content !== undefined && newPost.content !== '') {

            console.log('validou')
            if (tempPost._id ===  0) {

                axios
                    .post(`${URL}/posts`, { ...newPost })
                    .then(resp => {
                        return dispatch(getAllPosts());
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            else {

                axios
                    .put(`${URL}/posts/${tempPost._id}`, { ...newPost })
                    .then(resp => {
                        return dispatch(getAllPosts());
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
        else {
            alert('Preencha todas as informações antes de salvar.')

            return dispatch({
                type: SAVE_POST
            });
        }
    }
}

// const callSavePost = () => {
//     const allPosts = getAllPosts()

//     if (!allPosts) {
//         alert('Erro ao buscar todas os posts.')
//         return {
//             type: SAVE_POST,
//         }
//     }
//     return {
//         type: SAVE_POST,
//         payload: {
//             posts: { ...allPosts }
//         }
//     }
// }

const getAllPosts = () => {
    return dispatch => {
        axios.get(`${URL}/posts`)
            .then(resp => {
                return dispatch({
                    type: SAVE_POST,
                    payload: {
                        posts: [...resp.data]
                    }
                })
            })
            .catch(error => {
                return dispatch({
                    type: SAVE_POST
                })
            })
    }
}


export const editPost = (post) => ({
    type: EDIT_POST,
    payload: post
})

export const fieldChange = (event) => ({
    type: FIELD_CHANGE,
    payload: event.target
})

export const deletePost = (id, history) => ([
    {
        type: DELETE_POST,
        payload: { id }
    },
    history.push('/')
])