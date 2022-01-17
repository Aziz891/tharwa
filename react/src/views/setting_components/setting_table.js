import React, {Component} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

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
const fields = ['Name','Description', 'Value', 'Flags']

class Setting_Table extends Component {
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
                Settings Analyzer
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

export default Setting_Table
