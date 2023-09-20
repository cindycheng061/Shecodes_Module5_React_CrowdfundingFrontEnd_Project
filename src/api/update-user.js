async function updateUser(userData, userId) {
  const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
  const response = await fetch(url, {
    method: "PUT",
    //tell the server that JSON data sending, so set the Content-type header to application/json
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${window.localStorage.getItem("token")}`,
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const fallbackError = "Error trying to update a user";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  console.log(userData);
  return await response.json();
}

export default updateUser;
