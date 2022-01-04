import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigation, Home, Fitness, Piani, Blog, Posts, Post, Footer} from "./components";


ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/fitness`} element={<Fitness />} />
            <Route path={`${process.env.PUBLIC_URL}/piani`} element={<Piani />} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
    </Router>,

    document.getElementById("root")
);

reportWebVitals();
