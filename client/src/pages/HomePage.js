import React from "react";
import Layout from "../components/Layout/Layout.js";
import { useAuth } from "../context/auth.js";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers"}>
      <h2>HomePage</h2>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};
export default HomePage;
