import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80"
        alt="pizza"
      />
      <button
        className="masterpiece-button"
        onClick={() => history.push("./Components/Form")}
      >
        Create Your Masterpiece
      </button>
    </div>
  );
};
export default Home;
