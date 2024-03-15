import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import xyzCookie from 'js-cookie'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import Card from '../components/Card'
import cpage1 from '../Images/CPage11 (2).png'
import cpage2 from '../Images/cpage2.png'
import page3 from '../Images/page3.png'
import page4 from '../Images/page4.png'
import page5 from '../Images/page5.png'
import about1 from '../Images/aboutus1.avif'
import about2 from '../Images/about2.jpg'
import about3 from '../Images/about3.jpg'
import g1 from '../Images/gallery1.jpeg'
import g2 from '../Images/gallery2.jpeg'
import g3 from '../Images/gallery3.jpeg'
import as1 from '../Images/aboutsmall1.png'
import as2 from '../Images/aboutsmall2.png'
import { Link, useNavigate } from 'react-router-dom'
import DetailCategory from './DetailCategory'
import ImageSlider from '../components/ImageSlider'
import ContactUs from '../components/ContactUs'


export default function Home() {

  const [cat, setCat] = useState([]);
  const [test, settest] = useState([]);
  const [search, setsearch] = useState('')
  const [review, setReview] = useState({ name: "", review: "" })
  const navigate = useNavigate();

  //fetch data(collection) from database

  // xyzCookie.set('jwt', , {
  //   expires: 10
  // });
  // alert(xyzCookie.get("authToken"));

  // if(xyzCookie.get('authToken')===null){
  //   navigate('/')
  // }

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setCat(response[0])
    settest(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  //save data of testimonial

  const saveReview = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/CreateTestimonial", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: review.name, review: review.review })
    })
    const json = await response.json();
    console.log(json)
    if (!json.success) {
      alert("Enter valid credentials")
    } else {
      alert("Review Added Successfully")
      review.name = ""
      review.review = ""
    }
  }

  const onchange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  // useEffect(()=>{
  //   fetch('https://localhost:5000/api/DisplayData')
  //   .then(res=>res.json)
  //   .then(res=>setitem(res))
  // },[])

  // var result = item.map((f)=>{
  //   return(
  //     <>
  //       <Card/>
  //     </>
  //   )
  // })
  const images = [
    'https://images-static.nykaa.com/uploads/13f4a3b3-4d8a-4d6a-89a5-fb8d55dc0e7b.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/3f847664-8ecc-4f95-a3ff-2fced155a894.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/1a1d8812-dfb9-4bfc-9d9b-627d78ec8c3d.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/c21fc888-7a3e-4647-a2b2-95ae0a69c3ed.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/1468f740-7231-41b1-a3ac-778e2a0d45ff.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/d5a14e8e-d114-44f0-9a56-6f53a173336c.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/5fbaed81-6306-48c4-8ed7-f35c5107eb1f.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/19e67284-2306-4e7d-a852-74a5a152059b.jpg?tr=w-300,cm-pad_resize',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pZoOBUVrCLCpHPTyY6fSfg1DzmjvzRLPmQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyVk_YlhUpTHrny9vMfxdjKwbHv7L1TPbPg&usqp=CAU',
  ];


  return (
    <>

      <div className='container-fluid'>
        {/* Navbar */}
        <div className='row'>
          <div className='col'>
            <Navbar />
          </div>
        </div>

        {/* carousel */}
        <div className='carouselcustom carousel w-100' style={{ marginTop: "90px", width: "100%" }} data-ride="carousel">
          <div id="carouselExampleCaptions" className="carousel slide" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner">
              <div className="carousel-item active w-100">
                <img src={cpage1} className="d-block w-100" alt="..." style={{ height: "60vh" }} />
              </div>
              <div className="carousel-item">
                <img src={cpage2} className="d-block w-100" alt="..." style={{ height: "60vh" }} />
              </div>
              <div className="carousel-item">
                <img src={page3} className="d-block w-100" alt="..." style={{ height: "60vh" }} />
              </div>
              <div className="carousel-item">
                <img src={page4} className="d-block w-100" alt="..." style={{ height: "60vh" }} />
              </div>
              <div className="carousel-item">
                <img src={page5} className="d-block w-100" alt="..." style={{ height: "60vh" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* catagory scrollmenu */}
        <div className='mx-3 mt-3 mb-5' id='product'>
          <div className='scrollmenu' >
            {
              cat != []
                ? cat.map(catdata => {
                  return (
                    <div className='row' >
                      <div onClick={() => navigate('/'+catdata._id)} key={catdata._id} className='m-3'>
                        <div className='d-flex justify-content-center align-items-center rounded-circle col'>
                          <img src={catdata.image} className='rounded-circle' alt='...' style={{ height: "150px", width: "150px" }} />
                        </div>
                        <div className='d-flex justify-content-center align-items-center fs-4 fw-bold'>
                          <p  style={{ textDecoration: "none", color: "#193046" }}>{catdata.categoryname}</p>
                        </div>
                        {/* <div onClick={() => {
                        navigate('/' + catdata._id)
                        // <Link to={DetailCategory}></Link>
                      }}>
                        {catdata.categoryname}
                      </div> */}

                      </div>
                      {/* {item !== []
                    ? item.filter((f) => (f.category === catdata.categoryname) && (f.name.toLowerCase().includes(search.toLowerCase())))
                      .map((data) => {
                        return (
                          <div key={data._id} className='col-12 col-md-6 col-lg-4 my-2'> <Card fashion={data}></Card></div>
                        )
                      })
                    : <div>'''''''''</div>} */}
                    </div>
                  )
                }) : <div>'''''''</div>

            }
          </div>
        </div >

        {/* About Us */}
        <div className='mb-5' style={{ width: "100%" }} id='aboutus'>
          <div className='col mb-5' style={{ borderRight: "3px solid #15385A", borderTop: "3px solid #15385A", borderBottom: "3px solid #15385A", borderRadius: "0px 100px 0px 0px", marginRight: "100px", height: "350px", width: "1200px", float: "left" }}>
            <div style={{ float: "left", width: "800px" }}>
              <h1 className='m-3' style={{ textAlign: "center", fontWeight: "bold", color: "#193046", letterSpacing: "1px", }}>About Us</h1>
              <h4 className='mb-3 mx-5 ps-5' style={{ letterSpacing: "1px", wordSpacing: "2px" }}><span style={{ fontWeight: "bold" }}>THE FASHION STORE</span> caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can't find anywhere else.
                We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019,
                we are proud to be your <span style={{ fontWeight: "bold" }}> Online Clothing Shop </span> that you can rely on for our expert service and care.
              </h4>
            </div>
          </div>
          <div className='d-flex justify-content-end ms-auto' style={{ zIndex: "999", }}>
            <img src={about1} className='mt-5 me-3' alt='...' style={{ height: "350px", width: "500px", borderRadius: "2px 100px" }} />
          </div>
        </div>

        <div>
          <div className='mb-5' style={{ float: "left" }}>
            <img src={about2} className='mt-5 me-3' alt='...' style={{ height: "350px", width: "500px", borderRadius: "2px 100px" }} />
          </div>
          <div className='col mb-5' style={{ border: "3px solid #15385A", height: "350px", width: "1225px", marginLeft: "300px", borderRadius: "100px 0px 0px 0px" }}>
            <div style={{ zIndex: 999 }} >
              <h1 className='mt-3' style={{ textAlign: "center", fontWeight: "bold", color: "#193046", letterSpacing: "1px", }}>Our Mission</h1>
              <div className='d-flex justify-content-center' style={{ height: "150px" }}><img src={as1} alt='...' /></div>
              <h4 className='mb-3' style={{ letterSpacing: "1px", wordSpacing: "2px", marginLeft: "400px", marginRight: "100px" }}>
                <span style={{ fontWeight: "bold" }}>Our Mission </span>
                is to make a difference through our branding by staying ahead of the fashion trends,
                defining style and giving customers what they want.
              </h4>
            </div>
          </div>
        </div>

        <div className='mb-5' style={{ width: "100%" }}>
          <div className='col mb-5' style={{ borderRight: "3px solid #15385A", borderTop: "3px solid #15385A", borderBottom: "3px solid #15385A", borderRadius: "0px 100px 0px 0px", marginRight: "100px", height: "350px", width: "1200px", float: "left" }}>
            <div style={{ float: "left", width: "800px" }}>
              <h1 className='mt-3' style={{ textAlign: "center", fontWeight: "bold", color: "#193046", letterSpacing: "1px", }}>Our Vision</h1>
              <div className='d-flex justify-content-center' style={{ height: "150px" }}><img src={as2} alt='...' /></div>
              <h4 className='mb-3 mx-5 ps-5' style={{ letterSpacing: "1px", wordSpacing: "2px" }}>
                <span style={{ fontWeight: "bold" }}>Our Vision </span>
                is to change the way our society connects with the fashion industry by providing
                our customers with products that are ethically and responsibly sourced.
              </h4>
            </div>
          </div>
          <div className='d-flex justify-content-end ms-auto' style={{ zIndex: "999", }}>
            <img src={about3} className='me-3' alt='...' style={{ height: "350px", width: "500px", borderRadius: "2px 100px", marginTop: "100px" }} />
          </div>
        </div>

        <div className=' w-100 trend-container'>
          <ImageSlider images={images} />
        </div>


        {/* Gallery */}
        <div className='row wow fadeInUp' data-wow-delay="0.1s" id='gallery'>
          <div className='col pt-4 px-5 col' style={{ backgroundColor: "#202f5a", borderRadius: "120px", color: "#ffffff", textAlign: "center", height: "430px", margin: "100px" }}>
            <div className='row'>
              <div className='col mb-3'>
                <h1>All the <span style={{ fontWeight: "bold" }}>Newest</span> you <span style={{ fontWeight: "bold" }}>Need</span></h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div className='hovergallery'>
                  <img src={g1} alt='...' className='my-5  galleryimg ' />
                </div>
              </div>
              <div className='col-4'>
                <div className='hovergallery'>
                  <img src={g2} alt='...' className='my-5  galleryimg ' />
                </div>
              </div>
              <div className='col-4'>
                <div className='hovergallery' >
                  <img src={g3} alt='...' className='my-5  galleryimg ' />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* YouTube Videos */}
        <div className='row' id='video'>
          <div className='col p-5' style={{ margin: "100px", borderRadius: "50px", height: "500px", backgroundColor: "#9dc9f4" }}>
            <div className='row'>
              <div className='col' style={{ textAlign: 'center', }} >
                <h5 className='fw-bold' style={{ color: "#202f5a" }}>WHAT'S GOING ON</h5>
                <h1 style={{ color: "#202f5a" }}>Our <span className='fw-bold' > latest stories, tips </span> and <span className='fw-bold'> insights </span> on everything</h1>
              </div>
            </div>
            <div className='row' style={{ marginLeft: "30px", marginRight: "30px", marginTop: "50px", marginBottom: "50px" }}>
              <div className='col mx-3 mb-5'>
                <div class="card videostyle" style={{ width: "21rem", borderRadius: "40px", boxShadow: "" }}>
                  <iframe height="230" src="https://www.youtube.com/embed/dkqzlArXD5A?si=y-rtbrf3SeTQRYX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='card-img-top' style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}></iframe>
                  <div class="card-body">
                    <p class="card-text text-secondary"><i class="fa fa-calendar me-2" aria-hidden="true"></i>Feb 03 ,2023
                      <span className='ms-4'></span><i class="fa fa-clock-o me-2" aria-hidden="true"></i>3 Min
                    </p>
                    <h5 style={{ fontWeight: "bold", marginBottom: "25px" }}>Overview of latest fashion and trends in fashion brands.</h5>
                    <div style={{ borderBottom: "2px solid black" }}></div>
                    <p className='fs-5 mt-2' style={{ color: "#202f5a" }}>Share:<i class="fa fa-facebook mx-3" aria-hidden="true"></i><i class="fa fa-twitter me-3" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i></p>
                  </div>
                </div>
              </div>
              <div className='col mx-3'>
                <div class="card videostyle" style={{ width: "21rem", borderRadius: "40px" }}>
                  <iframe height="230" src="https://www.youtube.com/embed/szWyuNr7OUU?si=NFZXExhslkm8qj63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='card-img-top' style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}></iframe>
                  <div class="card-body">
                    <p class="card-text text-secondary"><i class="fa fa-calendar me-2" aria-hidden="true"></i>Feb 03 ,2023
                      <span className='ms-4'></span><i class="fa fa-clock-o me-2" aria-hidden="true"></i>3 Min
                    </p>
                    <h5 style={{ fontWeight: "bold", marginBottom: "25px" }}>Overview of latest fashion and trends in fashion brands.</h5>
                    <div style={{ borderBottom: "2px solid black" }}></div>
                    <p className='fs-5 mt-2' style={{ color: "#202f5a" }}>Share:<i class="fa fa-facebook mx-3" aria-hidden="true"></i><i class="fa fa-twitter me-3" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i></p>
                  </div>
                </div>
              </div>
              <div className='col mx-3 mb-5'>
                <div class="card videostyle" style={{ width: "21rem", borderRadius: "40px" }}>
                  <iframe height="230" src="https://www.youtube.com/embed/Ib1EVUPnRNw?si=sbrRJYBf3YoEBSKP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='card-img-top' style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}></iframe>
                  <div class="card-body">
                    <p class="card-text text-secondary"><i class="fa fa-calendar me-2" aria-hidden="true"></i>Feb 03 ,2023
                      <span className='ms-4'></span><i class="fa fa-clock-o me-2" aria-hidden="true"></i>3 Min
                    </p>
                    <h5 style={{ fontWeight: "bold", marginBottom: "25px" }}>Overview of latest fashion and trends in fashion brands.</h5>
                    <div style={{ borderBottom: "2px solid black" }}></div>
                    <p className='fs-5 mt-2' style={{ color: "#202f5a" }}>Share:<i class="fa fa-facebook mx-3" aria-hidden="true"></i><i class="fa fa-twitter me-3" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>

          </div>
        </div>


        {/* Testimonial */}
        <div className='w-100 row' style={{ marginTop: "100px" }} id='testimonial'>
          <div style={{ color: "#202f5a", marginRight: "300px", borderLeft: "10px solid #202f5a" }} className='col m-5 ps-5'>
            <h6 className='fw-bold' style={{ letterSpacing: "1px", wordSpacing: "2px" }}>OUR HAPPY CUSTOMERS</h6>
            <h1 style={{ letterSpacing: "2px", wordSpacing: "5px" }}>What our <span style={{ fontWeight: "600" }}>clients</span></h1>
            <h1 style={{ fontWeight: "600", letterSpacing: "2px", wordSpacing: "5px" }}><span>says</span> about our work</h1>
          </div>
          <div style={{ color: "#202f5a" }} className='col mx-5 m-3'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
              <div class="carousel-inner px-5 py-2" style={{ height: "300px" }}>
                <div class="carousel-item ctitem active" >

                  <div className='row'>
                    <div className='col d-flex' >
                      <h2 style={{ fontWeight: "bold", textAlign: "center" }} >Grisha Desai</h2>
                      <i class="fa fa-quote-right ms-auto fs-1"></i>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center", }} className='fontstyle'>We, Queen Garments, understand the ever-changing mind of a woman<br />
                        and thus aim at providing a satisfactory and fully clothed closet that suits
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  {
                    test != []
                      ? test.map((t) => {
                        return (
                          <>
                            <div class="carousel-item ctitem" >
                              {/* <h2 style={{ fontWeight: "bold" }}>{t.name}</h2>
                              <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center" }} className='fontstyle'>{t.review}</h6> */}
                              <div className='row'>
                                <div className='col d-flex' >
                                  <h2 style={{ fontWeight: "bold", textAlign: "center" }} >{t.name}</h2>
                                  <i class="fa fa-quote-right ms-auto fs-1"></i>
                                </div>
                              </div>
                              <div className='row'>
                                <div className='col'>
                                  <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center", }} className='fontstyle'>
                                    {t.review}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                      : <div>'.....'</div>
                  }
                </div>

                <div className='carousel-item p-2 ctitem' style={{ textAlign: "center" }}>
                  <div><h4 style={{ fontWeight: "bold" }}>Add Your Opinion</h4></div>
                  <input type='text' placeholder='Name' className='form-control mb-3' name='name' value={review.name} onChange={onchange}></input>
                  <div class="input-group mb-3">
                    <textarea class="form-control" aria-label="With textarea" placeholder='Share Your Review' name='review' value={review.review} onChange={onchange} style={{ height: "50px" }}></textarea>
                  </div>
                  <button className='btn btn-secondary' onClick={saveReview}>Submit</button>

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon rounded-3" aria-hidden="true" style={{ backgroundColor: "#193046" }}></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon rounded-3" aria-hidden="true" style={{ backgroundColor: "#193046" }}></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className='my-3 w-100' style={{ float: "right" }}>
          <ContactUs />
        </div>

        {/* Footer */}
        <div style={{ width: "100%", float: "right" }}>
          <Footer />
        </div>
      </div>
    </>
  )
}
