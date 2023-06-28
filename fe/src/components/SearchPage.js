import { searchDoctorByName, searchDoctorBySpec, searchDoctorByAll } from "../utils"
import { Dropdown, Layout, Button, message, Menu, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { DepartmentItems, DoctorItems } from "./Items";
import { Link, Route, Switch } from "react-router-dom";

const { Header, Content } = Layout;

const SearchPage = () => {
  const specs = [{specialty: "BrainDead"}, {specialty: "Cardiology"}];
  const [doctors, setDoctors] = useState([]);
  const [searched, setSearched] = useState(false);
  // const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState();
  // const allSpecs = [
  //   {specialty: "cardiology"},
  //   {specialty: "General surgery"},
  //   {specialty: "Neurology"},
  //   {specialty: "internal medicine"}
  // ]

  
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setAuthed(authToken === null);
    searchByAll();
    // setSpecs(doctors.map((doctors) => doctors.specialty));
  }, []);

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
    // setLoading(true);
    // try {
    //   const response = await searchDoctorByName(query);
    //   setDoctors(response || []);
    //   setSearched(true);
    // } catch (error) {
    //   message.error(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const searchBySpec = async(query) => {
    // setLoading(true)
    // try {
    //   const response = await searchDoctorBySpec(query);
    //   setDoctors(response || []);
    //   setSearched(true);
    // } catch (error) {
    //   message.error(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout">
        Log out 
      </Menu.Item>
    </Menu>
  )

  const onDoctorChange = (spec) => {
    searchBySpec(spec);
  }

  return(
      <Layout style={{ height: "100vh" }}>
      {/* <Header style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", backgroundColor: "#7dbcea" }}> 
      <div style={{ fontSize: 16, fontWeight: 600, color: "white"}}>
        SearchPage
      </div>
      {authed && (
          <div>
              <Dropdown trigger="click" overlay={userMenu}>
                  <Button icon={<UserOutlined />} shape="circle" />
              </Dropdown>
          </div>
      )}
      </Header> */}
      <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
        <Layout style={{ padding: '10px', minHeight: "584px"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", paddingRight: "50px"}}>
              <span style={{ padding: "0 15px", fontWeight: "bold", fontFamily: "sans-serif"}}>NameSearch: </span>
              <Form onFinish={searchByName} layout="inline">
                <Form.Item name="firstName">
                  <Input placeholder="FirstName"/>
                </Form.Item>
                <Form.Item name="lastName">
                  <Input placeholder="LastName"/>
                </Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                  Search
                </Button>
              </Form>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", paddingLeft: "50px"}}>
              <span style={{padding: "0 15px", fontWeight: "bold", fontFamily: "sans-serif"}}>DepartmentSearch: </span>
              <Form onFinish={searchBySpec} layout="inline">  
                <Form.Item onFinish={searchBySpec} layout="inline">
                  <Input placeholder="Department"/>
                </Form.Item>
                <Form.Item name="spec">
                  <Button loading={loading} type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
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