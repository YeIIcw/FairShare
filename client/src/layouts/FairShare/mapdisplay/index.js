import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";

function MapDisplay(){
    return(
        <PageLayout>
            <div>
                <h1>MapDisplay</h1>
                <div class="width-default-wider bordered-image mb-10">
                    <iframe src="https://apidocs.geoapify.com/demo/routing?hideHeader=true" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="100%" height="500px" frameborder="0">Iframes not supported
                    </iframe>
                </div>
                <a href="/profile"><button>Back</button></a>
            </div>
        </PageLayout>
    )
}
export default MapDisplay;