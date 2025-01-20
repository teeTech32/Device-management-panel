import { IoIosSearch } from "react-icons/io";
import { PiCopyLight } from "react-icons/pi";
import { GoBell } from "react-icons/go";


const Header = () => (
  <header className="d-flex justify-content-between align-items-center p-2 my-2 me-3 ms-2 bg-white  rounded-3 "  style={{ width:'1170px'}}>
    <div className="d-flex">
      <div className="d-flex mx-5 ">
        <input
        type="text"
        className="form-control   px-5 py-2 rounded-4  position-relative "
        placeholder="Search for files and folders"
        style={{width: "500px", fontSize:'12px'}}
        />
        <IoIosSearch className="position-absolute fs-4 my-3 mx-3 " />
      </div>
      <div className="d-flex" style={{paddingLeft:"190px"}}>
        <div className="bg-secondary bg-opacity-10 rounded-4 mx-2 text-center cursor-pointer ">
          <GoBell className="m-3 fs-5 text-center"/>
        </div>
        <div className="bg-secondary bg-opacity-10 rounded-4 px-2 me-2" style={{fontSize:'12px'}}>
          Agent Code: <strong className="text-primary"style={{fontSize:'12px'}}>0365o23j7742y3b38</strong>
          <PiCopyLight className="m-3 fs-5 cursor-pointer " />
        </div>
      </div>
    </div>
  </header>
);

export default Header;