import { List, Card } from "antd";
import { Link } from "react-router-dom";

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

export const DoctorItems = ({ doctors, loading }) => {
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
        <List.Item>
          <Link to={{ pathname: `/DoctorProfile`, state: { doctor: item }}}>
          <Card 
            hoverable
            title={item.firstName }
            bordered={false}
            style={{width:300, height:150}}
            loading={loading}
          >
            <p>{item.spec}</p>
            <p>{item.availableTimes}</p>
          </Card>
          </Link>
        </List.Item>
      )}
    />
  )
}