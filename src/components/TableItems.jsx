import { useContext,} from "react";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi"
import { GoDotFill } from "react-icons/go";
import agentContext from "../context/agent/AgentContext";

const TableItems = ({agent}) => {
  
  const {handleToggleOnusbPort,handleToggleOffusbPort,handleToggleOnsdPort,handleToggleOffsdPort,handleToggleOndvd,handleToggleOffdvd,handleToggleOnDevice,handleToggleOffDevice,handleToggleOnBluetooth,handleToggleOffBluetooth, handleToggleOnPrinter,handleToggleOffPrinter,handleToggleOnShutDevice,handleToggleOffShutDevice,handleToggleOnRebootDevice,handleToggleOffRebootDevice} = useContext(agentContext)

  return (
    <tr className={`${agent.id % 2 === 0 ? 'bg-white' : 'bg-transparent'}`} id= {agent.id}>
      <td className=" text-center ">
        {agent.status ? <GoDotFill className="fs-5 " style={{ color: 'rgb(144, 200, 44)' }}/> : <GoDotFill className="fs-5 text-secondary"/>}
      </td>
      <td className="d-flex ">
        <img src={agent.image} alt="" className='img-fluid rounded-2 m-2' style={{width: '30px', height: '30px'}} />
        <p className="fw-bold text-primary mt-3 ps-1" style={{fontSize:"12px"}}>{agent.name}</p>
      </td>
      <td className="text-center" >
        {agent.usbOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() =>{ 
          handleToggleOffusbPort(agent.name, 'USB Port', agent.id,)}}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() =>{
            handleToggleOnusbPort(agent.name, 'USB Port', agent.id,)}}/>}
      </td>
      <td className="text-center">
        {agent.sdportOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() =>{
          handleToggleOffsdPort(agent.name, 'SD Port', agent.id,)}}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => {
            handleToggleOnsdPort(agent.name, 'SD Port', agent.id,)}}/>}
      </td>
      <td className="text-center">
        {agent.dvdOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() => handleToggleOffdvd(agent.name, 'CD/DVDs',agent.id)}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOndvd(agent.name, 'CD/DVDs', agent.id)}/>}
      </td>
      <td className="text-center">
        {agent.lockdeviceOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() => handleToggleOffDevice(agent.name, 'Lock Device', agent.id)}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOnDevice(agent.name, 'Lock Device', agent.id)}/>}
      </td>
      <td className="text-center">
        {agent.bluetoothOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() => handleToggleOffBluetooth(agent.name, 'Bluetooth', agent.id)}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOnBluetooth(agent.name, 'Bluetooth', agent.id)}/>}
      </td>
      <td className="text-center">
        {agent.printersOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() =>handleToggleOffPrinter(agent.name, 'Printers', agent.id)}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOnPrinter(agent.name, 'Printers', agent.id)}/>}
      </td>
      <td className="text-center">
        {agent.shutDowndeviceOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() => handleToggleOffShutDevice(agent.name, 'Device shutdown', agent.id)}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOnShutDevice(agent.name, 'Device shutdown', agent.id)}/>}
      </td> 
      <td className="text-center">
        {agent.rebootOnandOffagent ? <PiToggleRightFill className="text-primary" style={{ fontSize: '40px' }} onClick={() => handleToggleOffRebootDevice(agent.name, 'Reboot Device', agent.id )}/>: <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '40px' }} onClick={() => handleToggleOnRebootDevice(agent.name, 'Reboot Device', agent.id)}/>}
      </td>
    </tr>
  )
}

export default TableItems