import React from "react";
import Button from "react-bootstrap/Button";

function WelcomePage() {
  // assigning the username to a variable
  const name = "Sabisa";

  /**
   * Creating an alert to alert the user they have logged out
   */
  const logOutAlert = () => {
    alert("You have logged out");
  };
  return (
    <div className="welcome text-center">
      {/* rendering the name variable */}
      <p className="pt-5">Welcome to our page {name} </p>

      {/*calling the logOutAlert function onlick of log out button */}
      <Button onClick={logOutAlert} variant="dark">
        Logout
      </Button>
    </div>
  );
}

export default WelcomePage;
