import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";

function Reciever(){
    return(
        <PageLayout>
            <div>
                <h1>Profile</h1>
                <div>Company name</div>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>From</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Cereal</td>
                        <td>10</td>
                        <td>TBD</td>
                        <td>Processing</td>
                    </tr>
                    <tr>
                        <td>Jam</td>
                        <td>30</td>
                        <td>Indens Gourmet</td>
                        <td>Delivering</td>
                    </tr>
                </table>
                <a href="/surplusform"><button>Submit an Item</button></a>
                <a href="/mapdisplay"><button>Check Delivery</button></a>
                <a href="/foodlist"><button>Check Food</button></a>
                <a href="/"><button>Logout</button></a>
            </div>
        </PageLayout>
    )
}
export default Reciever;