import React from 'react'
import Chat from './chat'
//import { Link } from 'react-router-dom'
import NavFooter from './nav-footer'

function Broadcast() {
  return (
    <div>
        <div className='hmebnrbg'>
            <div className="container-fluid h-100">
                <div className='row justify-content-center align-items-sm-center'>
                    <div className='col-sm-12 col-md-12 mb-auto  pt-4'>
                        <div className='row ustify-content-center align-items-sm-center'>
                            <div className='col col-sm-10 col-md-6 mb-auto pb-4'>
                                <div className='vdefrme'>
                                    <div className="text-center lgntxthd">Self Camera View along with Cohost and Speakers</div>
                                </div>
                            </div>
                            <div className='col col-sm-10 col-md-4 my-auto pb-4'>
                                 <div className='vdefrme'>
                                    <Chat />
                                </div>
                            </div>
                            <div className='col col-sm-10 col-md-2 mb-auto pb-4'>
                                 <div className='vdefrme'>
                                    <div className="text-center lgntxthd"> List of viewers with option to make temporary speaker</div>   
                                 </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 mt-auto pt-4">
                        <div className='vdefrme'>
                             <NavFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Broadcast
