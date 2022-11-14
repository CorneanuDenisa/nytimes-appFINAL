import React , {useState} from 'react'

const Searchform = ({searchText}) => {
    const [ text, setText]= useState('') 
    const HandleSubmit=(e)=>{
        e.preventDefault()
        searchText(text)
    }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='e.g politics'
        className='py-1 px-2 rounded-l-lg'
        onChange={(e)=>setText(e.target.value)}/>


        <button type='submit' className='bg-purple-400
        py-1 px-2 rounded-r-lg text-white' >Search</button>
      </form>
    </div>
  )
}

export default Searchform
