async function getUserPledges() {
  const url = `${import.meta.env.VITE_API_URL}/api/user-pledges`;
  const token = window.localStorage.getItem("token"); // get token

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    const fallbackError = "Error fetching pledges supported by user";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default getUserPledges;
