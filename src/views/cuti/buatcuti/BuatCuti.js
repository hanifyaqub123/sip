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

  const BuatCuti = () =>{
      return(
          <CContainer>
              <CCard style={{padding:20}}>
               <CRow>
                <CCol md="6" className="py-3">
                    <h5>Form Cuti</h5>
                    <div style={{marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,paddingBottom:10}}>
                        <label style={{fontSize:15,width:100,paddingTop:5}}>Jenis Cuti:</label>
                        <select class="form-control">
                       <option>--Pilih--</option>
                       <option value="nilai-perilaku">Cuti Sakit</option>
                       <option value="nilai-ppk">Cuti Melahirkan</option>
                   </select>
                    </div>
                    <div style={{marginTop:20,display:'flex',flexDirection:'row'}}>
                        <label style={{fontSize:15,width:100,paddingTop:5}}>Pengajuan:</label>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <input type="radio"/>
                            <label style={{paddingTop:5,paddingLeft:5,paddingRight:10}}>Baru</label>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <input type="radio"/>
                            <label style={{paddingTop:5,paddingLeft:5,paddingRight:10}}>Perpanjangan</label>
                        </div>
                        </div>
                    </div>

                    <div style={{marginTop:20,display:'flex',flexDirection:'row'}}>
                        <label style={{fontSize:15,width:250}}>Tgl Cuti:</label>
                    <CInput
                        type="date"
                        placeholder="Gelar Non Akademis Depan"
                        autoComplete="gelar-non-akademis-depan"
                      />
                      <label style={{padding: 5,}}>s/d</label>
                      <CInput
                        type="date"
                        placeholder="Gelar Non Akademis Depan"
                        autoComplete="gelar-non-akademis-depan"
                      />
                    </div>
                    <div style={{marginTop:20,display:'flex',flexDirection:'row'}}>
                    <label style={{fontSize:15,width:100,paddingTop:5}}>Lama Cuti:</label>
                    <label style={{padding: 5,}}>5  Hari Kalender</label>
                    </div>

                    <div style={{marginTop:20,display:'flex',flexDirection:'row'}}>
                    <label style={{fontSize:15,width:100,paddingTop:5}}>Keterangan:</label>
                   <textarea style={{width:'80%'}}/>
                    </div>

                    <div style={{marginTop:20,display:'flex',flexDirection:'row'}}>
                    <label style={{fontSize:15,width:100,paddingTop:5}}>Keterangan Dokter:</label>
                   <textarea style={{width:'80%'}}/>
                    </div>
                    
                </CCol>
                <CCol md="6" className="py-3">
                    <h5>Keterangan Pegawai</h5>
                    <div style={{marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1}}>
                        <label style={{fontSize:15,width:100}}>Nama:</label>
                        <label style={{fontSize:15,width:'100%'}}>Muhammad Hanif Yaqub</label>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',borderBottomWidth:1}}>
                        <label style={{fontSize:15,width:100,paddingTop:5}}>NIP:</label>
                        <label style={{fontSize:15,width:'100%',paddingTop:5}}>3319050507970001</label>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',borderBottomWidth:1}}>
                        <label style={{fontSize:15,width:100,paddingTop:5}}>Golongan:</label>
                        <label style={{fontSize:15,width:'100%',paddingTop:5}}>33/VA</label>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',borderBottomWidth:1,paddingBottom:10}}>
                        <label style={{fontSize:15,width:100,paddingTop:5}}>Unit Kerja:</label>
                        <label style={{fontSize:15,width:'100%',paddingTop:5}}>Tata Usaha</label>
                    </div>

                    <h5>Informasi kelengkapan syarat cuti</h5>
                    <table>
                        <tr>
                            <th style={{width:5}}>1</th>
                            <th>sasas</th>
                        </tr>
                    </table>
                    <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
        <CButton style={{marginRight:10}} color="success">Simpan</CButton>
        <CButton style={{marginRight:10}} color="danger">Batal</CButton>
    </CButtonToolbar>
                </CCol>
          </CRow>
          </CCard>
          </CContainer>
      )
  }

  export default BuatCuti