jest.dontMock('./../components/Notification.component')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

const PostItemComponent = require('./../components/PostItem.component').default

describe('Post', () => {
    var post = {
        id: 1,
        text: 'Test Post',
        socketId: 'ABCD-EF12',
        new: true
    };
    var socket = {
        id: 'ABCD-EF12'
    }
    it('shows each news', () => {
        let component = TestUtils.renderIntoDocument(<PostItemComponent post={post} socket={socket}/>);
        let postText = TestUtils.scryRenderedDOMComponentsWithClass(component, 'header');
        let socketId = TestUtils.scryRenderedDOMComponentsWithClass(component, 'socket-id');
        expect(postText[0].textContent).toEqual('Test Post');
        expect(socketId[0].textContent.trim()).toEqual('Post by: You');
    })
})


