import React, { lazy, useEffect, useState, Component } from 'react'
import { Redirect } from 'react-router';
import {urls} from "../../../urls";
import {
   CContainer,
   CRow,
   CCard,
   CCardHeader,
   CCardBody,
   CCardFooter,
   CCol,
   CButton,
} from '@coreui/react'
import {
  CBadge,
  CDataTable,
} from '@coreui/react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
let fields = [
// 'id'
,'substation'
//,'bay_number'
//,'manufacturer'
// ,'scheme_type'
// ,'serial_number'
// ,'function_type'
//,'creation_date',
,'created_by'
]

const Connected_Relays= () => {
  const  [data, setData] = useState();
  const  [tabledata, settableData] = useState(0);
  const  [redirect, setredirect] = useState(false);

  let redirect_id = 0;

  useEffect(() => {

    axios.get(urls.api + 'dashboard/setting/')
    .then(function (response) {
      console.log(response);
      setData(response.data)

   })
    .catch(function (error) {
      console.log(error);
    });

  }
   , [])

  const  handleclick = e => {
    redirect_id = e.id
    axios.get(urls.api + `dashboard/setting/${redirect_id}`).then(
      res => {
        console.log("herrr", res.data.param)
        settableData(res.data.param)
        console.log(e)
        setredirect(true)
      }
      )

  }
  if (redirect) {
    return  <Redirect push to={{
     pathname: '/setting_showing',
     state: { data: tabledata }
   }}/>;
   }

  return (
    <>

<CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h2 id="collect" className="card-title mb-0">Connected Relays</h2>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>


<CCard>
              <CCardBody>
              <CDataTable
                items={data}
                fields={fields}
                sorter={true}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={30}
                onRowClick={handleclick}
                pagination
              />
              </CCardBody>
            </CCard>

    </>
  )
}

export default Connected_Relays
