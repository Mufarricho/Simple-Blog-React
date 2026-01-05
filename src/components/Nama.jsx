import {useState} from "react"

function Nama() {
  const [Nama , setNama]=useState(null);

  function onChangeName(event) {
    setNama(event.target.value)
    
  }
    

    return (
        <div>
      <label>Nama: <input 
        type="text" 
        onChange={onChangeName}
        placeholder="Masukkan nama..."
      /></label>
         <div>
          <h2>{Nama}</h2>
        </div>
      </div>
    )
}

export default Nama;