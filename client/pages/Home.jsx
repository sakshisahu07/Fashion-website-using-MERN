import Carousel from 'react-bootstrap/Carousel';

import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';



const Home=()=>{
  const [mydata,setMydata]=useState([])
  const dispatch=useDispatch();


  const loadData=()=>{
    let api="http://localhost:8000/product/showproduct";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])

  const addcartData=(id,name,desc,categ,price,image)=>{
      dispatch(addToCard({id:id,name:name,description:desc,category:categ ,price:price,image:image,qnty:1}))
  }
  
  const ans=mydata.map((key)=>{
    return(
      <>

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          {key.category}
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{addcartData(key._id,key.name,key.description,key.category,key.price,key.image)}}
        
        >Add To cart</Button>
      </Card.Body>
    </Card>
      </>
    )
  })

  
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <a href='#'><img src="images/a1.jpg" height="650px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/a2.jpg" height="650px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/a3.jpg" height="650px" width="1500px" /></a>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     <h1 align="center"> Our Trending Collections</h1>
        <div id="carddata">
        {ans}
        </div>
{/* ============================================================================================ */}
        <div >
      <img src="https://i.pinimg.com/736x/8a/14/63/8a1463954389e157aebff5bff7494ea5.jpg" alt=""  style={{width:"1500px", height:"500px"}}/>
        </div>
    
        </>
    )
}
export default Home;