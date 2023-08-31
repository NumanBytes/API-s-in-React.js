// import logo from './logo.svg';
import "./App.css";

import NameEmailComponent from "./component/NameEmailComponent";
import DescriptionComponent from "./component/Description";

function App() {
  const descriptionPlaceholder = "Enter your description here";
  const handleClick = (e) => {
   
    alert("Button Clicked");
  };
  
  return (
    <div className="App">
      <NameEmailComponent />
      <DescriptionComponent
      placeholder = {descriptionPlaceholder} />
  
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default App;
