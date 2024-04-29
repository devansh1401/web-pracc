import { useContext} from "react";
import { countContext } from "./context";
import { countAtom } from "./store/atoms/count";
import {useRecoilState , useRecoilValue, RecoilRoot, useSetRecoilState} from "recoil";
function App() {
  
  return (
    <>
    <RecoilRoot>
    <Count />
    </RecoilRoot> 
    </>
  );
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>{setCount(count => count + 1)}}>increase</button>
      <button onClick={()=>{setCount(count => count - 1)}}>decrease</button>
    </div>
  );
}
export default App;
