import React from 'react'
import Chat from './chat';
import { Link } from 'react-router-dom';

function Streaming() {
  return (
    <div>
        <div className='hmebnrbg'>
            <div className="container-fluid h-100">
                <div className='row justify-content-center align-items-sm-center'>
                    <div className='col-sm-12 col-md-12 mb-auto  pt-4'>
                        <div className='row justify-content-center'>
                            <div className='col col-sm-10 col-md-8 pb-4'>
                                <div className='vdefrme'>
                                    <div className="ratio ratio-16x9">
                                        <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className='col col-sm-10 col-md-4 pb-4'>
                                 <div className='vdefrme'>
                                    <Chat />
                                </div>
                            </div>
                            <div className='col col-sm-12 my-auto text-center pb-4'>
                                 <Link to="/login-hosts" className='btn btn-primary sbmtbtn '>Request to become Speaker</Link>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Streaming
