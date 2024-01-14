import React, { useEffect, useState} from 'react';

const DoubtHistory =  () => {
  const [doubts , setDoubts] = useState([]);
 
  const  fetchData = async()=>{
    try {
        let response = await fetch('http://localhost:5050/api/user/list', {
        headers: {
          'Authorization': 'Bearer YOUR_JWT_TOKEN',
        },
      });

    let result = await response.json();
    setDoubts(result)
        
    } catch (error) {
        console.error('Error fetching doubt history:', error);
    }
    
  } 

 useEffect(() => {
  fetchData();
 }, []);
  
  return(
    <div>
      <h1>Doubt History</h1>
      <ul>
        {doubts.map(data => (
          <li key={data.id}>
            {data.doubt}
          </li>
        ))}
      </ul>
    </div>
  ) 
};

export default DoubtHistory;