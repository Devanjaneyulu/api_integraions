import React, { useState,useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from '../services/ApiIntegration'
import { Row,Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const API ="https://jsonplaceholder.typicode.com"

// const mainUrl="https://jsonplaceholder.typicode.com/posts"
// const baseURL = "https://jsonplaceholder.typicode.com/posts"

const Blogs = () => {

  const [myData, setMyData] = useState([]);
  const [isError,setIsError]=useState("")

const getApiData=async () => {
  try{
    const res = await axios.get("/posts");
    setMyData(res.data);
  }catch(error){
    setIsError(error.message)
      console.log("error data", error)
  }

}

useEffect(()=>{
  getApiData();
},[])
  
//  useEffect(() => {
//     axios.get(mainUrl).then((response) => {
//       setMyData(response.data);
//     })
//     .catch((error)=>{
//       setIsError(error.message)
//       console.log("error data",error)
//     });
//   }, []);


  return (
    <div>
<h1>API Integrations</h1>
<Container>
<Row className='g-1'>
{myData.slice(0,12).map((post)=>{

  const {id,title,body}=post;
  return <Col lg={3} md={4} sm={6}><Card style={{ width: '16rem',height:'200px',overflow:"hidden" }} key={id}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}
        </Card.Text>
      </Card.Body>
    </Card>
</Col>


})}

{isError}
</Row>   
</Container>
    </div>
  )
}
export default Blogs