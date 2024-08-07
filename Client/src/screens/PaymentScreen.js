import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer.js";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { savePaymentMethod } from "../actions/cartActions.js";

function PaymentScreen() {
  const cart = useSelector((state) => state.cart);

  const { access } = useSelector((state) => state.userLogin);

  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
    if (cart.paymentMethod) {
      setPaymentMethod(cart.paymentMethod);
    }
  }, [access, cart.paymentMethod, shippingAddress, navigate, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="paypal"
              name="paymentMethod"
              checked={paymentMethod === "PayPal"}
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button className="mt-3" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
