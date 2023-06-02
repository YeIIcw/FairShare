import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./components/index.css";
import Table from "./components/Table.js";
import Form from "./components/Form.js";
import Sidebar from "./components/Sidebar.js"
import PageLayout from "examples/LayoutContainers/PageLayout";
import qs from 'qs';
import Sidenav from "examples/Sidenav";


function StudentList() {
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
        {heading: 'First Name', value: 'fname'},
        {heading: 'Last Name', value: 'lname'},
        {heading: 'Grade', value: 'grade'},
        {heading: 'Team', value: 'name'},
        {heading: 'Class Day', value: 'day'},
        {heading: 'Start Time', value: 'start_time'},
        {heading: 'End time', value: 'end_time'},
        {heading: 'Edit', value: 'n/a'},
        {heading: 'Delete', value: 'n/a'},
    ]

    // Sidebar: https://www.youtube.com/watch?v=yhLIEikdz7Y
    // Make add row a popup/slide down DONE
    // Make the values in the dropdown not show DONE
    // Make the time am/pm or in 24 hours time DONE
    // https://medium.com/swlh/how-to-make-a-side-navigation-bar-in-reactjs-c90747f3410c

    return (
        <PageLayout>
            <div className="full--Page">
                <Sidebar/>
                <div id="content" className="content--Panel">
                    <Form getData={getData} classData={classDataTable} getClassData={getClassData} teamData={teamDataTable} getTeamData={getTeamData} requestAPI={"student-list"}/>
                    <Table data={dataTable} classData={classDataTable} teamData={teamDataTable} getData={getData} requestAPI={"student-list"} column={column} />
                </div>
            </div>
        </PageLayout>
    )
}

export default StudentList;