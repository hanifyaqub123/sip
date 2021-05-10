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

  const NilaiSkp = () =>{
      return(
          <CContainer>
                  <CCard style={{padding:20}}> 
          <h3>Data Pegawai</h3>
        <CRow>
          <CCol lg="6" className="py-3">
            <div>
            <label>Pejabat Penilai : &nbsp;</label>
            <label>Muhammad Hanif Yaqub</label>
            </div>
            <div>
            <label>Nama : &nbsp;</label>
            <label>Muhammad Hanif Yaqub</label>
            </div>
            <div>
            <label>NIP : &nbsp;</label>
            <label>3332558234582</label>
            </div>
            <div>
            <label>Jabatan : &nbsp;</label>
            <label>PPNPN</label>
            </div>
            <div>
            <label>Unit Kerja : &nbsp;</label>
            <label>Tata Usaha</label>
            </div>
          </CCol>
          <CCol md="6" className="py-3">
          <div>
            <label>Pegawai yang dinilai : &nbsp;</label>
            <label>Muhammad Hanif Yaqub</label>
            </div>
            <div>
            <label>Nama : &nbsp;</label>
            <label>Muhammad Hanif Yaqub</label>
            </div>
            <div>
            <label>NIP : &nbsp;</label>
            <label>3332558234582</label>
            </div>
            <div>
            <label>Jabatan : &nbsp;</label>
            <label>PPNPN</label>
            </div>
            <div>
            <label>Unit Kerja : &nbsp;</label>
            <label>Tata Usaha</label>
            </div>
          </CCol>
        </CRow>
        </CCard>
                   <CCard style={{padding:20}}>
                   <h3>Realisasi SKP</h3>
                   <table>
  <tr>
    <th style={{width:'3%',textAlign:'center'}} rowSpan="2">No</th>
    <th style={{width:'20%',textAlign:'center'}}rowSpan="2">Uraian Tugas</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Target</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Realisasi</th>
    <th style={{width:'3%',textAlign:'center'}} rowSpan="2">Perhitungan</th>
    <th style={{width:'20%',textAlign:'center'}}rowSpan="2">Nilai Capaian SKP</th>

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

  export default NilaiSkp