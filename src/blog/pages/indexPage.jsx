import React from 'react'

const lorenText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
    'Consequuntur, dolores vel temporibus excepturi illum, repellat ' +
    'aperiam repellendus deleniti debitis beatae cum ex nesciunt ' +
    'possimus voluptates voluptate! Dignissimos alias nobis adipisci? ';

const BlogPostHeader = (props) => (
    <div>

        <h3><p>Post Title 1</p></h3>

        <p>
            <span className="badge badge-secondary">12/01/2019 11:09</span>
            <span className="badge badge-primary">#sports</span>{' '}
            <span className="badge badge-primary">#news</span>
        </p>

    </div>
)

const BlogPost = (props) => (
    <div>
        <BlogPostHeader/>

        <p>
            {lorenText.substr(0, 150)}...{' '}
            <a href="post/1">[read more]</a>
        </p>
    </div>
)

const BlogForm = (props) => (
    <div> {/* div do Form */}
        <h2><p>New post</p></h2>

        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="form-control"></input>
        </div>

        <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <select name="tag" id="tag" className="form-control">
                <option value="">--- Select ---</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="variety">Variety</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" className="form-control" rows="5"></textarea>
            <small>0 caracteres</small>
        </div>

        <div>
            <button className="btn btn-primary">Save</button>
            {' '}
            <button className="btn btn-secondary">Cancel</button>

        </div>
    </div>
)



const BlogPostFull = (props) => (

    <div>
        <BlogPostHeader/>

        <p>{lorenText}</p>
        <p>{lorenText}</p>
        <p>{lorenText}</p>
        <p>{lorenText}</p>

        <a href="/">[edit]</a>
        <a href="/">[delete]</a>

    </div>
)

const BlogIndex = (props) => (
    <div>
        <BlogPost />
        <BlogPost />

        <BlogForm />

        <hr />

        <BlogPostFull />


    </div>
)

export default BlogIndex