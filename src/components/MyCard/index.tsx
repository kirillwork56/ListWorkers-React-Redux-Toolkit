import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonI } from "types/PersonI";

const MyCard: FC<PersonI> = ({
  country,
  email,
  experience,
  jobTitle,
  name,
  id,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{jobTitle}</Card.Subtitle>
        Profile:
        <ul>
          <li>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>Work experience: {experience} years</li>
          <li>Country: {country}</li>
        </ul>
        <Link to={`/profile/${id}`}>All information</Link>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
