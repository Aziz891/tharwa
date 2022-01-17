import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CButton,
  CBreadcrumbRouter,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {urls} from "../urls";


// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'
import axios from 'axios'
const TheHeader = () => {
  const [user, setUser] = useState('')
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  const [logout, setLogout] = useState(false)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  useEffect(() => {
    
    axios.get(urls.api + 'dashboard/current_user/', {
      headers: {
         Authorization: "JWT " + JSON.parse(localStorage.token)
      }
   })
    .then(function (response) {
      // console.log("herrrrrrrrrrrrrrrrrrrrrrr", response);
      setUsername(response.data.username)
      setUser(response.data.first_name)


      

   })
  });
  return (

    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">

     

      </CHeaderNav>


      <CHeaderNav className="px-3">
           <CDropdown>
             <CDropdownToggle color="black">
               <CIcon name="cil-user"/>
             </CDropdownToggle>
             <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem disabled>{username}</CDropdownItem>
              <CDropdownItem disabled>{user}</CDropdownItem>
              <CDropdownItem disabled>-------------</CDropdownItem>
              <CDropdownItem onClick={() => setLogout(!logout)} className="mr-1">Logout</CDropdownItem>
             </CDropdownMenu>
           </CDropdown>



            <CModal
              show={logout}
              onClose={() => setLogout(!logout)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle> Alert !</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <br/>
                <h3>Are you sure you want to logout?</h3>
              <br/>
              </CModalBody>
              <CModalFooter>
                <CButton to="/project_info" color="danger" onClick={() => setLogout(!logout)}>Yes</CButton>{''}
                <CButton color="secondary" onClick={() => setLogout(!logout)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

       </CHeaderNav>

      <CHeaderNav className="px-3">
        <CIcon
          className="c-sidebar-brand-full"
          // img src="/images/IEI.png"
          //src="https://www.se.com.sa/style%20library/sec/Images/Logo_EN.png"
          height={50}
         />
      </CHeaderNav>
    </CHeader>
  )
}
export default TheHeader
