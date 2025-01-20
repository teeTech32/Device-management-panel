import one from '../assets/images/one.jpg'

const agent = {
  name: 'Chidinma Snaarp',
  email: 'almJawso@example.com',
  image: one
}

const Agent = () => {
  return (  
    <div className='d-flex mx-1 mt-1' style={{marginBottom: '230px'}}>
      <figure className='mx-1'>
        <img src={one} alt={agent.name} className='rounded-circle img-fluid circle-img border border-3 border-primary' style={{width:'30px', height:'30px'}}/>
      </figure>
      <div>
        <p className='text-black mb-1 ' style={{fontSize:'12px'}}>{agent.name}</p>
        <p className='text-secondary opacity-50' style={{fontSize: '10px'}}>{agent.email}</p>
      </div>
    </div>  
  )
}

export default Agent