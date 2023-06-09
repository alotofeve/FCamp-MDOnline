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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      handleResponseStatus(response, "fail to update doctor profile");
    });
};

export const getDoctorInfoById = (id) => {
  const getDoctorInfoByIdUrl = `${domain}/get-profile-by-id?id=`;
  return fetch(`${getDoctorInfoByIdUrl}${id}`).then((response) => {
    handleResponseStatus(response, "Fail to get doctors profile by id");
    return response.json();
});
}


export const getDoctorInfo = () => {
  const getDoctorInfoUrl = `${domain}/get-doctor-profile`;
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
});
}


export const getPatientInfo = () => {
  const getPatientInfoUrl = `${domain}/get-patient-profile`;
  return fetch(
    getPatientInfoUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  ).then((response) => {
    handleResponseStatus(response, "Fail to get patient profile");
    return response.json();
  })
} 

export const updatePatientProfile = (query) => {
  const updatePatientProfileUrl = `${domain}/update-patient-profile}`;
  return fetch (
    updatePatientProfileUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(query)
    }
  ).then((response) => {
    handleResponseStatus(response, "Fail to update patient profile")
  })
}

