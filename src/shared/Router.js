import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;