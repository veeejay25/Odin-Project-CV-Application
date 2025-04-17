import React from "react";

function SectionContainer({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f5f4f1",
        borderRadius: "8px",
        padding: "4px 8px",
        marginTop: "8px 0 0 0",
        width: "780px",
      }}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
