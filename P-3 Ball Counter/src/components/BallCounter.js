//Declarative Programming

import Button from './Button'

import LeftArrow from '../assets/left-arrow.png'
import RightArrow from '../assets/right-arrow.png'
import BallBasket from './BallBasket'

import './BallCounter.css'
import { useState } from 'react'

const BallCounter = () => {
  const totalBallCount = 10
  const [rightBallCount, setRightBallCount] = useState(0)
  const [leftBallCount, setLeftBallCount] = useState(
    totalBallCount - rightBallCount
  )
  const leftClickHandler = () => {
    if (rightBallCount > 0) {
      setRightBallCount(rightBallCount - 1)
      setLeftBallCount(leftBallCount + 1)
    }
  }
  const rightClickHandler = () => {
    if (leftBallCount > 0) {
      setRightBallCount(rightBallCount + 1)
      setLeftBallCount(leftBallCount - 1)
    }
  }

  return (
    <>
      <section>
        <BallBasket BallCount={leftBallCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />
        <BallBasket BallCount={rightBallCount} basketName="Basket 2" />
      </section>
    </>
  )
}

export default BallCounter
