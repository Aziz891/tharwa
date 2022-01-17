import React, { lazy, useCallback, useState } from 'react'
import axios from 'axios'
import {
   CButton,
   CCard,
   CCardBody,
   CCardGroup,
   CCol,
   CContainer,
   CForm,
   CInput,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CRow,
   CCardHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";
import {urls} from "../../urls";



const Project = () => {
  const [user, setUser] = useState("")
  const [passwd, setpasswd] = useState("")
  const history = useHistory();

  const handleRequest = (user, passwd) => {

    axios.post(urls.api + 'dashboard/token-auth/', {
      username: user,
      password: passwd
    })
    .then(function (response) {
      console.log(response);
      localStorage.setItem('token', JSON.stringify( response.data.token))
      localStorage.setItem('user', JSON.stringify( response.data.user))

      history.push("/dashboard")


   })
    .catch(function (error) {
      console.log(error);
    });


  }

  const handleSubmit = useCallback( (e) => {
    e.preventDefault()
    console.log(user, passwd)
    handleRequest(user, passwd)


  }
  )

  return (
    <>

   <div className="c-default-layout flex-row ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>

                  <CForm  onSubmit={ (e) => handleSubmit(e) }>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" onChange={ (e) => setUser(e.target.value) } />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={ (e) => setpasswd(e.target.value) } />
                    </CInputGroup>

                    <br/>

                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>

                </CCardBody>
              </CCard>

              <CCard className="text-black" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>


         <br />
         <br />


                {/*----------------------------------------------------------------------------*/}

    {/* <div className="c-default-layout flex-row ">
      <CContainer>
        <CRow className="justify-content-center">
                  <div>

                    <CIcon
                      className="c-sidebar-brand-full "
                      img src="/images/intro.gif"
                      height={415}
                    />
                  </div>
        </CRow>
      </CContainer>
    </div> */}


         <br />
         <br />

                {/*----------------------------------------------------------------------------*/}

      
    </>
  )
}

export default Project
