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

export function DoctorItems ({ doctors, loading, changePageState, setDoctorId }) {
  const [showDetail,setShowDetail] = useState(false);
  const clickCard = (data) => {
    console.log("click",data)
    setShowDetail(true);
  }
  const handleCancel = () => {
    setShowDetail(false);
  }
  const shwoDoctorProfile = (id) => {
    console.log("change")
    setDoctorId(id)
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
          <p>First Name: {item.doctorEntity.firstName}</p>
          <p>LastName: {item.doctorEntity.lastName}</p>
          <p>specialization: {item.doctorEntity.spec}</p>
          <p style={{color:'#ff0000'}}>If you want to make an appointment with this doctor</p>
          <Button type="primary" onClick={()=>shwoDoctorProfile(item.doctorEntity.id)}>
            go to doctor profile
          </Button>
        </Modal>
        <List.Item>
          {/* <Link to={{ pathname: `/DoctorProfile`, state: { doctor: item }}}> */}
          <Card 
            hoverable
            title={item.doctorEntity.firstName+" "+item.doctorEntity.lastName }
            bordered={false}
            style={{width:300, height:150}}
            loading={loading}
            onClick={() => clickCard(item)}
          >
            <p>specialization: {item.doctorEntity.spec}</p>
            <p>availableTime: {item.availables}</p>
          </Card>
          {/* </Link> */}
        </List.Item>
        </div>
      )}
    />
  )
}