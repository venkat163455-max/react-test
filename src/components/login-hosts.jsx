import React from 'react' ;
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

  
const LoginHosts = () => {
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
    navigate('/broadcast'); // Redirect to Streaming page
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div className='container'>
            <div className="row h-100 justify-content-center align-items-center">
                <p className='col-12 text-center logoimg pt-4 mt-lg-5 pt-lg-5'><img src="images/zlicc-logo.png" alt="logo" /></p>
                <div className="col-md-6 my-auto">
                    <div className='frmbgclr'>
                        <h3 className='text-center lgntxthd'>Login for Host / Speaker / Cohost</h3>
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
                                    <Form.Label className='frmlable'>Host Key</Form.Label>
                                    <input type="text" name="hostkey" value={formData.hostkey} onChange={handleChange} className='form-control' />
                                </div>
                                <div className='mb-1 text-center'>
                                    <button type="submit" className='btn btn-primary sbmtbtn'>SUBMIT</button>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default LoginHosts