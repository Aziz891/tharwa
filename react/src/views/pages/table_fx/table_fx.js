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

const Table_fx= (props) => {
  const  [data, setData] = useState();
  const  [tabledata, settableData] = useState(0);
  const  [redirect, setredirect] = useState(false);
  const  [newitem, setnewitem] = useState(false);
  const  [updated, setupdated] = useState(props.updated);
  let fields = props.fields    

  let redirect_id = 0;

  // useEffect(() => {

  // //   axios.get(urls.api + 'dashboard/' + props.url)
  // //   .then(function (response) {
  // //     console.log(response);
  // //     setData(response.data.register.map(x => x.course))

  // //  })
  // //   .catch(function (error) {
  // //     console.log(error);
  // //   });

  // // }
  //  , [])
   const  handleadd = e => {
    settableData({})
    setnewitem(true)
    setredirect(true)

    

  }
  const  handleclick = e => {
    // redirect_id = e.id
    // axios.get(urls.api + `dashboard/${props.url}/${redirect_id}`).then(
    //   res => {
    //     console.log("herrr", res.data)
    //     settableData(res.data.courses)
    //     console.log(e)
    //     setredirect(true)
    //   }
    //   )

  }
  if (redirect) {
    return  <Redirect push to={{
     pathname: props.rerdirect,
     state: { data: tabledata, newstudent: newitem }
   }}/>;
   }

  return (
    <>




<CCard>
<CCardHeader>
              {props.name}
            </CCardHeader>
              <CCardBody>
            
              <CDataTable
                items={props.data}
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

export default Table_fx
