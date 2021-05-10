import React,{useState} from 'react'
import {
    CButtonToolbar,
    CForm,
    CCol,
    CContainer,
    CRow,
    CLabel,
    CInput,
    CFormGroup,
    CButton,
    CSpinner,
    CCard
  } from '@coreui/react'


  const SkpBulanan = () =>{
      return(
          <CContainer >
              <CCard style={{padding: 20,}}>
                <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
                   <select style={{width:'15%'}} class="form-control">
                       <option>Pilih Periode</option>
                   </select>
                   <select style={{width:'10%',marginLeft:10}} class="form-control">
                       <option>Tahun</option>
                   </select>

                </CButtonToolbar>

                <table>
  <tr>
    <th style={{width:'3%',textAlign:'center'}} rowSpan="2">No</th>
    <th style={{width:'20%',textAlign:'center'}}rowSpan="2">Uraian Tugas</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Target</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Realisasi</th>

  </tr>
  <tr>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Kuantitas</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Kualitas</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Waktu</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Kuantitas</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Kualitas</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Waktu</th>
  </tr>
  

  <tr>
    <th>1</th>
    <th>0</th>
    <th>0</th>
    <th>0</th>
    <th>0</th>
    <th>0</th>
    <th>0</th>
    <th>0</th>

  </tr>
 
</table>

<CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
        <CButton style={{marginRight:10}} color="success">Kirim Atasan</CButton>
        <CButton style={{marginRight:10}} color="info">Cetak</CButton>
    </CButtonToolbar>
</CCard>
          </CContainer>
      )
  }

  export default SkpBulanan