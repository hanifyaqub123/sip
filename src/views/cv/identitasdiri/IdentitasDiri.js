import React, { useState, useEffect } from "react";
import {
  CCol,
  CRow,
  CContainer,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CButton,
  CButtonToolbar,
} from "@coreui/react";
import axios from "axios";

const IdentitasDiri = () => {
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
    <div>
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <div>
          <img
            alt="Foto Profile"
            // src={user[0].img}
            src="https://lh3.googleusercontent.com/proxy/dxxJ2z_3id7nR7yrWoMw4p-3FBVrH4Z4rO9Kxie-dihygqdDL-TmVYoh6713VOLwetuO6XODAcY2E1O6V0MobZQ7m95M718d1oW-64MA0rQZaoQlUsoPiE5E6j99"
            style={{
              width: 250,
              height: 200,
              borderRadius: "50%",
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "2%",
            }}
          />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>PPNPN</label>
        </div>
        <div>
          <label>PPNPN</label>
        </div>
      </div>
      <CContainer>
        <CRow>
          <CCol md="6" className="py-3">
            <CFormGroup>
              <CLabel>NIK</CLabel>
              <CInput
                type="text"
                id="nik"
                name="nik"
                placeholder="NIK"
                autoComplete="nik"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Gelar Non Akademis Depan</CLabel>
              <CInput
                type="text"
                id="gelar-non-akademis-depan"
                name="gelar-non-akademis--depan"
                placeholder="Gelar Non Akademis Depan"
                autoComplete="gelar-non-akademis-depan"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Gelar Akademis Depan</CLabel>
              <CInput
                type="text"
                id="gelar-akademis-depan"
                name="gelar-akademis-depan"
                placeholder="Gelar Akademis Depan"
                autoComplete="gelar-akademis-depan"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Status Pernikahan</CLabel>
              <select class="form-control">
                <option value="">--Status Pernikahan--</option>
                <option value="Belum Menikah">Belum Menikah</option>
                <option value="Sudah Menikah">Sudah Menikah</option>
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Tempat Lahir</CLabel>
              <CInput
                type="text"
                id="tempat-lahir"
                name="tempat-lahir"
                placeholder="Tempat Lahir"
                autoComplete="tempat-lahir"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Alamat</CLabel>
              <CInput
                type="text"
                id="alamat"
                name="alamat"
                placeholder="Alamat"
                autoComplete="alamat"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>RT</CLabel>
              <CInput type="number" placeholder="RT" autoComplete="rt" />
            </CFormGroup>

            <CFormGroup>
              <CLabel>RW</CLabel>
              <CInput type="number" placeholder="RW" autoComplete="rw" />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Provinsi</CLabel>
              <select onChange={handleProvinsiId} class="form-control">
                <option value="">--Pilih Provinsi--</option>
                {provinsi.map((res, index) => {
                  return (
                    <option key={index} value={res.id}>
                      {res.nama}
                    </option>
                  );
                })}
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Kabupaten</CLabel>
              <select onChange={handleKotaId} class="form-control">
                <option value="">-- Pilih Kabupaten/Kota --</option>
                {kota.map((res, index) => {
                  return (
                    <option key={index} value={res.id}>
                      {res.nama}
                    </option>
                  );
                })}
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Kecamatan</CLabel>
              <select class="form-control">
                <option value="">-- Pilih Kecamatan --</option>
                {kecamatan.map((res, index) => {
                  return (
                    <option key={index} value={res.id}>
                      {res.nama}
                    </option>
                  );
                })}
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Kode Pos</CLabel>
              <CInput
                type="number"
                placeholder="Kode Pos"
                autoComplete="kode-pos"
              />
            </CFormGroup>
          </CCol>
          <CCol sm="6" className="py-3">
            <CFormGroup>
              <CLabel>Pendidikan Terakhir</CLabel>
              <CInput
                type="text"
                placeholder="Pendidikan Terakhir"
                autoComplete="pendidikan-terakhir"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Gelar Non Akademis Belakang</CLabel>
              <CInput
                type="text"
                id="gelar-non-akademis-belakang"
                name="gelar-non-akademis-belakang"
                placeholder="Gelar Non Akademis Belakang"
                autoComplete="gelar-non-akademis-belakang"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Gelar Akademis Belakang</CLabel>
              <CInput
                type="text"
                id="gelar-akademis-belakang"
                name="gelar-akademis-belakang"
                placeholder="Gelar Akademis Belakang"
                autoComplete="gelar-akademis-belakang"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Agama</CLabel>
              <select class="form-control">
                <option value="">-- Pilih Agama --</option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Kristen Katolik">Kristen Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Tanggal Lahir</CLabel>
              <CInput
                type="date"
                placeholder="Tanggal Lahir"
                autoComplete="tanggal-lahir"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Golongan Darah</CLabel>
              <select class="form-control">
                <option value="">--Golongan Darah--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Formasi Jabatan</CLabel>
              <CInput
                type="text"
                placeholder="Formasi Jabatan"
                autoComplete="formasi-jabatan"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>NIP</CLabel>
              <CInput type="number" placeholder="NIP" autoComplete="nip" />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Email</CLabel>
              <CInput type="email" placeholder="email" autoComplete="email" />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Password</CLabel>
              <CInput
                type="text"
                placeholder="Password"
                autoComplete="password"
              />
            </CFormGroup>
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
            <CButtonToolbar justify="end">
              <CButton color="success">Simpan</CButton>
            </CButtonToolbar>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default IdentitasDiri;
