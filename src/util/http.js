import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
export const queryClient = new QueryClient();
export async function fetchEvents({ signal, searchTerm }) {
  // console.log(searchTerm);
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
export async function fetchImages({ signal }) {
  let url = "http://localhost:3000/events/images";
  try {
    const response = await axios.get(url, { signal: signal });
    const { images } = response.data;
    return images;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        "An error occurred while fetching the images"
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
export async function fetchEvent({ id, signal }) {
  let url = `http://localhost:3000/events/${id}`;
  try {
    const response = await axios.get(url, { signal: signal });
    const { event } = response.data;
    return event;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        "An error occurred while fetching the event"
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
export async function deleteEvent({ id }) {
  let url = `http://localhost:3000/events/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        "An error occurred while fetching the images"
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
export async function updateEvent({ id, event }) {
  let url = `http://localhost:3000/events/${id}`;
  try {
    const response = await axios.put(url, { event });
    return response.data.event;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        "An error occurred while fetching the images"
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
