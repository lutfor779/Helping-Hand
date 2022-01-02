import React from "react";
import Loader from "react-loader-spinner";
const Loaders = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      style={{display: "flex", justifyContent:'center',alignItems: 'center',height:'100vh'}}
      timeout={3000} //3 secs
    />
  );
};

export default Loaders;
