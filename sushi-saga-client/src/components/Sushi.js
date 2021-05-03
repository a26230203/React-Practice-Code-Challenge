import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name, img_url, price} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=> props.eatSushi(props.sushi) /* Give me a callback! */ }>
        {
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eatenSushi ?
            null
          :
            <img src={ img_url/* Give me an image source! */} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { name /* Give me a name! */} - ${price /* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi