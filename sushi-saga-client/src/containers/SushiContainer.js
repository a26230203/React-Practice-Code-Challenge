import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let firstFourSushi = props.sushi.slice( (props.limit - 4 ), props.limit)

  return (
    <Fragment>
      <div className="belt">
        {
          /* 
          Render Sushi components here!
          */
        firstFourSushi.map((sushi, index) => {
        
        return <Sushi key={index} sushi={sushi} eatSushi={props.eatSushi} /> })
        }
        <MoreButton showNextFour={props.showNextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer