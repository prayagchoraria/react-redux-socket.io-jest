import React, {Component} from "react";
import {markReadPost, removePostSocket} from "../actions/action";

class PostItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {unread: props.post.new && props.post.socketId !== props.socket.id}
    }

    removePost = () => {
        const {dispatch, socket, post} = this.props;
        dispatch(removePostSocket(socket, post.id))
    }

    markRead = () => {
        if (this.state.unread) {
            const {dispatch, index} = this.props;
            dispatch(markReadPost(index));
        }
    }

    componentWillUpdate() {
    }

    render() {
        const {post, socket} = this.props;
        return (
            <div className={"ui " + (post.new && post.socketId !== socket.id ? "brown " : "") + "message"}
                 onClick={this.markRead}>
                {post.socketId === socket.id ? (<i onClick={this.removePost} className="close icon"></i>) : ""}
                <div className="header">{post.text}</div>
                <p className="socket-id">Post by: {post.socketId !== socket.id ? post.socketId : "You"} </p>
            </div>
        )
    }
}

export default PostItemComponent