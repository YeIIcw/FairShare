import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";
import Profile from "../profile";
import HomePage from "../home";
import { Route, Routes } from "react-router-dom";

function Signup(){



    return(
        <PageLayout>
            <div>
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
            <form action="/profile">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button  type="submit">Register</button>
                </p>
            </form>

        </div>
                
        </PageLayout>
    )
}
export default Signup;