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

  const NilaiPrestasiKerja = () =>{
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
        <div>
            <table>
                <tr>
                    <th style={{width:10,textAlign:'center'}}>No</th>
                    <th style={{textAlign:'center'}}>Penilaian Prestasi Kerja</th>
                    <th style={{textAlign:'center'}}>Nilai</th>
                   
                </tr>
                <tr>
                    <th style={{width:10,textAlign:'center'}}>1</th>
                    <th>Nilai SKP x 60%</th>
                    <th style={{textAlign:'center'}}></th>

                </tr>
                <tr>
                    <th style={{width:10,textAlign:'center'}}>2</th>
                    <th>Nilai Perilaku Kerja x 40%</th>
                    <th style={{textAlign:'center'}}></th>

                </tr>
            
                <tr>
                    <th style={{width:10,textAlign:'center'}} colSpan="2">Jumlah Nilai Prestasi Kerja</th>
                    <th style={{textAlign:'center'}}></th>
                </tr>
            </table>
        </div>
        <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
        <CButton style={{marginRight:10}} color="success">Kirim Atasan</CButton>
        <CButton style={{marginRight:10}} color="info">Cetak</CButton>
    </CButtonToolbar>
        </CCard>
                
          </CContainer>
      )
  }
  export default NilaiPrestasiKerja