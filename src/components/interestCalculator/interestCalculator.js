import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

// Creating an interest calculator for Lumi La Boutique shopping website.

/**
 * Calculating simple interest/non-compounding interest
 */
class InterestCalculator extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      principalAmount: 0,
      numberOfMonths: 0,
      monthlyPayment: 0,
      totalAmount: 0,
    };
    this.interestRate = 0.2;
  }

  /**
   * Calulating monthly payment
   */
  calculateMonthlyPayment = () => {
    const { principalAmount, numberOfMonths } = this.state;

    const totalAmount = principalAmount + principalAmount * this.interestRate;
    const monthlyPayment = totalAmount / numberOfMonths;

    // updating the state for totalAmount and monthlyPayment
    this.setState({ totalAmount, monthlyPayment });
  };

  /**
   * Handling the principal amount on input change
   * @param {React.ChangeEvent<HTMLInputElement> } e
   */
  handlePrincipalAmountChange = (e) => {
    // converting the principal amount to a float using parseFloat
    this.setState({ principalAmount: parseFloat(e.target.value) });
  };

  /**
   * Handling the number of months on input change
   * @param {React.ChangeEvent<HTMLInputElement> } e
   */
  handleNumberOfMonthsChange = (e) => {
    // converting the number of months to  float
    this.setState({ numberOfMonths: parseFloat(e.target.value) });
  };

  render() {
    return (
      // container for interest calculator
      <Container className="calculator-container px-5 py-4">
        {/* heading of the caluclator */}
        <h2 className="mb-5">Non-Compounding Interest Calculator</h2>
        <div className="initial-amount mb-3">
          {/* label and input field for principal amount */}
          <label>Principal Amount:</label>
          <input
            type="number"
            value={this.state.principalAmount}
            // setting the minimum value to zero
            min={0}
            // calling the handlePrincipalAmountChange on change of the principal value
            onChange={this.handlePrincipalAmountChange}
          />
        </div>

        <div className="numberOfMonths mb-3">
          {/* label and input field for number of months */}
          <label>Time (in months):</label>
          <input
            type="number"
            value={this.state.numberOfMonths}
            // setting the minimum value to zero
            min={0}
            // calling the handleNumberOfMonthsChange on change of the principal value
            onChange={this.handleNumberOfMonthsChange}
          />
        </div>

        <div className="principal-amount">
          {/* Button component for the button */}
          <Button
            //  calling calculateMonthlyPayment function onclick of this button
            onClick={this.calculateMonthlyPayment}
            className="btn btn-dark mb-3"
          >
            Calculate
          </Button>
          {/* displaying montly Payment */}
          <p className="mb-3">Monthly payment: R{this.state.monthlyPayment}</p>
          {/* displaying total Payment paid over all months */}
          <p>Total payment: R{this.state.totalAmount}</p>
        </div>
      </Container>
    );
  }
}

export default InterestCalculator;
