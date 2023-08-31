import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  console.log("lll", location);
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" replace state={{ to: location }} />
  );
};
export default PrivateRoute;
