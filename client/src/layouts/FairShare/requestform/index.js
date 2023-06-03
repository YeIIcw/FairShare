import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";

function RequestForm(){

    function successful(){
        alert("Item requested successful!");
    }

    return(
        <PageLayout>
            <div>
                <h1>Request Form</h1>
                <form action="/profile">
                <p>
                    <label>Item</label><br/>
                    <input type="text" name="Item" required />
                </p>
                <p>
                    <label>Type</label><br/>
                    <input type="text" name="Type" required />
                </p>
                <p>
                    <label>Quantity</label><br/>
                    <input type="number" name="Quantity" required />
                </p>
                <p>
                    <label>Location</label><br/>
                    <input type="text" name="To_place" requiredc />
                </p>
                <p>
                    <label>Urgency</label><br/>
                    <input type="text" name="Date" requiredc />
                </p>
                <p>
                    <button  type="submit" onClick={successful}>Submit</button>
                </p>
            </form>
            </div>
        </PageLayout>
    )
}
export default RequestForm;