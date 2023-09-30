import "./App.css";
import Logo from "./assets/logo.png";
import Card from "./components/Card";
import Form, { FormDataType } from "./components/Form";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [data, setData]  = useState<FormDataType>({name: '', crushName: ''})

  const handleSubmit = (data: FormDataType) => {
    console.log(data)
    setData(data)
  }
  return (
    <div className="App">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Card>
        <Router>
          <Routes>
            <Route path="" element={<Form handleSubmit={handleSubmit}/>} />
            <Route path="/results" element={<Results data={data}/>} />
          </Routes>
        </Router>
      </Card>
    </div>
  );
}

export default App;
