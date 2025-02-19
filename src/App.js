import { useState } from "react";
import Child from "./child";

function Parent() {
  const [childData, setDataChild] = useState('');


  function handleDataChild(data) {
    setDataChild(data);
  }

  return (
    <div>
      <h1>Data from Child: {childData}</h1  >
      <Child sendDataToParent={handleDataChild} />
    </div>
  );
}

export default Parent;
