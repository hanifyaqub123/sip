import React, { useState, useEffect } from "react";
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CCard
} from "@coreui/react";

const Dashboard = () => {
  return (
    <CContainer>
      <CCard>
        <CRow style={{ padding: 20,paddingBottom:0 }}>
          <CCol lg="2" className="py-3">
            <img
              style={{ width: 150, height: 160, borderRadius: 3 }}
              src="https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/Re9aEFwzvI.jpg"
            />
          </CCol>
          <CCol style={{ flexDirection: "row" }} md="10" className="py-3">
            <div style={{ marginTop: 15 }}>
              <div>
                <label style={{ paddingRight: 10, fontSize: 15 }}>Nama : </label>
                <label style={{ fontSize: 15 }}>Muhammad Hanif Yaqub</label>
              </div>
              <div>
                <label style={{ paddingRight: 10, fontSize: 15 }}>NIK : </label>
                <label style={{ fontSize: 15 }}>33105050797001</label>
              </div>
              <div>
                <label style={{ paddingRight: 10, fontSize: 15 }}>Jabatan : </label>
                <label style={{ fontSize: 15 }}>Operator Komputer</label>
              </div>
              <div>
                <label style={{ paddingRight: 10, fontSize: 15 }}>Unit Kerja : </label>
                <label style={{ fontSize: 15 }}>Kantor Pertanahan Kota Salatiga</label>
              </div>
            </div>


          </CCol>

        </CRow>

        <CRow style={{ padding: 20, }}>
          <CCol lg="12" className=" py-3">
            <h3 style={{ paddingBottom: 10 }}>Nilai SKP</h3>
            <table>
              <tr>
                <th style={{ width: '20%' }}>Tahun</th>
                <th style={{ width: '20%' }}>Nilai</th>

              </tr>
              <tr>
                <td>2012</td>
                <td>80</td>

              </tr>
            </table>

          </CCol>

        </CRow>
      </CCard>
    </CContainer>
  )
}

export default Dashboard