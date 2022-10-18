import './App.css';
import MapComp from './component/MapComp';
import MapCompTest from './component/MapCompTest';
import LifeCycleComp from './component/LifeCycleComp';
import ClassNameComp from './component/ClassNameComp';

function App() {
  return (
    <div className="App">
      <MapComp />
      <MapCompTest />
      <LifeCycleComp />
      <ClassNameComp />
    </div>
  );
}

export default App;
