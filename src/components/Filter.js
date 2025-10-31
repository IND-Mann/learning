import React from "react";

const Filter = (props) => {
  let filterData = props.FilterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        gap: "20px",
      }}
    >
      {filterData.map((item) => (
        <button
          style={{
            padding: "10px 20px",
            color: category === item.title ? "white" : "wheat",
            border: category === item.title ? "2px solid red" : "none",
            transition: "all",
            animationDuration: 200,
            backgroundColor: "black",
            opacity: category === item.title ? "0.5" : "0.3",
          }}
          key={item.id}
          onClick={() => filterHandler(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
