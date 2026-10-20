import { useEffect, useState } from "react";

function App() {
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");

  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return <div></div>;
}

export default App;
