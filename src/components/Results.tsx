import AnimatedNumber from "animated-number-react2";
import "./Results.css";
import { FormDataType } from "./Form";
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti'
import { useEffect } from "react";

type ResultsType = {
  data: FormDataType;
};

const Results = ({ data }: ResultsType) => {
  // const Telegram = (window as any).Telegram.WebApp

  const navigate = useNavigate();
  const value = Math.floor(Math.random() * 100);

  // const sendData = () => {
  //   Telegram.sendData({data: `${data.name} & ${data.crushName}: ${value}% compatible`, button_text: 'TEST'})
  // }

  useEffect(() => {
    // Telegram.MainButton.show()
    // .setText('PLAY AGAIN')
    // .onClick(() => navigate('/'))
  }, [])
  return (
    <>
    {value > 90 && <Confetti width={330}/>}
    <div>
      <h2 className="title">
        {value < 40 ? "Oops! " : value < 69 ? "Nice! " : "Excellent! "} Your
        love compatibility is
      </h2>
      <div className="number input-form">
        <span>
          <AnimatedNumber value={value} />%
        </span>
      </div>
      <div className="input-form">
        <h2 className="names">{`${data.name}  &  ${data.crushName}`}</h2>
      </div>
      <div className="input-group result-btn-container">
        <input
          type="button"
          onClick={() => navigate("/")}
          id="secondary-btn"
          value="PLAY AGAIN"
        />
        {/* <input type="button" value="SHARE WITH FRIENDS" onClick={sendData}/> */}
      </div>
    </div>
    </>
  );
};

export default Results;
