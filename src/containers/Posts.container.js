import React, {Component} from "react";
import {connect} from "react-redux";
import io from "socket.io-client"
import {addPost, loadPost, loadPostSocket, removePost} from "../actions/action";
import PostsComponent from "../components/Posts.component";
import AddPostComponent from "../components/AddPost.component";
import NotificationComponent from "../components/Notification.component";

let socket;

@connect((store) => {
    return {
        posts: store.posts
    };
})
class PostsContainer extends Component {

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        socket = io.connect("http://localhost:9000");

        socket.on('addPost', (res) => {
            console.dir(res)
            dispatch(addPost(res))
        })

        socket.on('removePost', (index) => {
            dispatch(removePost(index))
        })

        socket.on('loadPost', (res) => {
            console.dir(res)
            dispatch(loadPost(res))
        })
    }

    componentWillMount() {
        this.props.dispatch(loadPostSocket(socket))
    }

    componentWillUnmount() {
        socket.disconnect()
    }

    render() {
        const {posts, dispatch} = this.props;
        return (
            <div className="ui centered grid">
                <NotificationComponent unreadCount={posts.filter(post => post.new && socket.id !== post.socketId).length}/>
                <AddPostComponent dispatch={dispatch} socket={socket}/>
                <PostsComponent posts={posts} dispatch={dispatch} socket={socket}/>
            </div>
        )
    }
}

export default PostsContainer