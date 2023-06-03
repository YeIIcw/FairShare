import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./components/index.css";
import Table from "./components/Table.js";
import Form from "./components/Form.js";
import PageLayout from "examples/LayoutContainers/PageLayout";
import qs from 'qs';
import Sidenav from "examples/Sidenav";


function FoodList() {
    const [dataTable, setDataTable] = useState([]); 
    const [classDataTable, setClassDataTable] = useState([]); 
    const [teamDataTable, setTeamDataTable] = useState([]); 
    
    // Getting the data in the student list
    const getData = async () => {
        await axios.post('api/student-list', (null))
            .then(res => setDataTable(res.data));
    }

    // Getting data for class ids
    const getClassData = async () => {
        await axios.post('api/student-list/classes', (null))
            .then(res => setClassDataTable(res.data));
    }
    
    // Getting data for team ids
    const getTeamData = async () => {
        await axios.post('api/student-list/teams', (null))
            .then(res => setTeamDataTable(res.data));
    }

    const column = [
        {heading: 'Company', value: 'fname'},
        {heading: 'Item', value: 'lname'},
        {heading: 'Quantity', value: 'grade'},
        {heading: 'Type', value: 'name'},
        {heading: 'Date', value: 'day'},
        {heading: 'From', value: 'start_time'},
        {heading: 'To', value: 'end_time'},
        {heading: 'Status', value: 'n/a'},
        {heading: 'Request', value: 'n/a'},
    ]



    return (
        <PageLayout>
            <div className="full--Page">
                <a href="/profile"><button>Back</button></a>
                {/* <Sidebar/> */}
                <div id="content" className="content--Panel">
                    <Form getData={getData} classData={classDataTable} getClassData={getClassData} teamData={teamDataTable} getTeamData={getTeamData} requestAPI={"student-list"}/>
                    <Table data={dataTable} classData={classDataTable} teamData={teamDataTable} getData={getData} requestAPI={"student-list"} column={column} />
                    
                </div>
            </div>
            
        </PageLayout>
    )
}

export default FoodList;