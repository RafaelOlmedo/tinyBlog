import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import {blogPosts} from '../data/blogPosts'

const lorenText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
    'Consequuntur, dolores vel temporibus excepturi illum, repellat ' +
    'aperiam repellendus deleniti debitis beatae cum ex nesciunt ' +
    'possimus voluptates voluptate! Dignissimos alias nobis adipisci? ';

const BlogPostFull = ({match}) => {

    let id = parseInt(match.params.id);
    const post = blogPosts.find(post => post.id === id);
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

export default BlogPostFull