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

  const RiwayatSeminar = () =>{
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
    <th style={{width:'3%'}}>Nama Diklat/Seminar</th>
    <th >Tahun</th>
    <th >Tanggal Mulai</th>
    <th>Tanggal Selesai</th>
    <th >Tempat</th>
    <th >Penyelenggara</th>
    <th >No Sertipikat</th>
    <th >Tanggal Sertipikat</th>
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
    </CContainer>
      )
  }

  export default RiwayatSeminar