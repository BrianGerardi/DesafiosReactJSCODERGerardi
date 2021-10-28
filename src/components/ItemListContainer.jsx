import React from "react";

const ItemListContainer = function ({ greeting }) {
  return (
    <div>
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
