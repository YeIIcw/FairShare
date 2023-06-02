import React from "react";
import { useState } from "react";
import axios from 'axios';
import PageLayout from "examples/LayoutContainers/PageLayout";
import Sidebar from "../student_list/components/Sidebar";
import Slideshow from "./components/Slideshow";
import { SlideData } from "./components/SlideData";
import Homepage from "./components/Homepage"

function Home() {
    return (
        <PageLayout>
            <div>
                <Homepage/>
                <Slideshow SlideData={SlideData}/>
            </div>
        </PageLayout>
    )
}

export default Home;