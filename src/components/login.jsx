import React from 'react' ;
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

  
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation here if needed
    navigate('/streaming'); // Redirect to Streaming page
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <p className='text-center logoimg'><img src="images/zlicc-logo.png" alt="logo" /></p>
          <div className='container'>
            <div className='frmbgclr'>
              <h3 className='text-center lgntxthd'>LOGIN</h3>
              <div className='row justify-content-center frminpt'>
                <div className='col-sm-12'>
                    <div className='row justify-content-center'>
                      <div className='mb-3'>
                        <Form.Label className='frmlable'>Name</Form.Label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control' />
                       </div>
                    </div>
                    <div className='mb-3'>
                        <Form.Label className='frmlable'>Email ID</Form.Label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} className='form-control' />
                    </div>
                    <div className='mb-4'>
                        <Form.Label className='frmlable'>Phone Number</Form.Label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className='form-control' />
                    </div>
                    <div className='mb-1 text-center'>
                        <button type="submit" className='btn btn-primary sbmtbtn'>SUBMIT</button>
                    </div>
                </div>
              </div>            
            </div>
          </div>
        </form>
    </div>
  )
}

export default Login
