import React from 'react'
import Textarea from '../components/Textarea';
import { connect } from 'react-redux';
import { savePost, fieldChange } from '../actions/blogActions';
import Select from 'react-select'
import { TAGS } from '../data/tags';

const BlogForm = (props) => (
    <div> {/* div do Form */}
        <h2><p>{props.tempPost._id === 0 ? 'New' : 'Edit'} post</p></h2>

        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text"
                name="title"
                id="title"
                className="form-control"
                value={props.tempPost.title}
                onChange={props.onFieldChange}
            />
        </div>    

        <div className="form-group">
            <label htmlFor="tags">Tag</label>
            <Select
                isMulti
                id="tags"
                name="tags"
                options={TAGS}
                className="ba
                sic-multi-select"
                value={props.tempPost.tags}
                onChange={(value, obj) => props.onFieldChange(
                    {
                        target:
                        {
                            name: obj.name,
                            value
                        }
                    }
                )}
            />
        </div>


        <Textarea name="content"
            content={props.tempPost.content}
            onFieldChange={props.onFieldChange}
        />
        {/* <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content"
                id="content"
                className="form-control"
                rows="5"
                value={props.tempPost.content}
                onChange={props.onFieldChange}>
            </textarea>
            <small>0 caracteres</small>
        </div> */}

        <div>
            <button className="btn btn-primary"
                onClick={() => props.onSaveClick(props.tempPost)}>Save</button>
            {' '}
            <button className="btn btn-secondary" onClick={() => {props.history.push('/')}}>Cancel</button>

        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
  
    return {
        tempPost: state.blog.tempPost,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onFieldChange: (event) => dispatch(
            fieldChange(event)
        ),
        onSaveClick: (tempPost) => dispatch(
            savePost(tempPost)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)