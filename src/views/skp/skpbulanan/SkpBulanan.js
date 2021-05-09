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
    <th style={{width:'20%',textAlign:'center'}}rowSpan="2">Kegiatan Tugas</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Target</th>

  </tr>
  <tr>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Tempat Lahir</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Tanggal Lahir</th>
    <th style={{width:'20%',backgroundColor:'#ffffff',textAlign:'center'}}>Jenis Kelamin</th>
  </tr>

  <tr>
    <th>1</th>
    <th>Coba</th>
    <th>Tempat Lahir</th>
    <th>Tanggal Lahir</th>
    <th>Jenis Kelamin</th>

  </tr>
 
</table>
</CCard>
          </CContainer>
      )
  }

  export default SkpBulanan