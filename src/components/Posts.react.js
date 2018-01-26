import React,  {Component} from "react"
import utils from '../util'
import { Link } from 'react-router-dom'

const Post = ({post, id}) => (
  <div className="post">
    <div className="title">
      {post.title}
    </div>
    <div className="created">
      {post.created}
    </div>
    <div className="author">
      {post.author}
    </div>
    <div className="content">
      {post.content.substring(0, 100)}
    </div>
    <div className="read-more">
      <Link to={`/blog/${id}`}>Read more</Link>
    </div>
  </div>

)

class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: null
    }
  }

  componentWillMount() {
    utils.getPosts(this.updatePosts.bind(this))
  }

  updatePosts(posts) {
    this.setState({ posts: posts })
  }

  displayPosts() {
    if ( this.state.posts ) {
      let ids = Object.keys(this.state.posts)
      return(
        ids.map(id => { return <Post post={this.state.posts[id]} id={id} key={id}/> })
      )
    }
  }

  render() {
    return (
      <div>
        {this.displayPosts()}
      </div>
    )
  }
}

export default Posts
