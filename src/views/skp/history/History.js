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

  const History = () =>{

    const [getValueSKP,setGetValueSKP] = useState("")
    
    const handleSelectSkp = e =>{
        setGetValueSKP(e.target.value)
    }
      return(
          <CContainer>
              <CCard style={{padding:20}}>
               <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
                   <select onChange={handleSelectSkp}  style={{width:'15%'}} class="form-control">
                       <option>--Pilih--</option>
                       <option value="nilai-skp">Nilai SKP</option>
                       <option value="nilai-perilaku">Nilai Perilaku</option>
                       <option value="nilai-ppk">Nilai PPK</option>
                   </select>
                   <select style={{width:'10%',marginLeft:10}} class="form-control">
                       <option>Tahun</option>
                   </select>
                </CButtonToolbar>
                {
                    getValueSKP === "nilai-skp" &&
                    <div>
                           
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

<CButton style={{marginRight:10}} color="info">Download</CButton>
</CButtonToolbar>
                    </div>
                    
                    
                }
                {
                     getValueSKP === "nilai-perilaku" &&
                     <div>
                     <table>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>No</th>
                             <th style={{textAlign:'center'}}>Perilaku Kerja</th>
                             <th style={{textAlign:'center'}}>Nilai Angka</th>
                             <th style={{textAlign:'center'}}>Sebutan</th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>1</th>
                             <th>Perilaku Kerja</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>2</th>
                             <th>Integritas</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>3</th>
                             <th>Komitmen</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>4</th>
                             <th>Disiplin</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}}>5</th>
                             <th>Kerjasama</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}} colSpan="2">Jumlah</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                         <tr>
                             <th style={{width:10,textAlign:'center'}} colSpan="2">Rata - Rata</th>
                             <th style={{textAlign:'center'}}></th>
                             <th style={{textAlign:'center'}}></th>
                         </tr>
                     </table>
                     <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">

<CButton style={{marginRight:10}} color="info">Download</CButton>
</CButtonToolbar>
                 </div>
                 
                }

                {
                     getValueSKP === "nilai-ppk" &&
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
                     <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">

                        <CButton style={{marginRight:10}} color="info">Download</CButton>
                    </CButtonToolbar>
                 </div>
                 
                }

             
                </CCard>
          </CContainer>
      )
  }

  export default History