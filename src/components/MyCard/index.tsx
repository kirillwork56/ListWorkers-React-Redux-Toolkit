import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { PersonI } from "types/PersonI";

const MyCard: FC<PersonI> = ({
  country,
  email,
  experience,
  jobTitle,
  name,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{jobTitle}</Card.Subtitle>
        <Card.Text>
          Profile:
          <ul>
            <li>Email: {email}</li>
            <li>Work experience: {experience} years</li>
            <li>Country: {country}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
