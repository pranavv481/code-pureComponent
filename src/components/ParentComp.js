import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vishwas'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'vishwas'
            })
        }, 2000)
    }

    render() {
        console.log("***********Parent Component Render****************")
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />

            </div>
        )
    }
}

export default ParentComp
