import React, {useEffect} from "react"
import "./index.css"
import {useState} from "react"
import axios from 'axios'
import qs from 'qs'

export default function Table({data, classData, teamData, getData, requestAPI, column}) {

   // Sorting function useState variables
   const [firstNameValue, setFirstNameValue] = useState("");
   const [lastNameValue, setLastNameValue] = useState("");
   const [gradeValue, setGradeValue] = useState("");
   const [teamValue, setTeamValue] = useState("");
   const [programValue, setProgramValue] = useState("");
   const [classDayValue, setClassDayValue] = useState("");
   const [classTimeValue, setClassTimeValue] = useState("");

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

   // Sorting/filter drop downs content
   const gradeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   const teamOptions = [...new Map(data.map(item => [item["name"].toUpperCase() + " " + item["programname"], item["name"].toUpperCase() + " " + item["programname"]])).values()].sort()
   const programOptions = [...new Map(data.map(item => [item["programname"], item["programname"]])).values()].sort()
   const classDayOptions = [...new Map(data.map(item => [item["day"], item["day"]])).values()].sort()
   const classTimeOptions = [...new Map(data.map(item => [item["start_time"], item["start_time"]])).values()].sort(function(a,b) {
      return a-b;
   });

   // Drop down select for classes edit
   const classOptions = [...new Map(classData.map(item => 
      [item["class_id"] + " " + item["day"] + " (" + convertTime(item["start_time"]) + " - " + convertTime(item["end_time"]) + ")", 
      [item["class_id"] + " " + item["day"] + " (" + convertTime(item["start_time"]) + " - " + convertTime(item["end_time"]) + ")"]
   ]))
      .values()].sort(function(a,b) {
      return a-b;
   });

   // Drop down select for teams edit
   const teamOptions2 = [...new Map(teamData.map(item => 
      [item["team_id"] + " " + item["name"] + " " + item["programname"], 
      [item["team_id"] + " " + item["name"] + " " + item["programname"]]
   ]))
      .values()].sort(function(a,b) {
      return a-b;
   });

   // Popup variable
   const [popup, setPopup] = useState(false);
   const togglePopup = () => {
      setPopup(!popup)
   }

   // Popup editing variables
   const [editID, setEditID] = useState();
   const [editFirstName, setEditFirstName] = useState();
   const [editLastName, setEditLastName] = useState();
   const [editClass, setEditClass] = useState();
   const [editTeam, setEditTeam] = useState();
   const [editGrade, setEditGrade] = useState();
   const [editHidden, setEditHidden] = useState();

   // Editing the data in the student list
   const editData = async () => {
      await axios.post('api/' + `${requestAPI}` + '/editrow', qs.stringify({
         student_id: `${editID}`,
         fname: `${editFirstName}`,
         lname: `${editLastName}`,
         class_id: `${editClass}`,
         team_id: `${editTeam}`,
         grade: `${editGrade}`,
         hidden: `${editHidden}`
      }))
         .then((res) =>  {
            console.log(res.data);
            getData();
         })
   }

   // Table header content
   const TableHeadItem = ({ item }) => (
      <th>
         {item.heading}
      </th>
   )

   // Table row content
   const TableRow = ({item, column}) => {
      if(item.hidden === 1)
      {
         return null;
      }
      return (
         <tr>
            {column.map((columnItem, index) => {
               if(columnItem.value === "n/a")
               {
                  if(columnItem.heading === "Status")
                  {
                     return <td><button className="button--Table" onClick={() => {
                        togglePopup();
                        setEditID(item.student_id);
                        setEditFirstName(item.fname);
                        setEditLastName(item.lname);
                        setEditClass(item.class_id);
                        setEditTeam(item.team_id);
                        setEditGrade(item.grade);
                        setEditHidden(item.hidden);
                     }}>Status</button></td>
                  }
                  else if(columnItem.heading === "Request")
                  {
                     return <td><button className="button--Table" onClick={() => {
                        setEditID(item.student_id);
                        setEditFirstName(item.fname);
                        setEditLastName(item.lname);
                        setEditClass(item.class_id);
                        setEditTeam(item.team_id);
                        setEditGrade(item.grade);
                        setEditHidden(1);
                        editData();
                     }}>Request</button></td>
                  }   
               }
               if(columnItem.value === "start_time" || columnItem.value === "end_time")
               {
                  return <td>{convertTime(item[columnItem.value])}</td>
               }
               return <td>{item[`${columnItem.value}`]}</td>
            })}
         </tr>
      );  
   }

   // Useeffect for deleting
   useEffect(() => {
      editData();
      getData();
   }, [editID])

   // Useeffect for getting data on page load
   useEffect(() => {
      getData();
      console.log(data)
   }, [popup === false])

   return(
      <div>
         {/* Filter panel and inputs for sorting */}
         <div className="filter--Panel">
            <div>
               <h5>Company</h5>
               <input 
                  type="text" 
                  value={firstNameValue}
                  className="filter--Input" 
                  placeholder="Enter Company..."
                  onChange={(e) => {
                     setFirstNameValue(e.target.value.toLowerCase());
                     }}>
               </input>
            </div>
            <div>
               <h5>Item</h5>
               <input 
                  type="text" 
                  value={lastNameValue}
                  className="filter--Input" 
                  placeholder="Enter Item..."
                  onChange={(e) => {
                        setLastNameValue(e.target.value.toLowerCase());
                        }}>
               </input>
            </div>
            <div>
               <h5>Quantity</h5>
               <select id="gradefilter" className="filter--Input" onChange={(e) => {
                  setGradeValue(e.target.value.toLowerCase());
               }}>
                  <option value="">Select...</option>
                  {gradeOptions.map(data => (
                     <option value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <h5>Type</h5>
               <select id="teamfilter" className="filter--Input" onChange={(e) => {
                  const splitPosition = data.indexOf(" ");
                  if(e.target.value.toLowerCase().substring(0, 7) === "no team")
                  {
                     setTeamValue("no team");
                  }
                  else
                  {
                     const splitPosition = e.target.value.indexOf(" ");
                     setTeamValue(e.target.value.toLowerCase().substring(0, splitPosition));
                     setProgramValue(e.target.value.toLowerCase().substring(splitPosition + 1));
                  }
               }}>
                  <option value="">Select...</option>
                  {teamOptions.map(data => (
                     <option value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <h5>Location</h5>
               <select id="programfilter" className="filter--Input" onChange={(e) => {
                  setProgramValue(e.target.value.toLowerCase());
               }}>
                  <option value="">Select...</option>
                  {programOptions.map(data => (
                     <option value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>  
            <div>
               <h5>Date</h5>
               <select id="classdayfilter" className="filter--Input" onChange={(e) => {
                  setClassDayValue(e.target.value.toLowerCase());
               }}>
                  <option value="">Select...</option>
                  {classDayOptions.map(data => (
                     <option value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <h5>Clear Filter</h5>
               <button className="filter--Clear" onClick={() => {
                  document.getElementById("gradefilter").selectedIndex = 0;
                  document.getElementById("teamfilter").selectedIndex = 0;
                  document.getElementById("programfilter").selectedIndex = 0;
                  document.getElementById("classdayfilter").selectedIndex = 0;
                  document.getElementById("classtimefilter").selectedIndex = 0;

                  setFirstNameValue("");
                  setLastNameValue("");
                  setGradeValue("");
                  setTeamValue("");
                  setProgramValue("");
                  setClassDayValue("");
                  setClassTimeValue("");
               }}>Clear Filter</button>
            </div>
         </div>

         {/* The table (student list) */}
         <div className="div--Table">
            <div>
               <h1 className="title--Table">Item List</h1> 
               <table className="full--Table">
                  <thead>
                     <tr>
                        {column.map((item, index) => <TableHeadItem item={item} key={index}/>)}
                     </tr>
                  </thead>
                  <tbody>           
                     {data.filter((type) => {
                        // // Debugging console logs
                        // console.log(firstNameValue + " | " + type.fname)
                        // console.log(lastNameValue + " | " + type.lname)
                        // console.log(teamValue + " | " + type.name)
                        // console.log(gradeValue + " | " + type.grade)
                        // console.log(programValue + " | " + type.programname)
                        // console.log(classDayValue + " | " + type.day)
                        // console.log(classTimeValue + " | " + type.start_time)
                        return (
                           type.fname.toLowerCase().includes(firstNameValue) && 
                           type.lname.toLowerCase().includes(lastNameValue) && 
                           (type.grade.toString() === (gradeValue) || (gradeValue === "" && type.grade.toString().includes(gradeValue))) &&
                           type.name.toLowerCase().includes(teamValue) && 
                           type.programname.toLowerCase().includes(programValue) &&
                           type.day.toLowerCase().includes(classDayValue) &&
                           type.start_time.toString().toLowerCase().includes(classTimeValue)
                        )
                     })
                     .map((item, index) => <TableRow item={item} column={column}/>)}
                  </tbody>
               </table>
            </div>
         </div>
         {popup && (
            <div className="popup">
               <div className="overlay">
                  <div className="popup--Content">
                     <h2 className="edit--Title">Edit</h2>
                     <button className="filter--Clear edit--Input" onClick={togglePopup}>Close</button>
                     <input className="filter--Input edit--Input" value={editFirstName} onChange={(e) => {setEditFirstName(e.target.value)}}></input>
                     <input className="filter--Input edit--Input" value={editLastName} onChange={(e) => {setEditLastName(e.target.value)}}></input>
                     <select className="filter--Input edit--Input" onChange={(e) => {
                        setEditClass(parseInt(e.target.value.substring(0, e.target.value.indexOf(" "))));
                     }}>
                        {classOptions.map((data) => {
                           if(data[0].substring(0, data[0].indexOf(" ")) === editClass.toString())
                           {
                              return (
                                 <option selected value={data}>
                                    {data[0].substring(data[0].indexOf(" ") + 1)}
                                 </option>
                              )
                           }
                           return (
                              <option value={data}>
                                 {data[0].substring(data[0].indexOf(" ") + 1)}
                              </option>
                           )
                        })}
                     </select>
                     <select className="filter--Input edit--Input" onChange={(e) => {
                        setEditTeam(parseInt(e.target.value.substring(0, e.target.value.indexOf(" "))));
                     }}>
                        {teamOptions2.map((data) => {
                           if(data[0].substring(0, data[0].indexOf(" ")) === editTeam.toString())
                           {
                              return (
                                 <option selected value={data}>
                                    {data[0].substring(data[0].indexOf(" ") + 1)}
                                 </option>
                              )
                           }
                           return (
                              <option value={data}>
                                 {data[0].substring(data[0].indexOf(" ") + 1)}
                              </option>
                           )
                        })}
                     </select>
                     <select className="filter--Input edit--Input" onChange={(e) => {
                        setEditGrade(parseInt(e.target.value));
                     }}>
                        {gradeOptions.map((data) => {
                           if(data === editGrade)
                           {
                              return (
                                 <option selected value={data}>
                                    {data}
                                 </option>
                              )
                           }
                           return (
                              <option value={data}>
                                 {data}
                              </option>
                           )
                        })}
                     </select>
                     <button className="filter--Clear edit--Input" onClick={() => {
                        togglePopup();
                        editData();
                     }}>Submit and close</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

