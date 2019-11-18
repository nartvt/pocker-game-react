import React, { Component, PureComponent } from 'react';

class Children1 extends PureComponent {
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    
    // shouldComponentUpdate(nextProps){
    //     return this.props.state1 !== nextProps.state1 
    // }

    render() {
        return (
            <div>
                Children 1
            </div>
        );
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
}

export default Children1;