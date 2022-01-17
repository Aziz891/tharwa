import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>

    

      <div className="mfs-auto">
        <span className="mr-1">Designed By</span>
        <b>Abdulaziz Alaboodi</b>
      </div>

    </CFooter>
  )
}

export default React.memo(TheFooter)
