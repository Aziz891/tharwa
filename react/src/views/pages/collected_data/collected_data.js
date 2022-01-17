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
,'name'
,'email'
,'national_id'
// ,'scheme_type'
// ,'serial_number'
// ,'function_type'
,'birth_date',
'registration_date'
]

const Collected_Data= () => {
  const  [data, setData] = useState();
  const  [tabledata, settableData] = useState(0);
  const  [redirect, setredirect] = useState(false);
  const  [newitem, setnewitem] = useState(false);

  let redirect_id = 0;

  useEffect(() => {

    axios.get(urls.api + 'dashboard/student/')
    .then(function (response) {
      console.log(response);
      setData(response.data)

   })
    .catch(function (error) {
      console.log(error);
    });

  }
   , [])
   const  handleadd = e => {
    settableData({})
    setnewitem(true)
    setredirect(true)

    

  }
  const  handleclick = e => {
    redirect_id = e.id
    axios.get(urls.api + `dashboard/student/${redirect_id}`).then(
      res => {
        console.log("herrr", res.data)
        settableData(res.data)
        console.log(e)
        setredirect(true)
      }
      )

  }
  if (redirect) {
    return  <Redirect push to={{
     pathname: '/student_details',
     state: { data: tabledata, newstudent: newitem }
   }}/>;
   }

  return (
    <>

<CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h2 id="collect" className="card-title mb-0">Collected Data</h2>
            </CCol>

            <CCol sm="7" className=" d-md-block">
              <CButton color="success" className="float-right" active tabIndex={-1} onClick={handleadd}>
               Add new
              </CButton>
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
                // scopedSlots = {{
                //   'Flags':
                //     (item)=>(
                //       <td>
                //         <CBadge color={getBadge(item.Flags)}>
                //           {item.Flags}
                //         </CBadge>
                //       </td>
                //     )
                // }}
              />
              </CCardBody>
            </CCard>

    </>
  )
}

export default Collected_Data
