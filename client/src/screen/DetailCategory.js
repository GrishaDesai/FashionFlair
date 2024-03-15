import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import '../App.css'
import Navbar from "../components/Navbar";
import NavDetail from "../components/NavDetail";
import { Link } from "react-router-dom";

function DetailCategory() {
    const navigate = useNavigate();
    const param = useParams();

    const [Data, setData] = useState({})
    const [maindata, setMaindata] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
            let response = await fetch(`http://localhost:5000/api/detailcategory/${param.id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await response.json();
            setData(response[0])
            setMaindata(response[1]);
        }
        fetchedData();
    }, [param.id])

    // console.log(`from Detail : ${Data}`)

    return (
        <>
            <Navbar />
            <NavDetail />
            <div className="Container w-100" style={{ marginTop: "130px" }}>
                <div className="fontstyle row ms-2" >
                    {
                        maindata != []
                            ? maindata.filter(f => (f.category === Data.categoryname))
                                .map((data) => {
                                    return (
                                        <div onClick={() => navigate('/' + Data._id + '/' + data._id)} className='m-4 allcard col-2' style={{ height: "80vh" }}>
                                            <img src={data.image} className="card-img-top" alt='....' style={{ height: "60vh", objectFit: "cover" }} />
                                            <div className='m-2'>
                                                <h5>{data.company_name}</h5>
                                                <p style={{ color: "#43505c" }}>{data.name}</p>
                                                <br />
                                                <div className='me-2' style={{ float: "left" }}><h6><i class="fa fa-inr" aria-hidden="true"></i>{data.price}</h6></div>
                                                <div style={{ float: "left", color: "#43505c", textDecoration: "line-through" }}><h6><i class="fa fa-inr" aria-hidden="true"></i>{data.sale_price}</h6></div>
                                            </div>
                                        </div>
                                    )
                                })
                            : <div>'''''</div>
                    }
                </div>
            </div>
        </>
    )
}
export default DetailCategory