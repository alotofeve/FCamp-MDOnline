import { type } from "@testing-library/user-event/dist/type";

const domain = "https://api"
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

export const login = (credential) => {
    const loginUrl = `${domain}/signin`;
    return fetch(loginUrl, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      if (!response.ok) {
          throw Error("Fail to log in");
      }
      return response.json();     
    })
    .then((token) => {
        localStorage.setItem("authToken",token);
    });
  };

  export const register = (credential) => {
    const registerUrl = `${domain}/signup`;
    return fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      handleResponseStatus(response, "Fail to register");
    });
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

export const searchDoctorBySpec = (query) => {
  const spec = query?.spec?? "";
  const searchDoctorBySpecUrl = new URL(`${domain}/search-doctor-by-spec`);
  const authToken = localStorage.getItem("authToken");
  searchDoctorByName.searchParams.append("spec", spec);


  return fetch(searchDoctorBySpecUrl,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }).then((response) => {
      handleResponseStatus(response, "Fail to get doctors by spec");
      return response.json();
    });
};

export const updateDoctorProfile = (data) => {
  const url = `${domain}/update-doctor-profile`;
  return fetch(
    url,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      handleResponseStatus(response, "fail to update doctor profile");
      return response.json();
    });
};

export const getLecture = () => {
  const getLectureUrl = new URL(`${domain}/get-lecture-by-doctor`);
  const authToken = localStorage.getItem("authToken");
  return fetch(
    getLectureUrl,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }
  ).then((response) => {
    handleResponseStatus(response, "Fail to get lecture");
    return response.json();
  })
}

export const postLecture = (lecture) => {
  const authToken = localStorage.getItem("authToken");
  const postLectureUrl = new URL(`${domain}/post-lecture`);

  return fetch(postLectureUrl,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lecture)
    }).then((response) => {
      handleResponseStatus(response, "Fail to post lecture");
      return response.json();
    });
};

export const deleteLecture = (lectureId) => {
  const deleteLectureUrl = new URL(`${domain}/delete-lecture`);
  deleteLectureUrl.searchParams.append("lectureId", lectureId);

  return fetch(
    deleteLectureUrl,
    {
      method: "DELETE",
    }
  ).then((response) => {
    handleResponseStatus(response, "Fail to delete lecture");
    return response.json();
  });
};

export const getDoctorInfo = () => {
  const getDoctorInfoUrl = new URL(`${domain}/get-doctor-profile`);
  return fetch(
    getDoctorInfoUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  ).then((response) => {
    handleResponseStatus(response, "Fail to get profile");
    return response.json();
  })
}