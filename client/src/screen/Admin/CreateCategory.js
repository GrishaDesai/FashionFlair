import React, { useState } from 'react'
import "./CreateCategory.css"

export default function CreateCategory() {
  const [info, setinfo] = useState([]);
  const [credentials, setCredentials] = useState({
    categoryname: "",
    image: ""
  })
  const addValue = (newValue) => {
    setinfo(prev => [...prev, newValue]);
    document.getElementById("infoInput").value = "";
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryname: credentials.categoryname,
          image: credentials.image,
          info: info
        }),
      }
      );
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        alert("Category added Successfully")
      } else {
        alert("Enter Credentials Properly")
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='addProductContainer'>
      <div className='addProductSubContainer'>
        <div className='addProductTitle mb-5'>
          <h2>Create New Category</h2>
        </div>
        <div className='container'>
          <div className='row mb-2 d-flex justify-content-center'>
            <div className='col'>
              <label className='addProductlable'>Category Name: </label>
              <input name='categoryname' value={credentials.categoryname} type='text' className='inputtag' onChange={onchange}></input>
            </div>
          </div>
          <div className='row mb-2 d-flex justify-content-center'>
            <div className='col'>
              <label className='addProductlable'>Image: </label>
              <input name='image' value={credentials.image} type='text' className='inputtag' onChange={onchange}></input>
            </div>
          </div>
          <div>
            <input id='infoInput' className='text-dark'></input>
            <button onClick={(e) => addValue(document.getElementById('infoInput').value)}>Add Field</button>
            <button onClick={() => console.log(info)}>value</button>
          </div>
          <div className='row'>
            {
              info.map(m => (
                <>
                  <div className='col'>{m}</div>
                </>
              )
              )
            }
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          {/* <div className='row'>
            <div className='border '>
            
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
