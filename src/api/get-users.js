// the function that I will use to fetch users data from my backend.
async function getUsers() {
  //1.using Vite environment variable and API endpoint to create URL for request
  const url = `${import.meta.env.VITE_API_URL}/users`;
  //2. function fetch(url,methold), method="GET";
  //backend responds-get data, backend no respond-get an error
  const response = await fetch(url, { method: "GET" });
  //3. use 'ok' property to check request sucessful, backend fails to respond, throw an error
  if (!response.ok) {
    const fallbackError = "Error fetching users.";
    //'await' to signal to Javascript that it shouldn't run this code until 'response' gets turned into JSON.
    // catch will be triggered if response isn't json and throw error
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default getUsers;
