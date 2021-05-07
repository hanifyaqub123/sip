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

  const RiwayatPendidikan = () =>{
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
    <th style={{width:'3%'}}>No</th>
    <th style={{width:'10%'}}>Jenjang</th>
    <th style={{width:'15%'}}>Jurusan</th>
    <th style={{width:'20%'}}>Sekolah/PT</th>
    <th style={{width:'5%'}}>Nilai/IPK</th>
    <th style={{width:'10%'}}>Tahun Lulus</th>
    <th >No Ijazah</th>
  </tr>
  <tr>
    <td>1</td>
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

  export default RiwayatPendidikan