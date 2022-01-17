import React from 'react'
import {
  TheContent,
  TheFooter,
  TheHeader2
} from './index'

const TheLayout2 = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader2/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout2
