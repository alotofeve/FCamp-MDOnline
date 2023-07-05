import { List, Card, Modal, Select, Option, Button } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

export const DepartmentItems = ({ specs, onDoctorChange, loading }) => {

  return (
        <List 
        style={{ marginTop: 20}}
        loading={loading}
        grid={{
          gitter: 16,
          xs: 1,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4
        }}
        dataSource={specs}
        renderItem={(item) => (
          <List.Item>
            <Card 
              hoverable
              title={item.specialty}
              bordered={false}
              style={{width:300, height:150}}
              loading={loading}
              onClick={() => onDoctorChange(item.specialty)}
            >
            </Card>
          </List.Item>
        )}
      />
    )
}

export function DoctorItems ({ doctors, loading, changePageState }) {
  const [showDetail,setShowDetail] = useState(false);
  const clickCard = (data) => {
    console.log("click",data)
    setShowDetail(true);
  }
  const handleCancel = () => {
    setShowDetail(false);
  }
  const shwoDoctorProfile = () => {
    console.log("change")
    changePageState("profile")
  }
  return (
      <List 
      style={{ marginTop: 20}}
      loading={loading}
      grid={{
        gitter: 16,
        xs: 1,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4
      }}
      dataSource={doctors}
      renderItem={(item) => (
        <div>
        <Modal 
          title="Doctor Deatils"
          visible={showDetail}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose={true}
      >
          <p>First Name: {item.firstName}</p>
          <p>LastName: {item.lastName}</p>
          <p>specialization: {item.spec}</p>
          <p>If you want to make an appointment with this doctor</p>
          <Button type="primary" onClick={shwoDoctorProfile}>
            go to doctor profile
          </Button>
        </Modal>
        <List.Item>
          {/* <Link to={{ pathname: `/DoctorProfile`, state: { doctor: item }}}> */}
          <Card 
            hoverable
            title={item.firstName+" "+item.lastName }
            bordered={false}
            style={{width:300, height:150}}
            loading={loading}
            onClick={() => clickCard(item)}
          >
            <p>specialization: {item.spec}</p>
            <p>availableTime: {item.availableTimes}</p>
          </Card>
          {/* </Link> */}
        </List.Item>
        </div>
      )}
    />
  )
}