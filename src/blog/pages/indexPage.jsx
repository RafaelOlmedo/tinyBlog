import React, { Component } from 'react'

import BlogPost from './BlogPost'
import { connect } from 'react-redux';
import {getAllPosts} from '../actions/blogActions';

class BlogIndex extends Component {   
    componentDidMount(){
        this.props.onLoadIndex();
    }
    render() {
        return (
            <div>

                {this.props.posts
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts
    }
}

const mapDispachToProps = (dispach) => ({
    onLoadIndex: () => dispach(
        getAllPosts()
    )
})

export default connect(mapStateToProps, mapDispachToProps)(BlogIndex)