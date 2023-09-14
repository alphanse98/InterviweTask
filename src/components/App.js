import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from "./Card"

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState("");

  // Function to handle the search
  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      setResult(res.data)
    } catch (error) {
      console.log("error",error)
    }
    console.log("Searching for:", searchTerm);
  };

  useEffect(() => {
    // Use a setTimeout to delay the search by 300ms after the user stops typing
    const delaySearch = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300);

    // Cleanup function to cancel the previous setTimeout on input change
    return () => {
      clearTimeout(delaySearch);
    };
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
  };

  return (
    <div className="App">
      <input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Card data = {result}/>
    </div>
    
  );
}

export default App;
