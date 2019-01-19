import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import { connect } from 'react-redux';

const BlogPostFull = ({id, posts}) => {

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


            <a href={"/post/edit/" + post.id}>[edit]</a>
            <a href={"/delete/" + post.id}>[delete]</a>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.blog.posts,
        ...ownProps
    }
}

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(BlogPostFull)