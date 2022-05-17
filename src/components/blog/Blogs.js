import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blogs from '../api/Get_Blogs';
import { Col, Card, Row } from 'react-bootstrap';

const Blogs = ({setId}) => {
    const [name, setName] = useState([]);
    

    // Change this to click me instead of d[1] which is the blog title
    return (
        <Row xs={1} md={3} className="g-4">
            <Get_Blogs setName={setName} setId={setId}/>
            {name.map(d => (
                <Col>
                    <Card>
                        <Card.Img className='bs-image' variant="top" src={d[4]} />
                        <Card.Body>
                        <Link onClick={() => setId([d[0], d[2]])} to={d[0]}>
                        
                        <Card.Title>{d[1]}</Card.Title>
                        </Link>
                        <Card.Text>{d[3]}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{d[5]}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
       
       </Row>


// {/* <Row xs={1} md={2} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row> */}
    )
}

export default Blogs;