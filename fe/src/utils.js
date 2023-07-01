import { type } from "@testing-library/user-event/dist/type";

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

export const login = (credential) => {
    const loginUrl = `${domain}/login`;
    const formData = new FormData();
    formData.append("username", credential.username);
    formData.append("password", credential.password);
    return fetch(loginUrl, {
      method: 'POST',
      credentials: 'include',
      body: formData
  }).then((response) => {
      if (response.status !== 204) {
          throw Error('Fail to log in');
      }
  })
};

const logoutUrl = `${domain}/logout`;
export const logout = () => {
    return fetch(logoutUrl, {
        method: 'POST',
        credentials: 'include',
    }).then((response) => {
        if (response.status !== 204) {
            throw Error('Fail to log out');
        }
    })
};

export const registerPatient = (credential) => {
  const registerUrl = `${domain}/register-patient`;
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

export const setPatientProfile = (patientData) => {
  const profileUrl = `${domain}/set-patient-profile`;
  return fetch(profileUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientData),
  }).then((response) => {
    handleResponseStatus(response, "Fail to set Profile");
  });
};

export const registerDoctor = (credential) => {
  const registerUrl = `${domain}/register-doctor`;
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
export const setDoctorProfile = (doctorData) => {
  const profileUrl = `${domain}/set-doctor-profile`;
  return fetch(profileUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctorData),
  }).then((response) => {
    handleResponseStatus(response, "Fail to set Profile");
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