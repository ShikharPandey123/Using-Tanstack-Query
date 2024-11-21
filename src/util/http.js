import axios from "axios";
export async function fetchEvents({ signal, searchTerm }) {
  console.log(searchTerm);
  let url = "http://localhost:3000/events";
  if (searchTerm) {
    url += "?search=" + searchTerm;
  }
  try {
    const response = await axios.get(url, { signal: signal });
    const { events } = response.data;
    return events;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        "An error occurred while fetching the events"
      );
      customError.code = error.response.status;
      customError.info = error.response.data;
      throw customError;
    } else if (error.request) {
      const customError = new Error("No response received from the server");
      throw customError;
    } else {
      const customError = new Error("An unknown error occurred");
      throw customError;
    }
  }
}
export async function createNewEvent(eventData) {
  try {
    const response = await axios.post(
      `http://localhost:3000/events`,
      eventData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Extract and return the event data from the response
    return response.data.event;
  } catch (error) {
    // Construct a similar error object as in the fetch implementation
    const customError = new Error("An error occurred while creating the event");
    customError.code = error.response?.status;
    customError.info = error.response?.data;
    throw customError;
  }
}
