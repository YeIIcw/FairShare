import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";

function SurplusForm(){

    function successful(){
        alert("Item submitted successful!");
    }

    return(
        <PageLayout>
            <div>
                <h1>SurplusForm</h1>
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
                    <label>From</label><br/>
                    <input type="text" name="From_place" requiredc />
                </p>
                <p>
                    <label>To</label><br/>
                    <input type="text" name="To_place" requiredc />
                </p>
                <p>
                    <label>Date</label><br/>
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
export default SurplusForm;