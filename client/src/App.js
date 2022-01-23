import "./bootstrap.css"
import './App.css';
import {Form, Button} from "react-bootstrap"
import { useState } from "react";
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [id, setId] = useState(0);

  const addUser = () => {
    Axios.post("http://localhost:5000/create", {
      name: name,
      age: age,
      location: location,
      id: id
    })
      .then(() => {
        console.log("User added successfully");
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Succesfully Submitted")
  }

  return (
    <div className="App">
      <Form className='infoform' onSubmit={addUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail" className='formGroup'>
            <Form.Label>Name</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter Name" className='formInput' onChange={(e) => {setName(e.target.value)}} name="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" className='formGroup'>
            <Form.Label>Age</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter Age" className='formInput'  onChange={(e) => {setAge(e.target.value)}} name="age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" className='formGroup'>
            <Form.Label>Location</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter your location" className='formInput'  onChange={(e) => {setLocation(e.target.value)}} name="location" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" className='formGroup'>
            <Form.Label>ID_Number</Form.Label>
            <Form.Control type="text" placeholder="Your ID Number" className='formInput'  onChange={(e) => {setId(e.target.value)}} name="id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" className='formGroup'>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addUser}>
            Submit
          </Button>
        </Form>


        <h2>{name + " " + age + " " + location + " " + id}</h2>
    </div>
  );
}

export default App;
