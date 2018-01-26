import React,  {Component} from "react"
import utils from '../util'

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      post: null
    }
  }

  componentWillMount() {
    debugger
    utils.getPost(this.props.match.params.id, this.updatePost.bind(this))
  }

  updatePost(post) {
    this.setState({ post: post })
  }

  displayPost() {
    if ( this.state.post ) {
      let post = this.state.post
      return(
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
            {post.content}
          </div>
        </div>
      )
    }
  }

  render() {
    debugger
    return (
      <div>
        {this.displayPost()}
      </div>
    )
  }
}

export default Post
