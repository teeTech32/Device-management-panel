import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard} from "react-icons/rx";
import { IoHelpCircleOutline } from "react-icons/io5"
import { TfiBarChart } from "react-icons/tfi";
import { PiCreditCard } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { PiHeartbeatThin } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { PiDevicesFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import { PiBuildingsThin } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import Agent from './Agent';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClicked, setIsClicked] = useState(null)

  const handleNav = (navId) =>{
    setIsClicked(navId)
  }

return isCollapsed ? <aside
      className='bg-white mt-2 ms-2 rounded-3 mb-4 '
      style={{ width: '240px', height:'auto',  transition: 'width 0.5s' }}
    >
      <div className='d-flex mt-4 btn ms-2 me-3' onClick={()=>setIsCollapsed(false)}>
        <header className='fw-bold  mb-2' style={{ fontFamily: ' Berlin San FB Demi ' }}>
          <h4 className='ms-2'>Snaarp</h4>
        </header>
        <BsChevronDown className='fs-3 pt-2 ps-2'/>
      </div>
      <nav className="text-secondary flex-column px-1 pt-2">
        <div className='pb-5'>
          <NavLink to="/" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 1 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(1)} >
            <RxDashboard className='fs-2 p-2'/>
            <p className='pt-2 'style={{ fontSize:'10px'}}>Dashboard</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 2 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(2)} >
            <PiBuildingsThin className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Organization & Reg.</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 3 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(3)} >
            <LuClipboardList className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Reporting</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 4 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(4)} >
            <PiCreditCard className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Billing</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 5 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(5)} >
            <AiOutlineUser className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Account</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 6 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(6)} >
            <PiHeartbeatThin className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Device Health</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 7 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(7)} >
            <SlLock className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>End Point Mgt Security</p>
          </NavLink>
          <NavLink to="/device-management" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 8 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(8)} >
            <PiDevicesFill className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Device Management</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 9 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(9)} >
            <TbWorld className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Website Block</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 10 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(10)} >
            <SlSettings className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Settings</p>
          </NavLink>
        </div>
        <div className='mt-5'>
           <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 11 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(11)} >
            <TfiBarChart className='fs-2 p-2'/>
            <p  className='pt-2'style={{ fontSize:'10px'}}>User Panel</p>
          </NavLink>
          <NavLink to="/other-page" className={`nav-link d-flex rounded-4 pt-1 ps-2 ${isClicked === 12 ? "bg-primary bg-opacity-10 text-primary fw-bold" : "text-secondary text-secondary-10"} `} onClick={()=>handleNav(12)} >
            <IoHelpCircleOutline className='fs-2 p-2'/>
            <p className='pt-2'style={{ fontSize:'10px'}}>Support</p>
          </NavLink>
          <hr className='mx-2 my-2 '/>
        </div>
      </nav>
      <Agent/>
    </aside> : 
    <div className='bg-white mt-2 ms-2 rounded-3 mb-2 d-flex  pt-3 btn'
      style={{ width: '240px', height:'70px',  transition: 'width 0.5s' }} onClick={()=>setIsCollapsed(true)}>
      <div className='d-flex ms-2 me-3'>
        <header className='fw-bold ' style={{ fontFamily: ' Berlin San FB Demi ' }}>
          <h4 className='ms-2'>Snaarp</h4>
        </header>
        <BsChevronUp className='fs-3 pt-2 ps-2'/>
      </div>
    </div>
};

export default Sidebar;