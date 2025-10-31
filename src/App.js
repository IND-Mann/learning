
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, FilterData } from "./Data";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";


function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading]= useState();
  const [category, setCategory] = useState(FilterData[0].title)



  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let op = await response.json();
      setCourses(op.data);
      console.log(op.data)
    } catch (err) {
      console.log(" problem")
    }
    
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter FilterData={FilterData}
        category={category}
        setCategory={setCategory} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        { loading ? <Spinner/> : <Cards 
        category={category}
        courses={courses}
        />
}
      </div>
    </div>
  );
}

export default App;
