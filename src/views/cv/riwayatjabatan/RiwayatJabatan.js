import React, { useState, useEffect } from "react";
import {
    CCol,
    CRow,
    CContainer,
    CFormGroup,
    CLabel,
    CInput,
    CCard,
    CButton,
    CButtonToolbar,
  } from "@coreui/react";
  import axios from "axios";

  const RiwayatJabatan = () =>{
      return(
    <CContainer>
             <CCard style={{padding:20}}>
        <CButtonToolbar justify="end">
        <CButton style={{marginRight:10}} color="success">Tambah</CButton>
        <CButton style={{marginRight:10}} color="info">Ubah</CButton>
        <CButton color="danger">Hapus</CButton>
      </CButtonToolbar>
      <CRow>
    <CCol  className="py-3">
<table>
  <tr>
    <th style={{width:'3%'}}>No</th>
    <th style={{width:'20%'}}>Nomor SK</th>
    <th style={{width:'20%'}}>Tanggal SK</th>
    <th>Nama Jabatan</th>
    <th style={{width:'20%'}}>Unit Kerja</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
  </tr>
 
</table>
        </CCol>
        
      </CRow>
      </CCard>
    </CContainer>
      )
  }

  export default RiwayatJabatan