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
    CSpinner
  } from '@coreui/react'

import axios from 'axios';


const SkpTugasTambahan = () => {
  const history = useHistory();
  const [loading,setLoading] = useState(true)
  const user = JSON.parse(localStorage.getItem("user"))
  const [nik] = useState("123");
  const [tanggal,setTanggal] = useState('');
  const [uraianTugas,setUraianTugas] = useState('');
  const [optionValue,setOptionValue] = useState([]);
  const [inputList, setInputList] = useState([{nik:nik,tanggal:tanggal,nama_lengkap:"Hanif",status:'Pending'}]);


    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, {nik:nik,tanggal:tanggal,nama_lengkap:"hanif",status:'Pending', tugas: "", jumlah: "" }]);
    };

    const handleTanggal = e=>{
      inputList.map((x,i)=>{
        handleInputChange(e,i)
      })
      setTanggal(e.target.value)
    }
   

  React.useState(()=>{
    axios.get(""+window.server+"rest-api/skptugas/inputtugasget.php?nik="+nik+"")
      .then((res)=>{
          // alert(JSON.stringify())
          if (res.data.message === "No post found") {
            setOptionValue([])
          } else {
            setOptionValue(res.data)
          }    
      },(err)=>{
          console.log(err)
      })
  },[])

  
const handlleSimpan = e =>{
  if (tanggal === "") {
    alert("Tanggal tidak boleh kosong")
  } else {
  setLoading(false)
  axios.post(""+window.server+"rest-api/skptugas/insertskptambahan.php",inputList)
    .then((res)=>{
      setLoading(true)
      // alert(JSON.stringify(res.data))
      window.location.reload();
    },(err)=>{
      setLoading(false)
      alert("Gagal input")
      console.log(err)
    })
  }
}

  const handleUraianTugas = e =>{
    setUraianTugas(e.target.value)
  }

  const handleAddTugas = e =>{
    alert("ok")
    // const post = {
    //   nik:nik,
    //   tugas:uraianTugas 
    // }
    //   axios.post(""+window.server+"rest-api/skptugas/inputtugaspost.php",post)
    //     .then((res)=>{
    //       alert(JSON.stringify(res.data))
    //       window.location.reload();
    //     })
  }

    return(
      <CContainer>
      <CRow>
      <CCol sm="6">
        <CForm action="" method="post">
        <CFormGroup>
            <CLabel htmlFor="nf-email">NIK</CLabel>
            <CInput
              value={nik}
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
    
      <CButton onClick={handlleSimpan} style={{marginRight:'67.5%',marginBottom:'2%'}}  color="primary" className="px-4">Simpan</CButton>
      <div style={{marginBottom:'3%',display:'flex',flexDirection:'row'}}>
      <CInput
             style={{height:40,width:'84.5%',border:'none', borderRadius:5,paddingLeft:'2%'}}
             placeholder="Input uraian tugas"
             id="tugas"
             name="tugas"
             autoComplete="tugas"
             onChange={handleUraianTugas}
                      />
         <CButton onClick={handleAddTugas} style={{marginLeft:'2%',marginRight:'2%'}} color="info" className="px-4">+</CButton>
         
         
        </div>
        <h9>*Note : Inputkan uraian tugas terlebih dahulu, jika tidak ada pilihan</h9>
        { loading === false &&
       <div style={{position:'absolute', bottom:"25%"}}>
       <CSpinner
               
               color="primary"
               style={{width:'4rem', height:'4rem'}}
         />
       </div>
    }
      </CContainer>
    )
}

export default SkpTugasTambahan

