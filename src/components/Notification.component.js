import React, {Component} from "react";
class NotificationComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="ui statistic">
                    <div className="value">
                        {this.props.unreadCount}
                    </div>
                    <div className="label">
                        unread news
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationComponent