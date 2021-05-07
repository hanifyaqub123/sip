import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
  CLabel
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
const Register = () => {
  const [nik, setNik] = useState("");
  const [agama, setAgama] = useState("");
  const [gelarNonAkademisD, setGelarNonAkademisD] = useState("");
  const [gelarNonAkademisB, setGelarNonAkademisB] = useState("");
  const [gelarAkademisD, setGelarAkademisD] = useState("");
  const [gelarAkademisB, setGelarAkademisB] = useState("");
  const [statusPernikahan, setStatusPernikahan] = useState("");
  const [golonganDarah, setGolonganDarah] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [imagePP, setImagePP] = useState("");
  const [pendidikanTerkahir, setPendidiaknTerakhir] = useState("");
  const [formasiJabatan, setFormasiJabatan] = useState("");
  const [nip, setNip] = useState("");




  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setkecamatan] = useState([]);

  useEffect(() => {
    handleProvisni();
  }, []);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      // console.log(reader.result);
      // localStorage.setItem('recent-image',reader.result);

      if (reader.readyState === 2) {
        setImagePP(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    console.log(imagePP);
  };

  function handleProvisni() {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        setProvinsi(res.data.provinsi);
      });
  }

  const handleProvinsiId = (e) => {
    axios
      .get(
        "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=" +
          e.target.value +
          ""
      )
      .then((res) => {
        setKota(res.data.kota_kabupaten);
      });
  };

  const handleKotaId = (e) => {
    axios
      .get(
        "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" +
          e.target.value +
          ""
      )
      .then((res) => {
        setkecamatan(res.data.kecamatan);
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="10">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Pendaftaran PPNPN</h1>
                  <p className="text-muted">Mohon isi data dengan benar</p>
                  <h2>Biodata</h2>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="number"
                        placeholder="NIK"
                        autoComplete="NIK"
                      />
                    </CInputGroup>

                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                      class="form-control"
                      >
                        <option value="">-- Pilih Agama --</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen Protestan">
                          Kristen Protestan
                        </option>
                        <option value="Kristen Katolik">Kristen Katolik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddha">Buddha</option>
                        <option value="Konghucu">Konghucu</option>
                      </select>
                    </CInputGroup>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Gelar Non Akademis Depan"
                        autoComplete="gelar-non-akademis-depan"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Gelar Non Akademis Belakang"
                        autoComplete="gelar-non-akademis-belakang"
                      />
                    </CInputGroup>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Gelar Akademis Depan"
                        autoComplete="gelar-akademis-depan"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Gelar Akademis Belakang"
                        autoComplete="gelar-akademis-belakang"
                      />
                    </CInputGroup>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 16,
                        marginRight: 10,
                        width: "48.7%",
                      }}
                    >
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                        class="form-control"
                      >
                        <option value="">--Status Pernikahan--</option>
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Sudah Menikah">Sudah Menikah</option>
                      </select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 16,
                        marginRight: 10,
                        width: "48.7%",
                      }}
                    >
                      <CInputGroupPrepend>
                        <CInputGroupText>O</CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                       class="form-control"
                      >
                        <option value="">--Golongan Darah--</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Tempat Lahir"
                        autoComplete="tempat-lahir"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="date"
                        placeholder="Tanggal Lahir"
                        autoComplete="tanggal-lahir"
                      />
                    </CInputGroup>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Alamat"
                        autoComplete="alamat"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="number"
                        placeholder="RT"
                        autoComplete="rt"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="number"
                        placeholder="RW"
                        autoComplete="rw"
                      />
                    </CInputGroup>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 16,
                        marginRight: 10,
                        width: "49%",
                      }}
                    >
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                        onChange={handleProvinsiId}
                        class="form-control"
                      >
                        <option value="">--Pilih Provinsi--</option>
                        {provinsi.map((res, index) => {
                          return (
                            <option key={index} value={res.id}>
                              {res.nama}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 16,
                        marginRight: 10,
                        width: "49%",
                      }}
                    >
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                        onChange={handleKotaId}
                        class="form-control"
                      >
                        <option value="">-- Pilih Kabupaten/Kota --</option>
                        {kota.map((res, index) => {
                          return (
                            <option key={index} value={res.id}>
                              {res.nama}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 16,
                        marginRight: 10,
                        width: "100%",
                      }}
                    >
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <select
                        class="form-control"
                      >
                        <option value="">-- Pilih Kecamatan --</option>
                        {kecamatan.map((res, index) => {
                          return (
                            <option key={index} value={res.id}>
                              {res.nama}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Kode Pos"
                        autoComplete="kode-pos"
                      />
                    </CInputGroup>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Pendidikan Terakhir"
                        autoComplete="pendikan-terakhir"
                      />
                    </CInputGroup>
                    <CInputGroup style={{ marginRight: 10 }} className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Formasi Jabatan"
                        autoComplete="formasi-jabatan"
                      />
                    </CInputGroup>
                  </div>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
              <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                    <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="number"
                    placeholder="NIP"
                    autoComplete="nip"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>@</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="email"
                    placeholder="email"
                    autoComplete="email"
                  />
                </CInputGroup>

                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-4">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                  />
                </CInputGroup>
               <CFormGroup>
              <CLabel style={{ fontWeight: "bold" }}>GANTI FOTO</CLabel>
              <CInput
                style={{
                  height: "100%",
                  background: "transparent",
                  border: "none",
                }}
                onChange={imageHandler}
                type="file"
                id="input"
                name="image-upload"
                accept="image/*"
              />
            </CFormGroup>

                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>Kembali</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>Masuk</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
