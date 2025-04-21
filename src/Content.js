import './Content.css'

const Content = ({color, setColor, togglecolor, setTogglecolor}) => {
  
  return (
    <section className='container'>
        <div className='result-box' style={{ backgroundColor: color, color: togglecolor ? '#000' : '#fff' }}>
            <p>{color ? color :'Empty value'}</p>
        </div>
        <div><label>
            <input autoFocus value={color} onChange={(e) => setColor(e.target.value)} placeholder="Add color name" type='text'></input>
        </label></div>
        <div><button onClick={() => setTogglecolor(!togglecolor) }>Toggle text Color</button></div>
    </section>
  )
}

export default Content