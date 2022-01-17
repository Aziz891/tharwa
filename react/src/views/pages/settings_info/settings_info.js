import React from 'react'
import {Redirect} from 'react-router'
import {urls} from "../../../urls";
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
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
//import SettingModal from '../setting_components/settingModal'

class Settings_Info extends React.Component {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showElements, setShowElements] = React.useState(true)

constructor(props) {
    super(props);
    this.tableData = {};
 
    this.state = {value: '', file: '', buttonClicked: false, showModal: false, redirect:false, formData: {relays: ""}, relayData: []};

    this.uploadsettings = this.uploadsettings.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  modalToggle(value){

    this.setState({showModal: value});
}

handleredirect(){
  this.setState({redirect: true});

}

componentDidMount() {
axios( { method: 'get'  , url: urls.esp+ "rpi/"
  , headers: { }

})
.then(res => {

  try {

          console.log("herrrrrrrrrrrrrrrrr", res.data[0].IP);
          // let temp = res.data.map(test=> test.IP);
          this.setState({relayData:  res.data, formData: {relays: res.data[0].IP}});
      



  } catch (error) {
    console.log(error)
  }


})

}


  handleSubmit(event) {
    event.preventDefault();
    const formData_ = this.state.formData
    console.log('formmmmm', formData_)
    console.log(this.state.formData)
    const FormData = require('form-data');
    const form = new FormData();
    for ( var key in formData_ ) {
      form.append(key, formData_[key]);
  }
    // form.append('my_field', this.state.value);
    // form.append('file', this.state.file);
    // axios.get( urls.esp + "hello?query1=acc").then(res => console.log('1', res) )
    // axios.get( urls.esp + "hello?query1=OTTER").then(res => console.log('2', res) )


    let fetchSummoner = async() => {

//      const res = await axios.get( urls.esp + "hello?query1=acc").then(res => console.log('1', res) )
//
//      // console.log("1", res.data)
//
//      const res2 = await   axios.get( urls.esp + "hello?query1=OTTER").then(res => console.log('2', res) )
//
//      // console.log("2", res2.data)
//
//


      const res3 = await axios( { method: 'get'  , url: urls.esp + "rpi_set/" , data: form
       , headers: { }, params : {ip : this.state.formData.relays }

     })
     .then(res => {

       try {

               console.log(res.data);
               var patt = /(\S+\s+):=(\s+\S+)/g;
               var test1 = res.data.match(patt);
               let x = []
               test1.forEach((i, index) => { x.push({name: i.split(':=')[0], value: i.split(':=')[1]})})
               console.log(x)
               this.tableData = x
               this.setState({showModal: true, })



       } catch (error) {
         console.log(error)
       }


     })
      return 0;
  }
  fetchSummoner();






  }



handleOnChange = (e) => {
  const { value, name } = e.target
  console.log(name)
  this.setState(prevState => ({
    formData: {                   // object that we want to update
        ...prevState.formData,    // keep all other key-value pairs
        [name]: value       // update the value of specific key
    }
}))
}
  uploadsettings() {
      alert('Upload settings from Site <o>');}



  render() {
    let planets = this.state.relayData;
    let optionItems = planets.map((planet) =>
            <option key={planet.IP}>{planet.IP}</option>
        );
    if (this.state.redirect) {
      return <Redirect push to={{
       pathname: '/settings_parameters',
       state: { data: {table: this.tableData, form: this.state.formData } }
     }}/>;
     }

    return (
      <>

      {<CRow>
        {<CCol xs="12" md="8">
          {<CCard>

            <CCardHeader>
              <h2>Settings Information</h2>
            </CCardHeader>

                {/*-----------------------------------------------------------------*/}

            {<CCardBody>
              {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text">Substation Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CInput name="substation" type="text" onChange={this.handleOnChange} />
                  </CCol>
                </CFormGroup>}




                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text">Bay Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CInput type="text" name="bay_number"  onChange={this.handleOnChange} />
                  </CCol>
                </CFormGroup>}


                {<CFormGroup row>

                  <CCol md="3">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="manufacturer"  onChange={this.handleOnChange}>
                      <option value="0">----</option>
                      <option value="SEL">SEL</option>
                      <option value="ABB">ABB</option>
                      <option value="GE">GE</option>
                      <option value="Siemens">Siemens</option>
                      <option value="ZIV">ZIV</option>
                      <option value="Schneider">Schneider</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>}
                {<CFormGroup row>
 

                  <CCol md="3">
                    <CLabel htmlFor="select">Relays</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="relays"  onChange={this.handleOnChange}>
                    {optionItems}
      
                    </CSelect>
                  </CCol>
                </CFormGroup>}


                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectms">Scheme Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="ms">
                    <CSelect custom size="ms" name="scheme_type" onChange={this.handleOnChange} >
                      <option value="0">----</option>
                      <option value="1">OPDS</option>
                      <option value="2">Non-OPDS</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>*/}


                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectms">Serial No. List</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="ms">
                    <CSelect custom size="ms" name="serial_number" onChange={this.handleOnChange}>
                      <option value="0">----</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>}

                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel>Function</CLabel>
                  </CCol>
                  <CCol md="9">
                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                           custom
                           id="inline-checkbox1"
                           name="inline-checkbox1"
                           value="option1"
                           />
                          <CLabel variant="custom-checkbox"
                           htmlFor="inline-checkbox1">Distance</CLabel>
                        </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox2"
                            name="inline-checkbox2" value="option2" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Differential</CLabel>
                         </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox3"
                             name="inline-checkbox3" value="option3" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Over Current</CLabel>
                         </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Multifunction</CLabel>
                         </CFormGroup>
                  </CCol>
                </CFormGroup>*/}


                   <CButton size="sm" color="info" type="submit" >
                   {/* onClick={this.uploadsettings}> */}
                   <CIcon name="cil-CloudDownload"/> Collect Settings</CButton>


                   <CButton size="sm" color="info" to="/collected_data" className="float-right">Cancel</CButton>


              </CForm>}
            </CCardBody>}
          </CCard>}
        </CCol>}
      </CRow>}
      {<CModal
        show={this.state.showModal}
        onClose={() => this.modalToggle(false)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Analyzer</CModalTitle>
        </CModalHeader>
        <CModalBody>
         The setting file has been succefully read from relay. Click continue to view settings
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

export default Settings_Info
