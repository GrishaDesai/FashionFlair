import React from 'react'
import { useState, useEffect } from 'react';

export default function GetAllCategory() {
    const [cat, setCat] = useState([]);
    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/GetCategory", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setCat(response[0])
    }
    useEffect(() => {
        GetCategory()
    }, [])

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteCategory/${id}`, {
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
                            <h3>{m.categoryname}<i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(m._id)}></i></h3>
                        </>
                    )
                })
            }
        </div>
    )
}
