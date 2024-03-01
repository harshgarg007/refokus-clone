import React from 'react'
import AnimatedCursor from "react-animated-cursor"
const Cursor = () => {
  return (
    <>
    <AnimatedCursor
      innerSize={16}
      outerSize={10}
      color='255,195,75'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </>
  )
}

export default Cursor