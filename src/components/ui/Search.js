import React, {useState} from 'react'

const Search = ({getQuery}) => {

  const [text, setText] = useState('')
  
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  
  return (
    <div className="search py-5 w-75 mx-auto">
      <form>
        <input 
          type="text" 
          className="form-control"
          value={text}
          onChange={(e) => onChange(e.target.value)} 
          placeholder="Search Characters"
        />
      </form>
    </div>
  )
}

export default Search