
import React, { Component, Suspense } from 'react';
import Dashboard from '../dashboard/Dashboard'
import CChartPie from '../charts/Charts'

import axios from "axios";



class page_1 extends React.Component {

  

    render() {
      return (
        
<div>

{/* 
            <div>

            <Dashboard url={'ped'} title={'PED IPS Entries'}/> 
            </div> */}
          <div>

            
              <div>

            <CChartPie url={'http://10.75.81.29:81/faults/ipsrelays/'} title={'Most Common Relays'} />
              </div>
              {/* <div>

            <CChartPie url={'http://10.75.81.29:81/faults/ipstechnology/'}  title={'Breakdown of Relay Technology'}/>
              </div> */}
            

            
          </div>
         
            
          

</div>
  


     
  

      
        

        
      
     

      );
    }
  }
  export default page_1