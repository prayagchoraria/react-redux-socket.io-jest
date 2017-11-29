import React, {Component} from "react";
import PostItemComponent from "./PostItem.component";

class PostsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {posts, dispatch, socket} = this.props;
        return (
            <div className="twelve wide column">
                <div className="row">
                    {posts.map((post, index) => (
                        <PostItemComponent post={post} key={index} index={index} dispatch={dispatch}
                                           socket={socket}/>))}
                </div>
            </div>
        )
    }
}

export default PostsComponent