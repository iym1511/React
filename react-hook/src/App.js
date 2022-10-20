import logo from './logo.svg';
import './App.css';
import StateEffectHookComp from './component/StateEffectHookComp';
import ReducerComp from './component/ReducerComp';
import USeMemoComp from './component/UseMemoComp';
import CallbackComp from './component/CallbackComp';
import RefComp from './component/RefComp';
import ContextCompAll from './component/ContextCompAll';
import ContextParentComp1 from './component/ContextParentComp1';

function App() {
  return (
    <div className="App">
      <StateEffectHookComp />
      <ReducerComp />
      <USeMemoComp />
      <CallbackComp />
      <RefComp />
      <ContextCompAll />
      <ContextParentComp1 />

    </div>
  );
}

export default App;
