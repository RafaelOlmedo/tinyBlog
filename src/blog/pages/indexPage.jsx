import React from 'react'

import BlogPost from './BlogPost'
import { connect } from 'react-redux';

const BlogIndex = ({posts}) => (
    <div>

        {posts
            .sort((a, b) => (
                Date.parse(a.date) > Date.parse(b.date) ? -1 :
                    Date.parse(a.date) < Date.parse(b.date) ? 1 : 0
            ))
            .map(
                post => (
                    <BlogPost
                        key={post._id}
                        post={post} />
                )
            )}

        {/* <BlogForm />
    
            <hr />
    
            <BlogPostFull post={blogPosts.length === 0 ? null : blogPosts[0]} /> */}


    </div>
)
  
const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps) (BlogIndex)