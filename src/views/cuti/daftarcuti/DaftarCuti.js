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

  const DaftarCuti = () =>{
      return(
          <CContainer>
              <CCard style={{padding: 20,}}>
             <label>*Untuk cetak cuti, silahkan pilih table yang tertera</label>
                  <table onClick={()=>alert('ok')}>
                      <td>
                          <tr>1</tr>
                      </td>
                      <td>
                      <tr style={{display:'flex',flexDirection:'column'}}>
                             <label style={{fontSize:20}}>01/08/2016 s.d. 01/11/2016</label>
                             <label >Cuti Sakit - 2021</label>
                        </tr>
                      </td>
                      <td>
                      <tr style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                             <label style={{fontSize:20}}>15 Hari Kalender</label>
                        </tr>
                      </td>
                      <td>
                      <tr style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                             <label style={{fontSize:20}}>Disetujui</label>
                             <label >15/05/2021</label>
                        </tr>
                      </td>
                      <td>
                      <tr style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                             <label style={{fontSize:20}}>No Surat : 18/2-21.100/VII/2016</label>
                             <label >Tanggal Surat : 27/07/2016</label>
                        </tr>
                      </td>
                    
                      
                  </table>
              </CCard>
          </CContainer>
      )
  }
  export default DaftarCuti