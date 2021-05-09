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


const PilihSkp = () => {
    const [showSkpAdd,setShowSkpAdd] = useState(false)
    const history = useHistory();
    return (

        <CContainer>
            <CCard style={{ padding: 20, }}>
                <h3>Daftar SKP</h3>
                <table>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Kegiatan</th>
                        <th style={{ textAlign: 'center' }}>Satuan Hasil</th>
                        <th style={{ textAlign: 'center' }}></th>
                    </tr>
                    <tr>
                        <th style={{ paddingLeft: 20 }} > Mengumpulkan bahan dan data, berita, informasi dan dokumentasi pertanahan</th>
                        <th style={{ textAlign: 'center' }}>Dokumen</th>
                        <th style={{ textAlign: 'center' }}>   <CButton style={{ marginRight: 10 }} color="danger">x</CButton></th>
                    </tr>

                </table>
                <CButtonToolbar style={{ paddingTop: 20, paddingBottom: 20 }} justify="end">
                    <CButton style={{ marginRight: 10 }} color="success">Pilih</CButton>
                    <CButton onClick={()=>{history.push("/buatskp")}} style={{ marginRight: 10 }} color="danger">Batal</CButton>
                    <CButton onClick={()=>{setShowSkpAdd(true)}} color="info">Tambah Baru</CButton>

                </CButtonToolbar>
            </CCard>
            {
                showSkpAdd === true &&
  <CCard style={{ padding: 20, }}>
  <h3>Tambah Baru Data Sasaran Kerja Pegawai (SKP)</h3>
  <CRow>
      <CCol lg="4" className="py-3">
          <div style={{ padding: 10, }}>
              <label style={{ fontSize: 15 }}>Nama Kegiatan Tugas Jabatan :	</label>
          </div>
          <div style={{ padding: 10, }}>
              <label style={{ fontSize: 15 }}>Satuan :	</label>
          </div>
      </CCol>
      <CCol lg="8" className="py-3">
          <div style={{ padding: 10, paddingTop: 5 }}>
              <CInput
                  type="text"
              />
          </div>
          <div style={{ padding: 10, paddingTop: 5 }}>
              <CInput
                  style={{ width: '40%' }}
                  type="text"
              />
          </div>


      </CCol>
  </CRow>
  <CButtonToolbar style={{ paddingTop: 20, paddingBottom: 20 }} justify="end">
                    <CButton style={{ marginRight: 10 }} color="success">Simpan & pilih </CButton>
                    <CButton onClick={()=>{setShowSkpAdd(false)}} style={{ marginRight: 10 }} color="danger">Batal</CButton>

                </CButtonToolbar>
</CCard>

            }
          
        </CContainer>
    )
}

export default PilihSkp