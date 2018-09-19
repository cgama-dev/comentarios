import React, { Component } from 'react'

class NewComment extends Component {
    state = {
        newComments: ''
    }
    handleChange = event => {
        this.setState({
            newComments: event.target.value
        })
    }

    insertComments = () => {
        this.props.insertComments(this.state.newComments)
        this.setState({newComments:''})
    }

    render() {
        return (
            <div className="mt-3">
                <hr/>
                <textarea className="form-control" value={this.state.newComments} onChange={this.handleChange}></textarea><br />
                <button type="button" className="btn btn-success" onClick={this.insertComments}>Enviar</button>
            </div>
        )
    }
}

export default NewComment