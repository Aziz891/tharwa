import React, {Component, useState} from 'react'
import {Redirect} from 'react-router'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CButton,
  CRow,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from '../users/UsersData'
import axios from "axios"
import { urls } from '../../urls'

const fields = ['name','description', 'value']

class Settings_Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', file: '', showModal: false, redirect:false};
    this.form = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  modalToggle(value){

    this.setState({showModal: value});
}

handleredirect(){
  this.setState({redirect: true});

}

  handleSubmit(e) {
    e.preventDefault();
    axios( { method: 'post'  , url: urls.api + `dashboard/setting/`, data: {...this.props.location.state.data.form, param: this.props.location.state.data.table }
      , headers: { }

    })
    .then(res => {
      console.log(res);
      this.setState({showModal: true, })

    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={{
       pathname: '/collected_data'
       
     }}/>;
     }
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
              <h2>Settings Parameters</h2>
              </CCardHeader>

              <CCardBody>
              <CDataTable
                  items={this.props.location.state.data.table}
              
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={30}
                pagination
              />
                  <div className="float-right">
                    {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">
                     <CButton   type="submit" size="sm" variant="outline" color="success"><CIcon name="cil-Spreadsheet" /> Submit</CButton>
                     </CForm>}
                  </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        {<CModal
        show={this.state.showModal}
        onClose={() => this.modalToggle(false)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Analyzer</CModalTitle>
        </CModalHeader>
        <CModalBody>
         The setting file has been succefully uploaded to the server.
        </CModalBody>
        <CModalFooter>
          <CButton  onClick={() => this.handleredirect()} color="primary">Continue</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => this.modalToggle(false)}
          >Cancel</CButton>
        </CModalFooter>
 </CModal>}

      </>
    )
  }
}



export default Settings_Parameters
