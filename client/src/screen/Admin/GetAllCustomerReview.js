import React from 'react'
import { useState, useEffect } from 'react';

export default function GetAllCustomerReview() {
  const [review, setReview] = useState([]);
  const GetCategory = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setReview(response[1])
  }
  useEffect(() => {
    GetCategory()
  }, [])
  return (
    <div>
      {
        review.map((m) => {
          return (
            <>
              <h1>{m.name}</h1>
              <h4>{m.review}</h4>
            </>
          )
        })
      }
    </div>
  )
}
