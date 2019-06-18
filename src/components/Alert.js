import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.setState({ isShow: false })
    }
    render() {
        if (!this.state.isShow)
             return null
        let { alertText, bsColorClass, showCloseBtn } = this.props
        let classString = `alert fade show rounded-0 mt-1 ${bsColorClass} ${showCloseBtn ? 'alert-dismissible' : null}`
        let closeButton = showCloseBtn ?
            <button type="button" className="close" onClick={()=>this.handleClose()} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> : null
        return <div className={classString} role="alert">
            {alertText}
            {closeButton}

        </div>
    }
}
export default Alert