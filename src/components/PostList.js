import React, { Component } from 'react'
import axios from 'axios'



class PostList extends Component {

constructor(props) {
  super(props)

  this.state = {
     post:[],
     error:" "
  }
}
//GET Request
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response)
        this.setState({posts:response.data})
    })
    .catch(error=>{
        console.log(error)
        this.setState({errorMsg: "error in retrieving data"})
    })
}

render() {
  const { posts, errorMsg } = this.state;
  return (
    <div>
      List of Post
      {
        posts && posts.length ?  // Check if posts is not null or undefined
        posts.map(post => <div key={post.id}>{post.title}</div>) :
        null
      }
      {
        errorMsg ? <div>{errorMsg}</div> : null
      }
    </div>
  );
}

}
export default PostList
