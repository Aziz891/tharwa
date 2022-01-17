import React, { lazy, useEffect, useState, Component } from 'react'
import { Redirect } from 'react-router';
import {
   CContainer,
   CRow,
   CCard,
   CCardHeader,
   CCardBody,
   CCardFooter,
   CCol,
   CButton,
   CWidgetDropdown,
} from '@coreui/react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import * as ReactDOM from 'react-dom';
import {
    ArcGauge,
    LinearGauge,
    RadialGauge
} from '@progress/kendo-react-gauges';


const DemoContainer = ({ heading, children }) =>
    (<div><h1>{heading}</h1>{children}</div>);

const value = 30;
const pointer = {
    value: value
};

const arcCenterRenderer = (currentValue, color) => {
    return (<h3 style={{ color: color }}>{currentValue}%</h3>);
};

const gaugeStyles = {
    display: 'block'
};


const Gauges= () => {
  return (
<>

           <DemoContainer heading="Gauges demos">
             <div className="row">
               <div className="col-sm-12 col-md-5">
                 <ArcGauge style={gaugeStyles} value={value} arcCenterRender={arcCenterRenderer} />
               </div>
             </div>
           </DemoContainer>

</>
  )

//DemoContainerReactDOM.render(
//  <Gauges />,
//    document.querySelector('my-app')
//);

}

export default Gauges


