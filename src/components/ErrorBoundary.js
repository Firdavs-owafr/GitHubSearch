import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error,errorInfo){
        this.setState({error: true})    
    }
    
  render() {
    
    if(!this.state.error){
        return (
            <>{this.props.children}</>
        )
    }else {
        return (
            <h1>Error</h1>
        )
    }
  }
}
