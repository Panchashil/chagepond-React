// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionRenComp from './components/ConditionRenComp';
import FunctionComp from './components/FunctionComp';
import MethodEventComp from './components/MethodEventComp';
import MyImageComp from './components/MyImageComp';
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
      {/* <MethodEventComp /> */}
      {/* <SetStateComp /> */}
      {/* <ConditionRenComp /> */}
      {/* <MyImageComp /> */}
      <ParentComp />
    </div>
  );
}

export default App;
