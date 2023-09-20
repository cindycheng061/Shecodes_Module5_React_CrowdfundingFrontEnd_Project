async function deleteProject(projectId) {
  const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
  const response = await fetch(url, {
    method: "DELETE",
    //tell the server that JSON data sending, so set the Content-type header to application/json
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${window.localStorage.getItem("token")}`,
    },
    
  });

    if (!response.ok) {
    // If response not OK, it attempts to parse the response data as JSON to extract error details. If parsing the JSON fails, it throws a generic error with the message "Error trying to delete a project."
    // If there are error details in the response JSON, it extracts them; otherwise, it uses the fallback error message.
    // It throws an error with the error message.
    const fallbackError = "Error trying to delete a project";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
    }
    return "Project deleted sucessfully!"
}

export default deleteProject;
