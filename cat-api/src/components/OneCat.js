import React, { Component } from 'react'

export default class OneCat extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      catArr: [],
      catIMG: ''
    }
  }
  componentDidMount = () => {
    fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ catArr: [...data]});
    })

  }
  render() {
    // console.log("checkingSTATE:" + this.state.catArr.url)
    return (
      <div>
        <h1>One Cat</h1>
        {/* <h6>{props.header}</h6> */}
        {this.state.catArr.map(item => {
         return <img src={item.url} alt="cat"/>
        })}
        
      </div>
    )
  }
}
