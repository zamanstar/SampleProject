import React, { Component } from 'react';
export default function AsyncComponent(getComponent){
    console.log(getComponent);
    getComponent()
               .then(Component => console.log(Component))
              return class extends Component {
                state = {
                    Component : null
                }
                 
               componentDidMount(){
                   getComponent()
                   .then(Component => this.setState({Component}))
               }

                render(){
                    let Component = this.state.Component
                    return Component
                    ? <Component />
                    : null
                }
              }

            
}