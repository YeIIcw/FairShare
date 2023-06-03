import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";

function Signup(){
    return(
        <PageLayout>
            <h1>Signup</h1>
            
            <form action="process-signup.php" method="post" id="signup" novalidate>
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"></input>
                </div>
                
                <div>
                    <label for="email">email</label>
                    <input type="email" id="email" name="email"></input>
                </div>
                
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                
                <div>
                    <label for="password_confirmation">Repeat password</label>
                    <input type="password" id="password_confirmation" name="password_confirmation"></input>
                </div>
                
                <button>Sign up</button>
            </form>
                
        </PageLayout>
    )
}
export default Signup;