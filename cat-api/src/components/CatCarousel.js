import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class CatCarousel extends Component {

  handleClick = () => {
    this.props.getThreeCats()
  }
  render() {
    return (
      <div>
        <h1>Just because you can't touch them, doesnt mean you can't love them!</h1>
        <Button variant="outline-info" onClick={this.handleClick}>Show More</Button> 

        <h1>More Cats</h1>
        <ul style={{listStyle: 'none'}}>
        {this.props.threeCats.map(item=> {
          console.log(item)
          return  <li style={{display: 'inline-block'}}><img src={item.url} alt="url"/></li>
        })}
        </ul>
    
  
      </div>
    )
  }
}
