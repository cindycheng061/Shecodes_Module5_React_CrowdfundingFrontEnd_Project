async function postUsers(userData) {
  const url = `${import.meta.env.VITE_API_URL}/users/`;
  const response = await fetch(url, {
    method: "POST",
    //tell the server that JSON data sending, so set the Content-type header to application/json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const fallbackError = "Error trying to post a project";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postUsers;
