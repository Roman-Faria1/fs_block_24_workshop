import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId) 
  

  return (
      <div className="App">
        {
          puppies.map((puppy) => {
            return <button className="PuppyButton" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</button>
          })
        }
      {featPupId && (
        <div className="PuppyId">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li className="PuppyDetails">Age: {featuredPup.age}</li>
            <li className='PuppyDetails'>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>

  )
}

export default App
