import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import axios from "axios";
import Picture from '../components/Picture';

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("")
  const auth = "qxWbhXu3WCyLDTgXfBDPFPHHPHXxdKqnvn6E5MiGTKTyFLrMKH5lTPcf";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async(url) => {
    let result = await axios.get(url, { headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  }

  const morePicture = async() => {
    let newURL;
    setPage(page + 1)
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`
    }
    let result = await axios.get(newURL, { headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  }

  useEffect(() => {
    search(initialURL);
  }, []);

  useEffect(() => {
    if (input === '') {
      search(initialURL);
    }
  }, [input])

  return (
  <div style={{ minHeight: "100vh" }}>
    <Search 
    search={() => {search(searchURL);}} 
    input={input}
    setInput={setInput} 
    />
    <div className='pictures'>
      {data && data.map((d, index) => {
        return <Picture key={index} data={d} />;
      })}
    </div>
    <div className='morePicture'>
      <button onClick={morePicture}>Leran More</button>
    </div>
  </div>
  )
}

export default Homepage;