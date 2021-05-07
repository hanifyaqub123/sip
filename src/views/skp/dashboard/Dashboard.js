import React, { useState, useEffect } from "react";
import {
    CButton,
    CContainer,
    CRow,
    CCol
  } from "@coreui/react";

  const Dashboard = () =>{
      return(
        <CContainer>
        <CRow>
          <CCol lg="2" className=" bg-info py-3">
            <img
                style={{width:150,height:150}}
                src="https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/Re9aEFwzvI.jpg"
            />
          </CCol>
          <CCol md="10" className="bg-warning py-3">
            
          </CCol>

        </CRow>
      </CContainer>
      )
  }

  export default Dashboard