import React, { Component } from 'react'

export default class OneCat extends Component {

  componentDidMount = () => {
    this.props.getCats()

  }
  render() {
    console.log("checkingSTATE:" + this.props.catArr)
    return (
      <div>
        <h1>One Cat</h1>
        <h6>{this.props.header}</h6>
        {this.props.catArr.map(item => {
         return <img src={item.url} alt="cat"/>
        })}
        
      </div>
    )
  }
}
