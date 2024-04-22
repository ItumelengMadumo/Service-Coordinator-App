function sendRequest(url, method, data) {
    const headers = {
      'Content-Type': 'application/json',
      // Add any additional headers as needed
    };
  
    const options = {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    };
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        return response.json();
      })
      .then(responseData => {
        // Process the response data
        console.log('Response:', responseData);
        // Save the response data or perform any desired actions
        return responseData;
      })
      .catch(error => {
        // Handle errors during the request
        console.error('Error:', error.message);
        throw error;
      });
  }

  
  const requestData = { key: 'value' };

sendRequest('https://api.example.com/endpoint', 'POST', requestData)
  .then(responseData => {
    // Handle the response data as needed
    console.log('Received response:', responseData);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Request failed:', error);
  });
