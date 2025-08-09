import React from "react";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Custom Hooks Demo</h1>
      <FormComponent />
      <FetchComponent />
    </div>
  );
};

export default App;
