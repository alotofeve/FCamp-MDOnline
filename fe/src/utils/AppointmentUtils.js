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

export const createAppointment = (appointment) => {
    const appointmentUrl = `${domain}/appointment`;
    return fetch(
      appointmentUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment)
      }).then((response) => {
        handleResponseStatus(response, "fail to post appointment");
      })
  }
  
  export const cancelAppointment = (query) => {
    const appointmentUrl = `${domain}/appointment`;
    return fetch(
      appointmentUrl,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query) 
      }
    ).then((response) => {
      handleResponseStatus(response, "fail to delete appointment");
    })
  }
  
  export const updateAppointment = (query) => {
    const appointmentUrl = `${domain}/appointment`;
    return fetch(
      appointmentUrl,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      }
    ).then((response) => {
      handleResponseStatus(response, "fail to update appointment");
    })
  }
  
  export const getAppointment = () => {
    const appointmentUrl = `${domain}/appointment`;
    return fetch(
      appointmentUrl,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
    ).then((response) => {
      handleResponseStatus(response, "fail to update appointment");
      return response.json();
    })
  }

  export const setAvailableTime = (query) => {
    const url = `${domain}/set-available-times`;
    return fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      }
    ).then((response) => {
      handleResponseStatus(response, "fail to set available times");
    })
  }