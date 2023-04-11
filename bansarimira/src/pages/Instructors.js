import hero from '../assets/1.jpg';
import a from '../assets/4.png';
import seven from '../assets/7.png';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';
import eight from '../assets/8.jpg';
import nine from '../assets/9.jpg';
import { Card } from 'react-bootstrap';

const Instructors = () => {
    
    return (
       
        <div>
            <div className="bg-cover bg-center h-[68rem]  items-center"
          style={{
            backgroundImage:
              `url(${hero})`
          }}>
           
            <h1 class="text-center display-1" style={{color:"white", paddingTop:"20px", fontSize:"50px"}}>Instructors</h1>
           <div class="text-center flex" style={{maxWidth:"90%", marginLeft:"18.5%"}}> <Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={a}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>
<Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={five}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>
<Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={six}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>

</div>
<div class="text-center flex" style={{maxWidth:"90%", marginLeft:"18.5%"}}>
<Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={seven}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>
<Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={eight}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>
<Card  style={{ width: '18rem', margin: '50px',backgroundColor:"white" }}>
  <Card.Img variant="top" src={nine}  style={{padding:"10px"}} />
  <Card.Body>
    <Card.Title class="text-center">Card Title</Card.Title>
    <Card.Text style={{padding:"10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer posuere erat a ante.
    </Card.Text>
  </Card.Body>
</Card>
</div>
            </div>
            
          
            

         {/*
           <img src={hero} alt="sas" className="rounded" style={{ height: "100vh", width:"100vw" }}></img>
         <div class="card">
            
                <div class="view overlay">
                <img class="card-img-top" src={hero}alt="Card image cap"/>
                <a href="#!">
                <div class="mask rgba-white-slight"></div>
                 </a>
                 </div>

                <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's  content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
    */}
        </div>
    );
};

export default Instructors;