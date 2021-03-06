import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader3 = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>

      <CHeaderNav className="px-3">
         <CIcon
            className="c-sidebar-brand-full"
            height={50}
          />
      </CHeaderNav>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">

        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <CIcon
          className="c-sidebar-brand-full"
          // img src="/images/IEI.png"
          height={60}
         />
      </CHeaderNav>


     </CHeader>
  )
}

export default TheHeader3
