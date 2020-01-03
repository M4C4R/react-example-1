import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { name, job } = this.state;
        const { handleSubmit } = this.props;

        return (
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className="form-control" type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="job">Job</label>
                    <input className="form-control" type="text" name="job" id="job" value={job} onChange={this.handleChange} />
                </div>
                <input className="btn btn-primary" type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}

export default Form;