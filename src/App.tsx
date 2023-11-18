import { useState } from "react";
import "./App.css";
import { PageHeader } from "./layouts/PageHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div>2</div>
      </div>
    </>
  );
}

export default App;
