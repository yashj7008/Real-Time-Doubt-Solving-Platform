import React from 'react';
import axios from 'axios';

const StartPollingButton = () => {
  const startPolling = async () => {
    try {
   
      await axios.post('http://localhost:5050/api/tutor/start-polling');

      console.log('Polling started successfully!');
    } catch (error) {
      console.error('Error starting polling:', error);
    }
  };

  return (
    <button onClick={startPolling}>
      Start Polling
    </button>
  );
};

export default StartPollingButton;