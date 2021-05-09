import React, { useState, useEffect } from "react";
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CCard,
  CButtonToolbar,
  CInput
} from "@coreui/react";
import { useHistory } from "react-router-dom";


const BuatSkp = () =>{
  const history = useHistory();
  const [data,setData] = useState( [
    {
      'kegiata':'coba',
      'output' :'coba',
      'mutu' : 'coba',
      'waktu' : 'coba'
    },
    {
      'kegiata':'coba1',
      'output' :'coba',
      'mutu' : 'coba',
      'waktu' : 'coba'
    }
  ])

const handleRemoveList = e=>{
  var array = [...data]
  const index = e.target.value
  if (index > -1) {
    array.splice(index, 1);
    setData(array)
  }

}

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
          <h3>Sasaran SKP</h3>
          <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
        <CButton onClick={()=>history.push("/pilihskp")} style={{marginRight:10}} color="danger">Pilih SKP</CButton>
    </CButtonToolbar>
          <CCol  className="py-3">
        
<table>
  <tr>
    <th style={{width:'3%',textAlign:'center'}} rowSpan="2">No</th>
    <th style={{width:'40%',textAlign:'center'}}rowSpan="2">Kegiatan Tugas</th>
    <th style={{width:'20%',textAlign:'center'}} colSpan="3">Target</th>

  </tr>
  <tr>
    <th style={{width:'5%',backgroundColor:'#ffffff',textAlign:'center'}}>Kuantitas / Output</th>
    <th style={{width:'5%',backgroundColor:'#ffffff',textAlign:'center'}}>Kualitas / Mutu</th>
    <th style={{width:'10%',backgroundColor:'#ffffff',textAlign:'center'}}>Waktu (Bulan)</th>
  </tr>
  {
      data.map((res,index)=>{
        return(
          <tr>
            <th style={{textAlign:'center'}}>{index}</th>
            <th>
            <CInput
                        value={res.kegiata}
                        type="text"
                        placeholder=""
            />
            
            </th>
            <th>
            <CInput
                        style={{textAlign:'center'}}
                        type="text"
                        placeholder="0"
                        autoComplete=""
            />
            </th>
            <th>
            <CInput
                        style={{textAlign:'center'}}
                        type="text"
                        placeholder="0"
                        autoComplete=""
            />
            </th>
            <th style={{display:'flex', flexDirection:'row'}}>
            <CInput
                        style={{textAlign:'center'}}
                        type="text"
                        placeholder="0"
                        autoComplete=""
            />
              <CButton 
              value={index}
              onClick={handleRemoveList}
              style={{marginLeft:10}} color="danger">x</CButton>
            </th>
         
          </tr>
        )
      })
  }

<tr>
    <th style={{width:'5%',backgroundColor:'#ffffff',textAlign:'center'}}></th>
    <th style={{width:'5%',backgroundColor:'#ffffff',textAlign:'center'}}>Jumlah</th>
    <th style={{width:'10%',backgroundColor:'#ffffff',textAlign:'center'}}></th>
    <th style={{width:'10%',backgroundColor:'#ffffff',textAlign:'center'}}></th>
    <th style={{width:'10%',backgroundColor:'#ffffff',textAlign:'center'}}></th>
  </tr>
  

 
</table>

        
        </CCol>
        <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="end">
        <CButton style={{marginRight:10}} color="success">Kirim Atasan</CButton>
        <CButton style={{marginRight:10}} color="info">Cetak</CButton>

    </CButtonToolbar>
        </CCard>
      </CContainer>
    )
}

export default BuatSkp