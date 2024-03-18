import React, { useEffect, useState } from 'react'
import './CreateProduct.css'

export default function CreateProduct() {

  const [category, setCategory] = useState([]);

  const fetchedData = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    setCategory(response[0])
    console.log(response[0]);
  }

  const setCat = (value) => {
    const cat = document.getElementById('cat');
    cat.textContent = value;
  }

  useEffect(() => {
    fetchedData();
  }, [])

  

  return (
    <div className='addProductContainer'>
      <div className='addProductSubContainer'>
        <div className='addProductTitle'>
          <h2>Add Product</h2>
        </div>
        <div className='container'>
          <div className='row mb-2'>
            <div className='col'>
              <label className='addProductlable'>Name: </label>
              <input type='text' className='inputtag'></input>
            </div>
            <div className='col'>
              <label className='addProductlable'>Company Name: </label>
              <input type='text' className='inputtag'></input>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label className='addProductlable'>Category: </label>
              <div class="dropdown">
                <span id='cat'>Category</span>
                <div class="dropdown-content">
                  {category.map((m) => <p onClick={() => setCat(m.categoryname)}>{m.categoryname}</p>)}
                </div>
              </div>
            </div>
            <div className='col'>
              <label className='addProductlable'>Price: </label>
              <input type='text' className='inputtag'></input>
            </div>
            <div className='col'>
              <label className='addProductlable'>Sale Price: </label>
              <input type='text' className='inputtag'></input>
            </div>
          </div>
          <div className='row'>

          </div>
        </div>

      </div>
    </div>
  )
}
