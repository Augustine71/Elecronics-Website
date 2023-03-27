import React, { useEffect, useState } from "react";
import { Shipped } from "./Shipped";
import { Delivered } from "./Delivered";
import { Delivering } from "./Delivering";

export const ShippingDetails = (props) => {
  console.log(props.orderDate);
  const dateString = props.orderDate;
  const formattedDate = new Date(dateString);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  let componentsToRender = [
    <Shipped address={props.orderAddress} orderDate={props.orderDate} />,
  ];

  const timeDiff = currentDate.getTime() - formattedDate.getTime();
  if (timeDiff >= 5 * 24 * 60 * 60 * 1000) {
    const newTime = formattedDate.getTime() + 5 * 24 * 60 * 60 * 1000;
    const newDate = new Date(newTime).toISOString().slice(0, 10);

    componentsToRender.push(<Delivering deliveryDate={newDate} />);
  }

  if (timeDiff >= 10 * 24 * 60 * 60 * 1000) {
    const newTime = formattedDate.getTime() + 10 * 24 * 60 * 60 * 1000;
    const newDate = new Date(newTime).toISOString().slice(0, 10);

    componentsToRender.push(<Delivered deliveryDate={newDate} />);
  }

  componentsToRender.reverse();

  return (
    <div className="shipping__details-container">{componentsToRender}</div>
  );
};
