import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Getorders() {
    const [order, setorder] = useState([]);
    const navigate = useNavigate();
    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/getOrders", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setorder(response)
    }
    useEffect(() => {
        GetCategory()
    }, [])

    const handledelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteOrder/${id}`, {
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
                order.map(m => {
                    return (
                        <>
                            <h1>{m.name}</h1>
                            <h3>{m.address}</h3>
                            {
                                m.cartitems.map(data => {
                                    return (
                                        <>
                                            <h5>{data.name}</h5>
                                        </>
                                    )
                                })
                            }
                            <button onClick={() => handledelete(m._id)}>Delivered</button>
                        </>
                    )
                })
            }
        </div>
    )
}
