import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/blogActions';
import { Link } from 'react-router-dom'

const BlogPostFull = ({ id, posts, onDeleteClick, onEditClick }) => {

    const post = posts.find(post => post.id === id);
    console.log(id)

    if (post === undefined) {
        return (
            <div className="text-danger">
                <h3>404 - No content </h3>
            </div>
        )
    }

    return (

        <div>
            <BlogPostHeader {...post} />

            <p>{post.content}</p>


            {/* <a href={"/post/edit/" + post.id}>[edit]</a> */}
            <Link to="/post/edit" onClick={(e) => onEditClick(post)}>[edit]</Link>

            <a href={"/delete/" + post.id} onClick={(e) => onDeleteClick(e, post.id)}>[delete]</a>
            {/* <a onClick={(e) => onDeleteClick(e, post.id)}>[delete]</a> */}


        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.blog.posts,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditClick: (post) => {
            return dispatch(
                editPost(post)
            )
        },
        onDeleteClick: (event, id) => {
            event.preventDefault();
            return dispatch(
                deletePost(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostFull)