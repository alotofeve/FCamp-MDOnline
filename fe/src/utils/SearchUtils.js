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
  
  
export const searchDoctorByName = (name) => {
const searchDoctorByNameUrl = `${domain}/search-doctor-by-name?first_name=`;
return fetch(`${searchDoctorByNameUrl}${name.firstName}&last_name=${name.lastName}`).then((response) => {
    handleResponseStatus(response, "Fail to get doctors by name");
    return response.json();
    });
};

export const searchDoctorByFirstName = (name) => {
    
    const searchDoctorUrl = `${domain}/search-doctor-by-firstname?first_name=`;
    return fetch(`${searchDoctorUrl}${name}`).then((response) => {
        handleResponseStatus(response, "Fail to get doctors by firstname");
        return response.json();
    });
};

export const searchDoctorByLastName = (name) => {
    
    const searchDoctorUrl = `${domain}/search-doctor-by-lastname?last_name=`;
    return fetch(`${searchDoctorUrl}${name}`).then((response) => {
        handleResponseStatus(response, "Fail to get doctors by lastname");
        return response.json();
    });
};

export const searchDoctorByFullName = (name) => {

    const searchDoctorByNameUrl = `${domain}/search-doctor-by-fullname?first_name=`;
    return fetch(`${searchDoctorByNameUrl}${name.firstName}&last_name=${name.lastName}`).then((response) => {
        handleResponseStatus(response, "Fail to get doctors by fullname");
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

export const searchDoctor = (data) => {
    const searchUrl = `${domain}/search-doctor`;
    return fetch(searchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        handleResponseStatus(response, "Fail to search doctor");
        return response.json();
      });
} 