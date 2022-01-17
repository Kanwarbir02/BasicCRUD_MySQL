import "./bootstrap.css"
import './App.css';
import {Form, Button} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Form className='infoform'>
          <Form.Group className="mb-3" controlId="formBasicEmail" className='formGroup'>
            <Form.Label>Email address</Form.Label><br/>
            <Form.Control type="email" placeholder="Enter email" className='formInput'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" className='formGroup'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className='formInput'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" className='formGroup'>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  );
}

export default App;
