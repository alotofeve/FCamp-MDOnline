const domain = ""
const handleResponseStatus = (response, errMsg) => {
    const {status, ok} = response;

    if (status === 401) {
        localStorage.removeItem("authToken");
        window.location.reload();
        return;
    }

    if (!ok) {
        throw Error(errMsg);
    }
};

export const searchDoctorByAll = () => {
    const searchDoctorByAllUrl = `${domain}/search-doctor-by-all`;
    return fetch(searchDoctorByAllUrl,
      ).then((response) => {
        handleResponseStatus(response, "Fail to get all doctors");
        return response.json();
      });
  };
  
  export const searchDoctorByName = (query) => {
    const firstName = query?.firstName?? "";
    const lastName = query?.lastName?? "";
    const searchDoctorByNameUrl = new URL(`${domain}/search-doctor-by-name`);
    const authToken = localStorage.getItem("authToken");
    searchDoctorByName.searchParams.append("firstName", firstName);
    searchDoctorByName.searchParams.append("lastName", lastName);
  
    return fetch(searchDoctorByNameUrl,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }).then((response) => {
        handleResponseStatus(response, "Fail to get doctors by name");
        return response.json();
      });
  };
  
  export const searchDoctorBySpec = (spec) => {
    const searchDoctorBySpecUrl = `${domain}/search-doctor-by-spec?spec=`;
    // searchDoctorByName.searchParams.append("spec", spec);
    
    return fetch(`${searchDoctorBySpecUrl}${spec}`).then((response) => {
        handleResponseStatus(response, "Fail to search doctor by spec");
        return response.json();
      });
  };