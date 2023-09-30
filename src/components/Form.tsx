import { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

type FormPropType = {
  handleSubmit: (data: FormDataType) => void;
};

export type FormDataType = {
  name: string;
  crushName: string;
};

const Form = ({ handleSubmit }: FormPropType) => {
  const Telegram = (window as any).Telegram.WebApp;

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    crushName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    handleSubmit(formData);
    if (formData.name === "" || formData.crushName === "") {
      // alert("Enter your names first");
      Telegram.showAlert("Enter your names to check compatibility");
    } else {
      setFormData({ name: "", crushName: "" });
      navigate("/results");
    }
  };

  useEffect(() => {
    Telegram.enableClosingConfirmation()
    Telegram.expand()
    Telegram.setHeaderColor('#ff5555')
    // Telegram.MainButton.show()
    //   .enable()
    //   .setParams({ color: "#ff5555" })
    //   .setText("Check Compatibility")
    //   .onClick(() => onSubmit());
  }, []);

  return (
    <div className="form-container">
      <h2 className="title">Check your love compatibility</h2>
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name here"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="crushName">Your Crush's Name</label>
          <input
            type="text"
            placeholder="Enter your crush's name here"
            name="crushName"
            value={formData.crushName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <input type="submit" value="CHECK COMPATIBILITY" />
        </div>
      </form>
    </div>
  );
};

export default Form;
