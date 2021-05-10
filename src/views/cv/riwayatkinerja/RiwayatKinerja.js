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

  const RiwayatKinerja = () =>{
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
    <th style={{width:10}}>No</th>
    <th style={{width:'20%'}}>Tahun Pnilaian</th>
    <th style={{width:'20%'}}>Tanggal Penilaian</th>
    <th style={{width:'20%'}}>Nama Jabatan</th>
    <th style={{width:'20%'}}>Unit Kerja</th>
    <th style={{width:'20%'}}>Skor Penilaian</th>
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
      </CCard>
    </CContainer>
      )
  }

  export default RiwayatKinerja