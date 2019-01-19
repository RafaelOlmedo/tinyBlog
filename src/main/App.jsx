import React, { Component } from 'react'
import BlogIndex from '../blog/pages/indexPage'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import BlogForm from '../blog/pages/BlogForm';
import BlogPostFull from '../blog/pages/BlogPostFull';
import { blogPosts } from '../blog/data/blogPosts';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            posts: blogPosts,
            tempPost: {}
        }
    } 

    handleUpdate(id, formContent) {

    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <h2 className="small">{this.state.subtitle}</h2>
                    <hr />

                    <Link to="/">[Home]</Link>
                    <Link to="/post/add">[Add Post]</Link>

                    <hr />

                    <Switch>
                        <Route exact path='/' component={BlogIndex} />
                        <Route exact path='/post/add' component={BlogForm} />
                        <Route path="/post/:id" component={
                            ({ match }) => (
                            <BlogPostFull 
                                id={parseInt(match.params.id)} /> 
                            )
                        } />
                        <Route component={() => (<div>404 - Not Found</div>)} />
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

export default App