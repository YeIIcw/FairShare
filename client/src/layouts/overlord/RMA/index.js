import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";
import qs from 'qs';
import "./style/styles.css";




class RMA extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            ClassDay: "",
            ClassTime: "",
            Program: "",
            Team: "",
            Items: 0,
            AllIssue: "",
            AllIssueQuantity: "",
            AllIssueDescription: "",
            Progress: "Dropped Off",


            Issue: "",
            IssueQuantity: 0,
            IssueDescription: "",
            Issue2: "",
            IssueQuantity2: 0,
            IssueDescription2: "",
            Issue3: "",
            IssueQuantity3: 0,
            IssueDescription3: "",
            Issue4: "",
            IssueQuantity4: 0,
            IssueDescription4: "",
            Issue5: "",
            IssueQuantity5: 0,
            IssueDescription5: "",
        }
    }       

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        
    }

    addTotal = () => {
        console.log("Data Added");
        console.log(this.state.Issue + ", " + this.state.Issue2 + ", " + this.state.Issue3 + ", " + this.state.Issue4 + ", " + this.state.Issue5);
        console.log(this.state.IssueQuantity + ", " + this.state.IssueQuantity2 + ", " + this.state.IssueQuantity3 + ", " + this.state.IssueQuantity4 + ", " + this.state.IssueQuantity5);
        console.log(this.state.IssueDescription + ", " + this.state.IssueDescription2 + ", " + this.state.IssueDescription3 + ", " + this.state.IssueDescription4 + ", " + this.state.IssueDescription5);
        
        const temp = this.state.Issue + ", " + this.state.Issue2 + ", " + this.state.Issue3 + ", " + this.state.Issue4 + ", " + this.state.Issue5;
        const temp2 = this.state.IssueQuantity + ", " + this.state.IssueQuantity2 + ", " + this.state.IssueQuantity3 + ", " + this.state.IssueQuantity4 + ", " + this.state.IssueQuantity5;
        const temp3 = this.state.IssueDescription + ", " + this.state.IssueDescription2 + ", " + this.state.IssueDescription3 + ", " + this.state.IssueDescription4 + ", " + this.state.IssueDescription5;

            console.log(temp,temp2,temp3);

        this.setState({
            AllIssue: `${this.state.Issue + ", " + this.state.Issue2 + ", " + this.state.Issue3 + ", " + this.state.Issue4 + ", " + this.state.Issue5}`
        });

        this.setState({
            AllIssueQuantity: `${temp2}`
        })

        this.setState({
            AllIssueDescription: `${temp3}`
        })
    }

    sendData = async () => {
        console.log("Data Sent");
        this.addTotal();      
        await axios.post('api/insert-RMA', qs.stringify({
            Name: `${this.state.Name}`,
            ClassDay: `${this.state.ClassDay}`,
            ClassTime: `${this.state.ClassTime}`,
            Program: `${this.state.Program}`,
            Team: `${this.state.Team}`,
            Items: `${this.state.Items}`,
            AllIssue: `${this.state.AllIssue}`,
            AllIssueQuantity: `${this.state.AllIssueQuantity}`,
            AllIssueDescription: `${this.state.AllIssueDescription}`,
            Progress: `${this.state.Progress}`,
    }))
        .then((res) =>  {
            console.log(res.data)
            this.setState({Name: ""})
            this.setState({ClassDay: ""})
            this.setState({ClassTime: ""})
            this.setState({Program: ""})
            this.setState({Team: ""})
            this.setState({Items: 0})
            this.setState({AllIssue: ""})
            this.setState({AllIssueQuantity: ""})
            this.setState({AllIssueDescription: ""})

            this.setState({Issue: ""})
            this.setState({IssueQuantity: ""})
            this.setState({IssueDescription: ""})
            this.setState({Issue2: ""})
            this.setState({IssueQuantity2: ""})
            this.setState({IssueDescription2: ""})
            this.setState({Issue3: ""})
            this.setState({IssueQuantity3: ""})
            this.setState({IssueDescription3: ""})
            this.setState({Issue4: ""})
            this.setState({IssueQuantity4: ""})
            this.setState({IssueDescription4: ""})
            this.setState({Issue5: ""})
            this.setState({IssueQuantity5: ""})
            this.setState({IssueDescription5: ""})
        })
        console.log("Data Sent");
    }

    render(){

        return (
            <PageLayout>
                <div className="FullPage">
                    <div className="Title">RMA FORM</div>

                    <div className="InputBox">

                        <div className="leftbox">
                            <div className="personalInfo">
                                <div className="displayBox">
                                    <text className="PItext">Name</text>
                                    <input 
                                    name="Name"
                                    type="text" 
                                    placeholder="FULL NAME" 
                                    className="PIinput"
                                    value={this.state.Name}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="displayBox">
                                    <text className="PItext">Class Day</text>
                                    <input 
                                    name="ClassDay"
                                    type="text" 
                                    placeholder="DAY" 
                                    className="PIinput"
                                    value={this.state.ClassDay}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="displayBox">
                                    <text className="PItext">Class Time</text>
                                    <input 
                                    name="ClassTime"
                                    type="text" 
                                    placeholder="START TIME" 
                                    className="PIinput"
                                    value={this.state.ClassTime}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="displayBox">
                                    <text className="PItext">Program</text>
                                    <input 
                                    name="Program"
                                    type="text" 
                                    placeholder="VRC | VIQC" 
                                    className="PIinput"
                                    value={this.state.Program}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="displayBox">
                                    <text className="PItext">Team #</text>
                                    <input 
                                    name="Team"
                                    type="text" 
                                    placeholder="TEAM NAME" 
                                    className="PIinput"
                                    value={this.state.Team}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="displayBox">
                                    <text className="PItext">Total # of Items</text>
                                    <input 
                                    name="Items"
                                    type="number" 
                                    placeholder="" 
                                    className="PIinput"
                                    value={this.state.Items}
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className="rightbox">
                            <div className="issues">
                                <div className="issueBox">
                                    <div className="issueTitleBox">
                                        <text className="issueTitle">ISSUE</text>
                                        <input
                                        name="Issue"
                                        className="issueInput"
                                        value={this.state.Issue}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueNumBox">
                                        <text className="issueTitle">#</text>
                                        <input 
                                        name="IssueQuantity"
                                        type="number"
                                        placeholder="Quantity" 
                                        className="issueInput"
                                        value={this.state.IssueQuantity}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueDescripBox">
                                        <text className="issueTitle">Description</text>
                                        <input 
                                        name="IssueDescription"
                                        className="issueInput"
                                        value={this.state.IssueDescription}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className="issueBox">
                                    <div className="issueTitleBox">
                                        <text className="issueTitle">ISSUE</text>
                                        <input 
                                        name="Issue2"
                                        className="issueInput"
                                        value={this.state.Issue2}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueNumBox">
                                        <text className="issueTitle">#</text>
                                        <input 
                                        name="IssueQuantity2"
                                        type="number" 
                                        placeholder="Quantity" 
                                        className="issueInput"
                                        value={this.state.IssueQuantity2}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueDescripBox">
                                        <text className="issueTitle">Description</text>
                                        <input 
                                        name="IssueDescription2"
                                        className="issueInput"
                                        value={this.state.IssueDescription2}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className="issueBox">
                                    <div className="issueTitleBox">
                                        <text className="issueTitle">ISSUE</text>
                                        <input 
                                        name="Issue3"
                                        className="issueInput"
                                        value={this.state.Issue3}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueNumBox">
                                        <text className="issueTitle">#</text>
                                        <input 
                                        name="IssueQuantity3"
                                        type="number" 
                                        placeholder="Quantity" 
                                        className="issueInput"
                                        value={this.state.IssueQuantity3}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueDescripBox">
                                        <text className="issueTitle">Description</text>
                                        <input 
                                        name="IssueDescription3"
                                        className="issueInput"
                                        value={this.state.IssueDescription3}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className="issueBox">
                                    <div className="issueTitleBox">
                                        <text className="issueTitle">ISSUE</text>
                                        <input 
                                        name="Issue4"
                                        className="issueInput"
                                        value={this.state.Issue4}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueNumBox">
                                        <text className="issueTitle">#</text>
                                        <input 
                                        name="IssueQuantity4"
                                        type="number" 
                                        placeholder="Quantity" 
                                        className="issueInput"
                                        value={this.state.IssueQuantity4}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueDescripBox">
                                        <text className="issueTitle">Description</text>
                                        <input 
                                        name="IssueDescription4"
                                        className="issueInput"
                                        value={this.state.IssueDescription4}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className="issueBox">
                                    <div className="issueTitleBox">
                                        <text className="issueTitle">ISSUE</text>
                                        <input 
                                        name="Issue5"
                                        className="issueInput"
                                        value={this.state.Issue5}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueNumBox">
                                        <text className="issueTitle">#</text>
                                        <input 
                                        name="IssueQuantity5"
                                        type="number" 
                                        placeholder="Quantity" 
                                        className="issueInput"
                                        value={this.state.IssueQuantity5}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="issueDescripBox">
                                        <text className="issueTitle">Description</text>
                                        <input 
                                        name="IssueDescription5"
                                        className="issueInput"
                                        value={this.state.IssueDescription5}
                                        onChange={this.handleChange}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="InfoBox">
                        <button 
                        className="submitButton"
                        onClick={this.sendData}
                        >Submit</button>
                    </div>

                </div>
            </PageLayout>
        )

    }

}

export default RMA;