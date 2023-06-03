import React, {useEffect} from "react"
import "./index.css"
import {useState} from "react"
import axios from 'axios'
import qs from 'qs'

export default function Form({getData, classData, getClassData, teamData, getTeamData, requestAPI}) {

   // Converting the time format in database to hh:mm
    const convertTime = (inputTime) => {
        var tempTime = inputTime;
        var finalTime = "";
        if(tempTime > 120)
        {
        tempTime = tempTime - 120;
        finalTime = finalTime + " PM";
        }
        else
        {
        finalTime = finalTime + " AM";
        }
        if(tempTime % 10 == 5)
        {
        finalTime =  ":30" + finalTime;
        tempTime = tempTime - 5;
        }
        else
        {
        finalTime =  ":00" + finalTime;
        }
        finalTime = tempTime / 10 + finalTime;
        return finalTime;
    }

    // Drop down select for classes
    const classOptions = [...new Map(classData.map(item => 
        [item["class_id"] + " " + item["day"] + " (" + convertTime(item["start_time"]) + " - " + convertTime(item["end_time"]) + ")", 
        [item["class_id"] + " " + item["day"] + " (" + convertTime(item["start_time"]) + " - " + convertTime(item["end_time"]) + ")"]
    ]))
        .values()].sort(function(a,b) {
        return a-b;
    });

    // Drop down select for teams
    const teamOptions = [...new Map(teamData.map(item => 
        [item["team_id"] + " " + item["name"] + " " + item["programname"], 
        [item["team_id"] + " " + item["name"] + " " + item["programname"]]
    ]))
        .values()].sort(function(a,b) {
        return a-b;
    });

    // Drop down select for grade
    const gradeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // Usestate variables for sending in the data
    const [requestFirstName, setRequestFirstName] = useState("");
    const [requestLastName, setRequestLastName] = useState("");
    const [requestClass, setRequestClass] = useState("");
    const [requestTeam, setRequestTeam] = useState("");
    const [requestGrade, setRequestGrade] = useState("");

    // Sending data to be added
    const sendData = async () => {
    await axios.post('api/' + `${requestAPI}` + '/addrow', qs.stringify({
        fname: `${requestFirstName}`,
        lname: `${requestLastName}`,
        class_id: `${requestClass}`,
        team_id: `${requestTeam}`,
        grade: `${requestGrade}`,
        hidden: `${0}`
    }))
        .then((res) =>  {
            console.log(res.data);
            getData();
            getClassData();
            getTeamData();
        })
    }

    // Variable for opening up the add row popup
    const[popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }

    // Useeffect for getting data on page load
    useEffect(() => {
        getData();
        getClassData();
        getTeamData();
    }, [])

    return (
        <div>
            <h1 className="page--Title">▸ Items ◂</h1>
            <div className="addrow--Panel">
                <div>
                    <h5>Add Item</h5>
                    <button className="filter--Clear" onClick={togglePopup}>Add Item</button>
                </div>
            </div>
            {popup && (
                <div className="popup">
                    <div className="overlay">
                        <div className="popup--Content">
                            <h2 className="edit--Title">Add Item</h2>
                            <button className="filter--Clear edit--Input" onClick={togglePopup}> Close </button>
                            <input 
                                type="text"
                                value={requestFirstName}
                                className="filter--Input edit--Input" 
                                placeholder="Enter Item..."
                                onChange={(e) => {
                                    setRequestFirstName(e.target.value)
                                }}>
                            </input>
                            <input 
                                type="text"
                                value={requestLastName}
                                className="filter--Input edit--Input"  
                                placeholder="Enter Quantity..."
                                onChange={(e) => {
                                    setRequestLastName(e.target.value)
                                }}>
                            </input>
                            <select id="classinput" className="filter--Input edit--Input" onChange={(e) => {
                                console.log(e.target.value)
                                setRequestClass(e.target.value.substring(0, 1))
                            }}>
                                <option value="">Select Location...</option>
                                {classOptions.map(data => (
                                    <option value={data}>
                                        {data[0].substring(data[0].indexOf(" ") + 1)}
                                    </option>
                                ))}
                            </select>
                            <select id="teaminput" className="filter--Input edit--Input" onChange={(e) => {
                                console.log(e.target.value)
                                setRequestTeam(e.target.value.substring(0, 1))
                            }}>
                                <option value="">Select Deviler Location...</option>
                                {teamOptions.map(data => (
                                    <option value={data}>
                                        {data[0].substring(data[0].indexOf(" ") + 1)}
                                    </option>
                                ))}
                            </select>
                            <select id="gradeinput" className="filter--Input edit--Input" onChange={(e) => {
                                console.log(e.target.value)
                                setRequestGrade(e.target.value)
                            }}>
                                <option value="">Select Date...</option>
                                {gradeOptions.map(data => (
                                    <option value={data}>
                                    {data}
                                    </option>
                                ))}
                            </select>
                            <button className="filter--Clear edit--Input" onClick={() => {
                                if(requestFirstName === "" || requestLastName === "" || requestClass === "" || requestTeam === "" || requestGrade === "")
                                {
                                    alert("Invalid input!")
                                }
                                else
                                {
                                    // Resetting the input boxes
                                    document.getElementById("classinput").selectedIndex = 0;
                                    document.getElementById("teaminput").selectedIndex = 0;
                                    document.getElementById("gradeinput").selectedIndex = 0;

                                    setRequestFirstName("");
                                    setRequestLastName("");
                                    setRequestClass("");
                                    setRequestTeam("");
                                    setRequestGrade("");

                                    // Debugging console logs
                                    console.log(requestFirstName);
                                    console.log(requestLastName);
                                    console.log(requestClass);
                                    console.log(requestTeam);
                                    console.log(requestGrade);

                                    sendData();
                                    togglePopup();
                                }
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}