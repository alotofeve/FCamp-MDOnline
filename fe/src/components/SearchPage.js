import { Dropdown, Layout, Button, message, Menu, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { DepartmentItems, DoctorItems } from "./Items";
import { searchDoctorBySpec, searchDoctorByName } from "../utils/SearchUtils";
const { Header, Content } = Layout;

const SearchPage = () => {
  const specs = [{specialty: "General Illness"}, {specialty: "Respiratory"},{specialty: "Gastrointestinal"},
                 {specialty: "Urinary"}, {specialty: "Skin"},{specialty: "Injuries"}, {specialty: "Chronic"}];
  const [doctors, setDoctors] = useState([]);
  const [searched, setSearched] = useState(false);
  // const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState();
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setAuthed(authToken === null);
    searchByAll();
    // setSpecs(doctors.map((doctors) => doctors.specialty));
  }, []);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const finishSearch = (data) => {
    if (data.firstName != undefined && data.lastName != undefined && data.spec === undefined) {
      searchByName({"firstName": data.firstName,"lastName":data.lastName});
    }
    else if (data.firstName === undefined && data.lastName === undefined && data.spec != undefined) {
      searchBySpec(data.spec);
    }
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
      const response = await searchDoctorByName(query);
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
      console.log(doctors)
    }
  };

  const onDoctorChange = (spec) => {
    searchBySpec(spec);
  }

  return(
      <Layout style={{ height: "100vh" }}>
      <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
        <Layout style={{ padding: '10px', minHeight: "584px"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", paddingRight: "50px"}}>
              <span style={{ padding: "0 15px", fontWeight: "bold", fontFamily: "sans-serif"}}>NameSearch: </span>
              <Form onFinish={finishSearch} layout="inline">
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
                <Button loading={loading} type="primary" htmlType="submit">
                  Search
                </Button>
              </Form>
            </div>
          </div>
          {!searched && (
            <DepartmentItems specs={specs} onDoctorChange={onDoctorChange} loading={loading}/>
          )}
          {searched && (
            <DoctorItems doctors={doctors} loading={loading}/>
          )}
        </Layout>
      </Content>
      </Layout>
  )
}

export default SearchPage;