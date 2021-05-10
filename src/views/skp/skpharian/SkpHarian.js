import React,{useState} from 'react'
import {  useHistory } from 'react-router-dom'
import {
    CForm,
    CCol,
    CContainer,
    CRow,
    CLabel,
    CInput,
    CFormGroup,
    CButton,
    CSpinner,
    CButtonToolbar
  } from '@coreui/react'

import axios from 'axios';


const SkpHarian = () =>{
     const history = useHistory();
    const [loading,setLoading] = useState(true)
    const [inputList, setInputList] = useState([{nik:'123',tanggal:tanggal,nama_lengkap:'Muhammad',status:'Pending'}]);
    const [tanggal,setTanggal] = useState('');
    const [optionValue,setOptionValue] = useState([]);

      
const handlleSimpan = e =>{
    if (tanggal === "") {
      alert("Tanggal tidak boleh kosong")
    } else {
      setLoading(false)
      axios.post(""+window.server+"rest-api/skptugas/insertskppokok.php",inputList)
        .then((res)=>{
          setLoading(true)
          window.location.reload();
        },(err)=>{
          setLoading(true)
          alert("Gagal input")
          console.log(err)
        })
    }
   
  }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, {nik:'123',tanggal:tanggal,nama_lengkap:'Muhammad',status:'Pending', tugas: "", jumlah: "" }]);
      };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

    const handleTanggal = e=>{
        inputList.map((x,i)=>{
          handleInputChange(e,i)
        })
        setTanggal(e.target.value)
      }
     
    
    return(
           <CContainer>
      <CRow>
      <CCol sm="6">
        <CForm action="" method="post">
        <CFormGroup>
            <CLabel htmlFor="nf-email">NIK</CLabel>
            <CInput
            //   value={nik}
              type="nik"
              id="nik"
              name="NIK"
              placeholder="NIK"
              autoComplete="NIK"
              size
            />
          </CFormGroup>
        </CForm>
      </CCol>
      
      <CCol sm="6">
        <CForm action="" method="post">
        <CFormGroup>
            <CLabel >Tanggal</CLabel>
            <CInput
              type="date"
              id="tanggal"
              name="tanggal"
              placeholder="tanggal"
              onChange={handleTanggal}
            />
          </CFormGroup>
         

        </CForm>
      </CCol>
      
      </CRow>
      {
        inputList.map((x,i)=>{
          return(
            <div >
            <div style={{marginBottom:'3%',display:'flex',flexDirection:'row'}}>
            <select style={{width:'70%'}} class="form-control"  onChange={e => handleInputChange(e, i)} id="tugas" name="tugas">        
            <option value="">Input uraian Tugas</option>
              { 
              optionValue === null ?
              <option value="">Input uraian Tugas</option>
              :
                optionValue.map((option,index)=>
                  <option  key={index} value={option.tugas}>{option.tugas}</option>
                )
              }
              
            </select>
            <CInput
            style={{marginLeft:20,width:'10%', textAlign:'center'}}
                        type="number"
                        placeholder="Jumlah"
                        autoComplete="Jumlah"
                      />

            {inputList.length - 1 === i &&  <CButton onClick={handleAddClick}   style={{marginLeft:10}} color="info" className="px-4">+</CButton> }
            {inputList.length !== 1 &&   <CButton style={{marginLeft:10}} onClick={() => handleRemoveClick(i)} color="danger" className="px-4">-</CButton>
 } 
             
            </div>        
          </div>
    
          )
        })
      }
    
      <CButton
       onClick={handlleSimpan} 
      style={{marginRight:'67.5%',marginBottom:'5%'}}  color="primary" className="px-4">Simpan</CButton>
      
      <h3>Kegiatan Tambahan</h3>
      <CButtonToolbar style={{paddingTop:20,paddingBottom:20}} justify="start">
        <CButton onClick={()=>history.push("/skptambahan")} style={{marginRight:10}} color="success">Input Tugas Tambahan</CButton>
        <CButton onClick={()=>history.push("/skplainlain")} style={{marginRight:10}} color="info">Input Tugas Lain-Lain</CButton>
    </CButtonToolbar>
      </CContainer>
    
    )
}
export default SkpHarian

