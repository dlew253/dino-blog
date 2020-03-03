import React, {Component} from "react";

let elems = {
    author: "Stealthy Stegosarus",
    body: "Check out this body property",
    comments: "First!"
}

class Header extends Component {
    render () {
        return (
            <h1><strong>Dinosaurs are awesome</strong></h1>
        )
    }
}
class Author extends Component {
    render () {
        return (
            <p>by {this.props.author} </p>
        )
    }
}
class Body extends Component {
    render () {
        return (
            <p> {this.props.body} </p>
        )
    }
}
class Comment extends Component {
    render () {
        return (
            <h2><strong>Comments:</strong></h2>
        )
    }
}

class CommentBody extends Component {
    render () {
        return (
            <p> {this.props.comments}</p>
        )
    }
}

class DinoPost extends Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Author author={elems.author}/>
                <Body body={elems.body}/>
                <Comment/>
                <CommentBody comments={elems.comments}/>
            </div>
        )
    }
}
export default function Post() {
    return (
      <DinoPost/>
    );
  }