// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ClickCounterComp from './components/ClickCounterComp';
import ConditionRenComp from './components/ConditionRenComp';
import FunctionComp from './components/FunctionComp';
import HoverCounterComp from './components/HoverCounterComp';
import MethodEventComp from './components/MethodEventComp';
import MyCssComp from './components/MyCssComp';
import MyImageComp from './components/MyImageComp';
import MySliderComp from './components/MySliderComp';
import ParentComp from './components/ParentComp';
import SetStateComp from './components/SetStateComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome You All in My React Session</h1>
      {/* <FunctionComp myName="Panchashil Wankhede" post="Software Developer" />
      <ClassComp myName="Vishal Wankhede" post="Fullstack Developer" /> */}
      {/* <MethodEventComp />
      <SetStateComp />
      <ConditionRenComp />
      <MyImageComp />
      <ParentComp /> */}
      {/* <MyCssComp /> */}
      {/* <ClickCounterComp />
      <HoverCounterComp /> */}
      <MySliderComp />
    </div>
  );
}

export default App;
