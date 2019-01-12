import React from 'react'
import BlogPostHeader from './BlogPostHeader';

const lorenText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
    'Consequuntur, dolores vel temporibus excepturi illum, repellat ' +
    'aperiam repellendus deleniti debitis beatae cum ex nesciunt ' +
    'possimus voluptates voluptate! Dignissimos alias nobis adipisci? ';

const BlogPostFull = (props) => {

    if (props.post === null) {
        return (
            <div className="text-danger">
                <h3>404 - No content </h3>
            </div>
        )
    }

    return (

        <div>
            <BlogPostHeader {...props.post} />

            <p>{props.post.content}</p>


            <a href={"/post/edit/" + props.post.id}>[edit]</a>
            <a href={"/delete/" + props.post.id}>[delete]</a>

        </div>
    )
}

export default BlogPostFull