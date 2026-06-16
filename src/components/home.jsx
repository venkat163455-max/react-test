import React from 'react'
import Login from './login';


function Home() {
  return (
    <div>
        <div className='hmebnrbg'>
            <div className="container-fluid h-100">
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center align-items-sm-center'>
                        <div className='col col-sm-10 col-md-6 pb-4 pt-4'>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
