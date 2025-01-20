import React, { useState } from 'react';
import { RxDashboard} from "react-icons/rx";
import { PiDeviceMobileCameraLight, PiDesktopTowerFill, PiLinuxLogoLight } from "react-icons/pi";
import { FaWindows , FaApple} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Table from '../components/Table';

const DeviceManagement = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeDevice, setActiveDevice] = useState(null)
  const [activeSoftWare, setActiveSoftWare] = useState(null)
 
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); 
  };

  const handleActiveDevice = (deviceId) =>{
    setActiveDevice(deviceId)
  }

  const handleSoftWare = (softwareId) =>{
    setActiveSoftWare(softwareId)
  }
  
  return (
    <>
      <div className='p-3  ms-2 mt-2 bg-white rounded-3 d-flex me-' style={{ width: '1170px'}}>
        <div className='bg-light rounded-2'>
          <RxDashboard  className='m-2 bg-light rounded-3 fs-4'/>
        </div>
        <h6 className='mx-3 my-2 fw-bold'>Device Management</h6>
      </div>
      <div className='d-flex mx-2'>
        <div className='rounded-3 bg-white text-black my-2 me-1' style={{ width: '288px', height:'256px' }}>
          <div className='card-body'>
            <header className='card-title my-3 mx-2'>
              <h7>Organizations</h7>
            </header>
            <div className="d-flex mx-2">
              <input
              type="text"
              className="form-control  col-md-6 col-lg-20 px-5 py-2 rounded-4 me-5 position-relative "
              style={{fontSize:"10px"}}
              placeholder="Search organizational units"
              />
              <IoIosSearch className="position-absolute fs-5 my-2 mx-2 " />
            </div>
            <div className='row my-3 mx-2 bg-secondary bg-opacity-10 rounded-4 pt-3 pb-1'>
              <div className='d-flex pb-2 ' >
                {activeButton === 1 ? <CgRadioChecked className='fs-5 text-primary ' onClick={() => handleButtonClick(1)}/> : <GoDotFill className='fs-5 text-white bg-white border border-3 rounded-circle ' onClick={() => handleButtonClick(1)}/>}
                <p className='card-text px-1' style={{fontSize:"10px"}}>All organizational units users</p>
              </div>
              <div className='d-flex pt-1 '>
              {activeButton === 2 ? <CgRadioChecked className='fs-5 text-primary ' onClick={() => handleButtonClick(2)}/> : <GoDotFill className='fs-5 text-white bg-white border border-3 rounded-circle ' onClick={() => handleButtonClick(2)}/>}
                <p className='px-1' style={{fontSize:"10px"}}>Selected Organizational units users</p>
              </div>
            </div>
            <div  className='card-text d-flex mx-4 mt-4 mb-6 justify-content-between'>
              <p style={{fontSize:"12px"}}>Select</p>
              <BsChevronDown className='float-right fs-5 text-black'/>
            </div>
          </div>
        </div>
        <div className='container  ms-1'>
          <div className='row ' style={{ width: '930px'}}>
            <div className='p-2 mt-2 bg-white rounded-3 d-flex '>
              <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeDevice === 1 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleActiveDevice(1)}>
                <PiDeviceMobileCameraLight  className='m-1 fs-4'/>
                <p className='mx-1 my-2' style={{fontSize:"12px"}}>Mobile</p>
              </div>
              <div  className={`btn btn-xs rounded-4 d-flex pe-2 mx-2 ${activeDevice === 2 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleActiveDevice(2)}>
                <PiDesktopTowerFill  className='m-1 fs-4'/>
                <p className='mx-1 my-2'style={{fontSize:"12px"}}>Computer</p>
              </div>
            </div>
            <div className='p-2 mt-2 bg-white rounded-3 d-flex'>
              <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeSoftWare === 1 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(1)}>
                <FaWindows  className='m-1 fs-4'/>
                <p className='mx-1 my-2'style={{fontSize:"12px"}}>Windows</p>
              </div>
              <div className={`btn btn-xs rounded-4 d-flex pe-2 mx-2 ${activeSoftWare === 2 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(2)}>
                <FaApple  className='m-1 fs-4'/>
                <p className='mx-1 my-2'style={{fontSize:"12px"}}>Mac</p>
              </div>
              <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeSoftWare === 3 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(3)}>
                <PiLinuxLogoLight  className='m-1 fs-4'/>
                <p className='mx-1 my-2'style={{fontSize:"12px"}}>Linux</p>
              </div>
            </div>
            <Table/>
          </div>
        </div>
      </div>
   </>
    
  );
};

export default DeviceManagement;