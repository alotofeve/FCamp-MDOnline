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