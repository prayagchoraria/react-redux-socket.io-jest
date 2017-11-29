jest.dontMock('./../components/Notification.component')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

const NotificationComponent = require('./../components/Notification.component').default

describe('Notification', () => {
    it('shows unread news count', () => {
        let component = TestUtils.renderIntoDocument(<NotificationComponent unreadCount={1}/>);
        let count = TestUtils.scryRenderedDOMComponentsWithClass(component, 'value');
        expect(count[0].textContent).toEqual('1');
    })
})


