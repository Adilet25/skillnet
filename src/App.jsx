import React from "react";
import MainRoutes from "./MainRoutes";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
};

export default App;
