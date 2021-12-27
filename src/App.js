import React,{useState} from 'react'
import Data from "./mock-data.json"
import './App.css';

const App = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='App'>
        <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        <div  className='AppLogo'>
       

        {
  // eslint-disable-next-line array-callback-return
  Data.filter(post => {
    if (query === '') {
      return post;
    } 
    else if (post.first_name.toLowerCase().includes(query.toLowerCase()))
    
    {
      return post;
    }
  })
  .map((post, index) => (
    <div className="box" key={index}>
      <p>{post.first_name}</p>
      <p>{post.email}</p>
    </div>
  ))
}
        </div>
    </div>
  )
}

export default App
