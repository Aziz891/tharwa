import React from 'react'
import {Redirect} from 'react-router'
import {urls} from "../../urls";

import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CCardGroup,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import SettingModal from '../setting_components/settingModal'

class SettingsForm extends React.Component {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showElements, setShowElements] = React.useState(true)

constructor(props) {
    super(props);
    this.tableData = {};
    this.state = {value: '', file: '', buttonClicked: false, showModal: false, redirect:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);


    this.uploadsettings = this.uploadsettings.bind(this);

  }

  uploadsettings() {
      alert('Upload settings from Site <o>');}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  modalToggle(value){

    this.setState({showModal: value});
}

handleChangeFile(event) {
    event.preventDefault();
    console.log(event.target.files);
    this.setState({file: event.target.files[0]});
  }

  handleSubmit(event) {
    event.preventDefault();
    const FormData = require('form-data');
    const form = new FormData();
    form.append('my_field', this.state.value);
    form.append('file', this.state.file);


      axios( { method: 'post'  , url: urls.api +  `dashboard/setting_check/`, data: form
      , headers: { }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.tableData = JSON.parse( res.data['result'])
      console.log(this.tableData)
      console.log('working');
      this.modalToggle(true)
    })
  }

  handleClick(event){console.log('clicked')}
  handleredirect(){
    this.setState({redirect: true});
  }


  render() {

    if (this.state.redirect) {
 return <Redirect push to={{
  pathname: '/setting_table',
  state: { data: this.tableData.data }
}}/>;
}

    return (
      <>

    <CCardHeader >
       <h2 className="text-center">Settings Analyzer</h2>
    </CCardHeader>

           <br />


    {<CCardGroup columns className = "cols-2" >

     {
      <CCard>

        <CCardHeader>
         <h2>Localy</h2>
        </CCardHeader>

        <CCardBody className="text-center">
           <div>
               <CIcon
                  className="c-sidebar-brand-full"
                  img src="/images/localy icon.png"
                   height={250} />

                   <br />

           </div>
        </CCardBody>

        <CCardFooter>
               {<CFormGroup row>
                 <CCol >
                    <CInputFile  id="file-input" name="file-input" onChange={ this.handleChangeFile } />
                 </CCol>
               </CFormGroup>}
        </CCardFooter>
      </CCard>
      }

      {
      <CCard>

        <CCardHeader>
         <h2>Database</h2>
        </CCardHeader>

        <CCardBody className="text-center">
            <div>
                <CIcon
                  className="c-sidebar-brand-full"
                  img src="/images/database icon.png"
                  height={250} />

                     <br />
            </div>
        </CCardBody>

        <CCardFooter>
            {<CFormGroup row>
                 <CCol >
                    <CInputFile  id="file-input" name="file-input" onChange={ this.handleChangeFile } />
                 </CCol>
            </CFormGroup>}
        </CCardFooter>

      </CCard>
      }

    </CCardGroup>
  }

     {
      <CCard>

        <CCardBody className="text-center">
           <div>
             {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">
              <CButton   type="submit" shape="pill" size="lg" color="primary"><CIcon name="cil-Spreadsheet" /> Submit</CButton>
              </CForm>}
           </div>
        </CCardBody>

      </CCard>
      }

 {<CModal
        show={this.state.showModal}
        onClose={() => this.modalToggle(false)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Analyzer</CModalTitle>
        </CModalHeader>
        <CModalBody>
         The setting file has been succefully read and analyzed by server. Click continue to view results
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

export default SettingsForm
