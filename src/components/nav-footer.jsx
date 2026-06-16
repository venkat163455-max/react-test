import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavFooter() {
  return (
    <div>
      <div className="footer text-white py-2">
      <div className="container navftr">
        <div className="d-flex justify-content-center flex-wrap gap-4">
          <div className="dropup">
            <button className="btn btnmnu dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="images/microphone-.png" alt="icon" /> Mic Setting </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link to='/' className="dropdown-item">Mute Control</Link></li>
              <li><Link to='/' className="dropdown-item">Input Volume/Gain</Link></li>
              <li><Link to='/' className="dropdown-item">Microphone Boost</Link></li>
              <li><Link to='/' className="dropdown-item">Noise Reduction</Link></li>
            </ul>
          </div>
          <div className="dropup">
            <button className="btn btnmnu dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="images/cameraicon.png" alt="icon" /> Camera Setting </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li><Link to='/' className="dropdown-item">Brightness</Link></li>
              <li><Link to='/' className="dropdown-item">Contrast</Link></li>
              <li><Link to='/' className="dropdown-item">Saturation</Link></li>
              <li><Link to='/' className="dropdown-item">Frame Aspect Ratio</Link></li>
            </ul>
          </div>

          <div className="dropup">
            <button className="btn btnmnu dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="images/recordicon.png" alt="icon" /> Record </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
              <li><Link to='/' className="dropdown-item">Noise Suppression</Link></li>
              <li><Link to='/' className="dropdown-item">Microphone Volume</Link></li>
            </ul>
          </div>

          <Link to='/' className="btn btnmnu"><img src="images/streamicon.png" alt="icon" /> Start Streaming</Link>
          <Link to='/' className="btn btnmnu"><img src="images/Shrescrnicon.png" alt="icon" /> Share Screen</Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default NavFooter