import { useState } from "react";
import { Button } from "@/components/ui/button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>@rssviana</h1>
      <div className="card">
        <div className="flex flex-col items-center justify-center">
          <Button
            className="cursor-pointer"
            onClick={() => setCount((count) => count + 1)}
          >
            Click me
          </Button>
        </div>
        <p>count is {count}</p>
      </div>
    </>
  );
}

export default App;
