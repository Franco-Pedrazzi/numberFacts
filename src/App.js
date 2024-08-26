import './App.css';
import { useState } from 'react';

function App() {

  const [NumberData, setNumberData] = useState("");
  const [dateData, setDateData] = useState("")
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0
  })

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }
  const FindNumberData=()=>{
    fetch("http://numbersapi.com/"+number+"?json")
    .then((response)=>response.json())
    .then((json)=>setNumberData(json))
  }
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const [inputYear, inputMonth, inputDay] = inputDate.split("-")
    setDate({
      day: inputDay,
      month: inputMonth,
      year: inputYear
    });
  }
  const FindDate=()=>{
    console.log(date)
    fetch("http://numbersapi.com/"+date["day"]+"/"+date["month"]+"/date")
    .then((response)=> console.log(response.json()))
    .then((json)=>setNumberData(json))
    console.log(dateData)
  }

  return (
    <main>

      <h1>Datos sobre números y fechas</h1>

      <section>
        <h2>Obtener un dato sobre un número</h2>
        <input type="number" onChange={handleNumberChange} />
        <button onClick={FindNumberData}>Enviar</button>
        <p className="result-box">{NumberData.text}</p>
      </section>

      <section>
        <h2>Obtener un dato sobre una fecha</h2>
        <input type="date" onChange={handleDateChange} />
        <button onClick={FindDate}>Enviar</button>
        <h3>Dato sobre la fecha</h3>
        <p className="result-box">{dateData.text}</p>
        <h3>Dato sobre el año</h3>
        <p className="result-box"></p>
      </section>

    </main>
  );
}

export default App;
