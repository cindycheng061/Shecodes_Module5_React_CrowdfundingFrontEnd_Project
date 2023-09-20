

async function getUserProjects() {
  const url = `${import.meta.env.VITE_API_URL}/api/user-projects`;
  const token = window.localStorage.getItem("token"); // token

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    const fallbackError = "Error fetching projects owned by user";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  // if there is no error,return response data
  return await response.json();
}

export default getUserProjects;
