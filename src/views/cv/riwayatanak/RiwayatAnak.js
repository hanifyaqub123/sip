import React, { useState, useEffect } from "react";
import {
    CCol,
    CRow,
    CContainer,
    CFormGroup,
    CLabel,
    CInput,
    CFormText,
    CButton,
    CButtonToolbar,
    CCard
  } from "@coreui/react";
  import axios from "axios";

  const RiwayatAnak = () =>{
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
    <th style={{width:'20%'}}>Nama</th>
    <th style={{width:'20%'}}>Tempat Lahir</th>
    <th style={{width:'20%'}}>Tanggal Lahir</th>
    <th style={{width:'20%'}}>Jenis Kelamin</th>
    <th style={{width:'20%'}}>Status</th>
    <th style={{width:'20%'}}>Anak Ke-</th>
    <th style={{width:'20%'}}>Pendidikan</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
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

  export default RiwayatAnak