import React, { Component } from 'react'

export default class Contador extends Component {
    
    // Solução 01
    //constructor(props) {
    //    super(props)
    //    this.maisUm = this.maisUm.bind(this)
    //}

    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
        //this.state.numero++
        console.log(this)
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1})
        //this.state.numero--
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}