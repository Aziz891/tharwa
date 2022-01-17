import React, {Component} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow, 
  CButton
} from '@coreui/react'
import {urls} from "../../urls";

import usersData from '../users/UsersData'

const getBadge = Flags => {
  switch (Flags) {
    case 'OK': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Require Review': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','Description', 'value', 'Flags']

class Setting_Showing extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', file: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeFile = this.handleChangeFile.bind(this);


  }

  render() {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Settings Showing

              <CButton  color="success" className="float-right" active tabIndex={-1}  onClick={(e) => {
         e.preventDefault();
        window.location.href= urls.api +  `dashboard/export?id=${this.props.location.state.data[0].setting_id}`;
      }} >
               Export
              </CButton>
        
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={this.props.location.state.data}

                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={30}
                pagination
                scopedSlots = {{
                  'Flags':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.Flags)}>
                          {item.Flags}
                        </CBadge>
                      </td>
                    )
                }}
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </>
    )
  }
}

export default Setting_Showing
