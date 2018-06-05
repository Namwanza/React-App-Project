import React, { Component } from 'react';
class ErrorBoundary extends Component {
    state = {
        hasError: true,
        errorMessage: ''
    }
    componentDidCatch(error, Info) {
        this.setState({hasError: true, errorMessage});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.hasError}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;