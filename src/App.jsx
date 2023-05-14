import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import AllCoffee from "./components/AllCoffee";
import { useState } from "react";


function App() {
  const loadedCoffee = useLoaderData()
  const [allCoffee, setAllCoffee] = useState(loadedCoffee)
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-x-6 py-6 bg-gray-600 font-bold text-white">
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
        {/* <Link to="/updateCoffee">UpdateCoffee</Link> */}
      </div>
      <h1 className="text-center text-3xl my-4">Coffee: {allCoffee.length}</h1>
      <div className="grid md:grid-cols-2 gap-6 my-6">
           {
            allCoffee?.map(coffee => <AllCoffee key = {coffee._id} coffee={coffee} allCoffee={allCoffee} setAllCoffee={setAllCoffee}></AllCoffee>)
           } 
      </div>
    </div>
  );
}

export default App;
