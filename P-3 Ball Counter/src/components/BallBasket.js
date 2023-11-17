import React from 'react'

const BallBasket = ({ BallCount, basketName }) => {
  return (
    <div className="body">
      <div className="Ball-basket">
      <h1>
        <span>{BallCount}</span> Balls
      </h1>
      <p>{basketName} {BallCount===10 && "(Full)"} {BallCount===0 && "(EMpty)"}</p>
    </div>
    </div>
  )
}

export default BallBasket
