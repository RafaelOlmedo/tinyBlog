import React from 'react'

import BlogPost from './BlogPost'
import BlogForm from './BlogForm'
import BlogPostFull from './BlogPostFull'
import { blogPosts } from '../data/blogPosts';

const BlogIndex = (posts) => (
    <div>

        {posts
            .sort((a, b) => (
                Date.parse(a.date) > Date.parse(b.date) ? -1 :
                    Date.parse(a.date) < Date.parse(b.date) ? 1 : 0
            ))
            .map(
                post => (
                    <BlogPost
                        key={post.id}
                        post={post} />
                )
            )}

        {/* <BlogForm />
    
            <hr />
    
            <BlogPostFull post={blogPosts.length === 0 ? null : blogPosts[0]} /> */}


    </div>
)
  




export default BlogIndex