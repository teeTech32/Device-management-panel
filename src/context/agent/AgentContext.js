import { createContext, useState} from "react";
import agentsData from '../../assets/agentsData.json'

const agentContext = createContext()

export const AgentProvider = ({children}) =>{
  const [modalContent, setModalContent] = useState(null);
  const [usbOnandOff, setUsbOnandOff] = useState(false);
  const [sdportOnandOff, setSdportOnandOff] = useState(false);
  const [dvdOnandOff, setDvdOnandOff] = useState(false);
  const [lockdeviceOnandOff, setLockdeviceOnandOff] = useState(false);
  const [bluetoothOnandOff, setBluetoothOnandOff] = useState(false);
  const [printersOnandOff, setPrintersOnandOff] = useState(false);
  const [shutDowndeviceOnandOff, setShutDowndeviceOnandOff] = useState(false);
  const [rebootOnandOff, setRebootOnandOff] = useState(false);
  const [agents, setAgents] = useState(agentsData)
  const [buttonActive, setButtonActive] = useState(false)
  const [buttonInActive, setButtonInActive] = useState(false)
  
  const handleToggleOnusbPort = (name, feature, id, ) => {
    console.log(id)
    const agentId = agentsData.find(agent => agent.id === id)
    if( agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.usbOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
       console.log(agentId.id)
    }
  };
  const handleToggleOffusbPort = (name, feature, id) => {
     console.log(id)
    const agentId = agentsData.find(agent => agent.id === id)
    if( agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.usbOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
       console.log(agentId.id)
    }
  };

  const handleToggleOnsdPort = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if( agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.sdportOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setButtonInActive((prevState)=>(!prevState))
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffsdPort = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if( agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.sdportOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setButtonInActive((prevState)=>(!prevState))
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

  const handleToggleOndvd = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.dvdOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffdvd = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.dvdOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

  const handleToggleOnDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.lockdeviceOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.lockdeviceOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }

  const handleToggleOnBluetooth = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.bluetoothOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffBluetooth = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.bluetoothOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

   const handleToggleOnPrinter = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.printersOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffPrinter = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.printersOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

  const handleToggleOnShutDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.shutDowndeviceOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled On.`);
    }
  }
  const handleToggleOffShutDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.shutDowndeviceOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

  const handleToggleOnRebootDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.rebootOnandOffagent = true
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }
  const handleToggleOffRebootDevice = (name, feature, id)=>{
    const agentId = agentsData.find(agent => agent.id === id)
    if(agentId.id === id ){
      const editAgentStatus = {...agentId}
      editAgentStatus.rebootOnandOffagent = false
      setAgents(
        agents.map((agent)=>(agent.id === agentId.id) ? {...agent, ...editAgentStatus} : agent)
      )
      setModalContent(`${feature} for ${name} has been toggled Off.`);
    }
  }

  return(
  <agentContext.Provider value={{
    usbOnandOff,setUsbOnandOff,sdportOnandOff,setSdportOnandOff,dvdOnandOff,setDvdOnandOff,lockdeviceOnandOff,setLockdeviceOnandOff,bluetoothOnandOff,setBluetoothOnandOff,printersOnandOff,setPrintersOnandOff,shutDowndeviceOnandOff,setShutDowndeviceOnandOff,rebootOnandOff, setRebootOnandOff,modalContent, setModalContent,handleToggleOnusbPort,handleToggleOffusbPort,handleToggleOnsdPort,handleToggleOffsdPort,handleToggleOndvd,handleToggleOffdvd,handleToggleOnDevice,handleToggleOffDevice,handleToggleOnBluetooth,handleToggleOffBluetooth,handleToggleOnPrinter,handleToggleOffPrinter,handleToggleOnShutDevice,handleToggleOffShutDevice,handleToggleOnRebootDevice,handleToggleOffRebootDevice,agents,buttonActive,setButtonActive,buttonInActive,setButtonInActive 
  }}>
    {children}
  </agentContext.Provider>
  )
}
export default agentContext

