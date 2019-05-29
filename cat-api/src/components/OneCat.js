import React, { Component } from 'react'
import { Media, Card } from 'react-bootstrap'


export default class OneCat extends Component {

  componentDidMount = () => {
    this.props.getCats()

  }
  render() {
    console.log("checkingSTATE:" + this.props.catArr)
    return (
      <Card>
        <Media>
        
        <h6>{this.props.header}</h6>
        {this.props.catArr.map((item, i) => {
         return <img key={i} src={item.url} alt="cat"/>
        })}
        
        <Media.Body>
        <h1>ONE LOVE.</h1>
        <p>Be kind to feril cats.</p>
        </Media.Body>
        </Media>
      </Card>
    )
  }
}
