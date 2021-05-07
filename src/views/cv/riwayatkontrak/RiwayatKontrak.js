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
  } from "@coreui/react";
  import axios from "axios";

  const RiwayatKontrak = () =>{
      return(
    <CContainer>
        <CButtonToolbar justify="end">
        <CButton style={{marginRight:10}} color="success">Tambah</CButton>
        <CButton style={{marginRight:10}} color="info">Ubah</CButton>
        <CButton color="danger">Hapus</CButton>
      </CButtonToolbar>
      <CRow>
    <CCol  className="py-3">
<table>
  <tr>
    <th style={{width:10}}>No</th>
    <th style={{width:'20%'}}>Nama Jabatan</th>
    <th style={{width:'20%'}}>No Kontrak</th>
    <th style={{width:'20%'}}>Masa Berlaku</th>
    <th style={{width:'20%'}}>Gaji</th>
    <th style={{width:'20%'}}>Unit Kerja</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
    <td>1234</td>
  </tr>
 
</table>
        </CCol>
        
      </CRow>
    </CContainer>
      )
  }

  export default RiwayatKontrak