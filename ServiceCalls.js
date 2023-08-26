function sendRequestToServer(url, method, data) {
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
        console.log('Response from server:', responseData);
        // Return the relayed message received from the server
        return responseData.message;
      })
      .catch(error => {
        // Handle errors during the request
        console.error('Error:', error.message);
        throw error;
      });
  }
  
  const requestData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    message: 'This is my detailed request to the server.',
  };
  
  sendRequestToServer('https://api.example.com/endpoint', 'POST', requestData)
    .then(relayedMessage => {
      // Handle the relayed message from the server
      console.log('Server relayed message:', relayedMessage);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Request failed:', error);
    });
  