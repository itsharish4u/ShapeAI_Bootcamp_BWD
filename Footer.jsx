import React from "react";

function  Footer() {
    var currentyear = new Date().getFullYear();
  return (
    <footer>
       <p>Copyrights All Reserved @ {currentyear}</p>
    </footer>
  );
}

export default Footer;