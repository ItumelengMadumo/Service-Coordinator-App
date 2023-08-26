function saveEvent(event) {
    // Retrieve existing events from local storage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Add the new event to the existing events array
    existingEvents.push(event);
  
    // Save the updated events array back to local storage
    localStorage.setItem('events', JSON.stringify(existingEvents));
  }
  
  

  const event = {
    id: 1,
    title: 'Sample Event',
    date: '2023-07-10',
    // Include any other properties specific to your events
  };
  
  saveEvent(event);
  