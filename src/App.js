import { useEffect, useRef } from "react";
import "./App.scss";
import { Button, Input, TechsList } from "./Components";
import { addTech } from "./store/Techs/Techs.actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTech = () => {
    if (inputRef.current.value) {
      dispatch(addTech(inputRef.current.value));
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="app">
      <TechsList techs={result} />
      <Input inputRef={inputRef} placeholder="Digite alguma tecnologia" />
      <Button onClick={handleAddTech} className="main-button">
        Adicionar Tech
      </Button>
    </div>
  );
}
