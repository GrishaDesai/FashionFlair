import React, { useEffect, useState } from 'react'
import './CreateProduct.css'

export default function CreateProduct() {

  const [category, setCategory] = useState([]);
  const [catname, setcatname] = useState("");
  // const [info, setinfo] = useState({});
  const [keys, setKeys] = useState([]);
  // const [values, setValues] = useState([]);

  const fetchedData = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    setCategory(response[0]);
    // console.log(response[0]);
  }

  const setCat = (value) => {
    const cat = document.getElementById('cat');
    cat.textContent = value;
    setcatname(value)
    setKeys(findObjectByField(category, "categoryname", value));
  }

  //find category info object
  function findObjectByField(arr, field, value) {
    for (let obj of arr) {
      if (obj[field] === value) {
        setKeys(Object.keys(obj.info));
        return obj.info;
      }
    }
    return null; // Return null if object not found
  }

  useEffect(() => {
    fetchedData();
  }, [])



  const [inputinfoValues, setInputinfoValues] = useState({});
  const handleChange = (event, key) => {
    const { name, value } = event.target;
    setInputinfoValues(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const [credentials, setCredentials] = useState({
    category: "",
    name: "",
    price: "",
    sale_price: "",
    company_name: "",
    careinstructions: "",
    packContains: "",
    image: ""
  })

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [sizes, setSizes] = useState([]);
  const handleSizeChange = (event) => {
    const { value } = event.target;
    const sizesArray = value.split(' ').map(size => size.trim()); // Split values by comma and remove whitespace
    setSizes(sizesArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          category: credentials.category,
          price: credentials.price,
          sale_price: credentials.sale_price,
          company_name: credentials.company_name,
          sizes: sizes,
          careinstructions: credentials.careinstructions,
          packContains: credentials.packContains,
          image: credentials.image,
          info: inputinfoValues
        }),
      }
      );
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        alert("Product added Successfully")
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
        <div className='addProductTitle'>
          <h2>Add Product</h2>
        </div>
        <div className='container'>
          <div className='row mb-2'>
            <div className='col'>
              <label className='addProductlable'>Name: </label>
              <input type='text' name='name' className='inputtag' value={credentials.name} onChange={onchange}></input>
            </div>
            <div className='col'>
              <label className='addProductlable'>Company Name: </label>
              <input type='text' name='company_name' className='inputtag' value={credentials.company_name} onChange={onchange}></input>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label className='addProductlable'>Category: </label>
              <div class="dropdown">
                <span id='cat'>Category</span>
                <div name='category' value={credentials.category} onChange={onchange} class="dropdown-content">
                  {category.map((m) => <p onClick={() => {
                    setCat(m.categoryname)
                    credentials.category = m.categoryname
                  }
                  }>{m.categoryname}</p>)}
                </div>
              </div>
            </div>
            <div className='col-4'>
              <label className='addProductlable'>Price: </label>
              <input type='text' name='price' className='inputtag' value={credentials.price} onChange={onchange}></input>
            </div>
            <div className='col-6'>
              <label className='addProductlable'>Sale Price: </label>
              <input type='text' name='sale_price' className='inputtag' value={credentials.sale_price} onChange={onchange}></input>
            </div>
          </div>
          <div className='row'>
            {
              keys.map((m) => {
                return (
                  <div className='col-6'>
                    <label className='addProductlable'>{m} : </label>
                    <input name={m} type='text' className='inputtag' value={inputinfoValues[m] || ''} onChange={(event) => handleChange(event, m)}></input>
                  </div>
                )
              })
            }
          </div>
          <div className='row'>
            <div className='col'>
              <label className='addProductlable'>Sizes: </label>
              <input
                type='text'
                name='sizes'
                className='inputtag'
                onChange={handleSizeChange}
                placeholder='Enter Sizes space separated'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label className='addProductlable'>Pack Contains: </label>
              <input type='text' name='packContains' className='inputtag' value={credentials.packContains} onChange={onchange}></input>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label className='addProductlable'>Care Instructions: </label>
              <input type='text' name='careinstructions' className='inputtag' value={credentials.careinstructions} onChange={onchange}></input>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label className='addProductlable'>Image: </label>
              <input type='text' name='image' className='inputtag' value={credentials.image} onChange={onchange}></input>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => console.log(credentials)}>credentials</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}
