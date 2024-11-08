import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl , filterData } from "./data";
import { toast } from "react-toastify";
import { useState , useEffect } from "react";

const App = () => {
  const[courses , setCourses] = useState(null);
  const[loading , setloading] = useState(true);
  const[category, setcategry] = useState(filterData[0].title);

  async function getdata() {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(err) {
      toast.err("Chutiya ho tum...")
    }
    setloading(false);
  }

  useEffect( () => {
    getdata();
  } , []);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter category={category} setcategry={setcategry} filterData = {filterData}/>
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading ? (<Spinner/>) : (<Cards category={category} courses = {courses}/>)
          }
          {/* <Cards courses = {courses}/> */}
        </div>
      </div>
    </div>
  );
};

export default App;
