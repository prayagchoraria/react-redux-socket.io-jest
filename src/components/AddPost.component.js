import React, {Component} from "react";
import {addNewPostSocket} from "./../actions/action";

class AddPostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            text: ""
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const {dispatch, socket} = this.props;
        if (this.state.text.length > 0) {
            dispatch(addNewPostSocket(socket, {text: this.state.text, socketId: socket.id}));
            this.setState({text: ""});
        }
    }

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        const {post} = this.props;
        return (
            <form className="twelve wide column" onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="ui fluid action input">
                        <input onChange={this.onInputChange} type="text" placeholder="Write post..."
                               value={this.state.text}/>
                        <button className="ui button" type="submit">Add Post</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddPostComponent