import React,{useState} from "react";
import { Link } from "react-router-dom";
import Backgorund from "../../../assets/bg-abstract-white.jpeg";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [nik,setNIK] = useState("");
  const [password,setPassword] = useState("");

  const handleNIK = e =>{
    setNIK(e.target.value)
  }

  const handlePassword = e =>{
    setPassword(e.target.value)
  }

  const handleButtonLogin = e =>{
    if (nik === "") {
      alert("NIK tidak boleh kosong")
    } else if (password === "") {
      alert("Password tidak boleh kosong")
    } else  {
      alert("parsing")
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${Backgorund})` }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>PPNPN</h1>
                    <p className="text-muted">Masuk dengan NIK anda</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        value={nik}
                        type="number"
                        placeholder="NIK"
                        autoComplete="NIK"
                        onChange={handleNIK}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        value={password}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={handleButtonLogin} color="primary" className="px-4">
                          Masuk
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Pendaftaran</h2>
                    <p>
                      Bagi PPNPN yang belum mendaftar di sistem SIP, silahkan mendaftar terlebih dahulu.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Daftar Sekarang!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
