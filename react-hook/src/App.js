import logo from './logo.svg';
import './App.css';
import StateEffectHookComp from './component/StateEffectHookComp';
import ReducerComp from './component/ReducerComp';
import USeMemoComp from './component/UseMemoComp';
import CallbackComp from './component/CallbackComp';
import RefComp from './component/RefComp';

function App() {
  return (
    <div className="App">
      <StateEffectHookComp />
      <ReducerComp />
      <USeMemoComp />
      <CallbackComp />
      <RefComp />
    </div>
  );
}

export default App;
