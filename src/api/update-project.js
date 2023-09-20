async function updateProject(projectData, projectId) {
  const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
  const response = await fetch(url, {
    method: "PUT",
    //tell the server that JSON data sending, so set the Content-type header to application/json
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${window.localStorage.getItem("token")}`,
    },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    const fallbackError = "Error trying to update a project";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
//   console.log(projectData);
  return await response.json();
}

export default updateProject;
