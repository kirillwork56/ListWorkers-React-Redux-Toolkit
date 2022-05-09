import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "pages/ErrorPage";
import ListPage from "pages/ListPage";
import ProfilePage from "pages/ProfilePage";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface Props {}

const App: FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
