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

export const getLecture = () => {
    const getLectureUrl = `${domain}/get-lecture-by-doctor`;
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
  });
};

export const getFiveLectures = () => {
  const getLectureUrl = `${domain}/get-five-lectures`;
  return fetch(getLectureUrl, {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(patientData),
  }).then((response) => {
    handleResponseStatus(response, "Fail to set Profile");
    return response.json();
  });
}