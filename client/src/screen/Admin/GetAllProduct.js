import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function GetAllProduct() {

    const navigate = useNavigate();
    const params = useParams();

    const [cat, setCat] = useState([]);
    const [product, setProduct] = useState([]);

    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/DisplayData", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setCat(response[1])
        setProduct(response[0])
        // console.log("product", product);
    }

    useEffect(() => {
        GetCategory()
    }, [])

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteProduct/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (response.status === 200) {
                alert('Document deleted Successfully')
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                cat.map((m) => {
                    return (
                        <>
                            <h3 className='fw-bold'>{m.categoryname}</h3>
                            {
                                product.filter((f) => (f.category === m.categoryname)).map((data) => {
                                    return (
                                        <>
                                            <div>
                                                <h5>{data.name}<i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-product/${data._id}`)}></i> <i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(data._id)}></i> </h5>
                                                <p></p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
