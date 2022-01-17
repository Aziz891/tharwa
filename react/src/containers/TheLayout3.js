import React from 'react'
import {
  TheContent,
  TheFooter,
  TheHeader3
} from './index'

const TheLayout3 = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader3/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout3
