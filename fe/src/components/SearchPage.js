import { Dropdown, Layout, Button, message, Menu, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { DepartmentItems, DoctorItems } from "./Items";
import { searchDoctorBySpec, searchDoctorByFullName, searchDoctorByFirstName, searchDoctorByLastName, searchDoctor} from "../utils/SearchUtils";
const { Header, Content } = Layout;

function SearchPage({changePageState, setDoctorId}){
  const specs = [{specialty: "General Illness"}, {specialty: "Respiratory"},{specialty: "Gastrointestinal"},
                 {specialty: "Urinary"}, {specialty: "Skin"},{specialty: "Injuries"}, {specialty: "Chronic"}];
  const [doctors, setDoctors] = useState([]);
  const [searched, setSearched] = useState(false);
  // const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState();
  // useEffect(() => {
  //   const authToken = localStorage.getItem("authToken");
  //   setAuthed(authToken === null);
  //   searchByAll();
  //   // setSpecs(doctors.map((doctors) => doctors.specialty));
  // }, []);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const finishSearch = async(data) => {
    console.log("serch",data)
    if (data.firstName === undefined || data.firstName ===""){data.firstName = null}
    if (data.lastName === undefined || data.lastName ===""){data.lastName = null}
    if (data.spec === undefined|| data.spec === ""){data.spec = null}
    
    setLoading(true);
    try {
      const response = await searchDoctor(data);
      console.log("search doctor: ",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
    data = ""
  }
  const searchByAll = async() => {
    // setLoading(true)
    // try {
    //   const response = await searchDoctorByAll();
    //   setDoctors(response || []);
    // } catch (error) {
    //   message.error(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const searchByName = async(query) => {
    setLoading(true);
    try {
      const response = await searchDoctorByFullName(query);
      console.log("search by full name: ",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchByFirstName = async(query) => {
    setLoading(true)
    try {
      const response = await searchDoctorByFirstName(query);
      console.log("search by first name: ",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchByLastName = async(query) => {
    setLoading(true)
    try {
      const response = await searchDoctorByLastName(query);
      console.log("search by last name",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchByFullName = async(query) => {
    setLoading(true)
    try {
      const response = await searchDoctorByLastName(query);
      console.log("search by last name",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchBySpec = async(query) => {
    setLoading(true)
    try {
      const response = await searchDoctorBySpec(query);
      console.log(response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onDoctorChange = async(spec) => {
    const data = {"first_name":null,"last_name":null,"spec":spec}
    setLoading(true);
    try {
      const response = await searchDoctor(data);
      console.log("search doctor: ",response);
      setDoctors(response);
      setSearched(true);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return(
      <Layout style={{ height: "100vh" }}>
      <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
        <Layout style={{ padding: '10px', minHeight: "584px"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", paddingRight: "50px"}}>
              {/* <span style={{ padding: "0 15px", fontWeight: "bold", fontFamily: "sans-serif"}}>NameSearch: </span> */}
              <Form onFinish={finishSearch} layout="inline" preserve={false}>
                <Form.Item name="firstName">
                  <Input placeholder="FirstName"/>
                </Form.Item>
                <Form.Item name="lastName">
                  <Input placeholder="LastName"/>
                </Form.Item>
                <Form.Item name = "spec">
                  <Select
                    showSearch
                    placeholder="specialization"
                    optionFilterProp="children"
                    onChange={onChange}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[{value: 'General Illness',label: 'General Illness',},
                              {value: 'Respiratory',label: 'Respiratory',},
                              {value: 'Gastrointestinal',label: 'Gastrointestinal',},
                              {value: 'Urinary',label: 'Urinary',},
                              {value: 'Skin',label: 'Skin',},
                              {value: 'Injuries',label: 'Injuries',},
                              {value: 'Chronic',label: 'Chronic',},]}
                  />
                </Form.Item>
                {/* <Form.Item> */}
                  <Button loading={loading} type="primary" htmlType="submit">
                    Search
                  </Button>
                {/* </Form.Item> */}
              </Form>
            </div>
          </div>
          {!searched && (
            <DepartmentItems specs={specs} onDoctorChange={onDoctorChange} loading={loading}/>
          )}
          {searched && (
            <DoctorItems doctors={doctors} loading={loading} changePageState={changePageState} setDoctorId={setDoctorId}/>
          )}
        </Layout>
      </Content>
      </Layout>
  )
}

export default SearchPage;