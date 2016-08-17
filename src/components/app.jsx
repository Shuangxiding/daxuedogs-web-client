/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/17
 */

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../styles/app.styl'

const App = ({ children, location }) => {
    return (
        <div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
              { React.cloneElement(children, {
                key: location.pathname
              }) }
            </ReactCSSTransitionGroup>
        </div>
    )
}

export default App