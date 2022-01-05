import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Cause = () => {
  const data = [
    { name: "Raised", uv: 400, pv: 2400, amt: 2400 },
    { name: "Goal", uv: 300, pv: 200, amt: 100 },
  ];
  const [causes, setCauses] = useState([]);
  useEffect(() => {
    axios
      .get("https://serene-bastion-42312.herokuapp.com/causes")
      .then((res) => setCauses(res.data));
  }, []);
  return (
    <div className="py-5">
      <Container>
        <Row className="g-3">
          <Col md={8}>
            {causes?.map((cause) => (
              <Row key={cause._id} className="g-3 p-3">
                <Col md={6} lg={4}>
                  <img className="img-fluid" src={cause.image} alt="" />
                </Col>
                <Col md={6} lg={8}>
                  <div className="ms-3">
                    <h5>{cause.title}</h5>
                    <p className="mt-0 mb-0">
                      {cause.description.slice(0, 150)}
                    </p>
                    <p className="mt-0 mb-0">{cause.date}</p>
                    <Link to="/donation">
                      <button className="btn theme-bg text-white">
                        Donate Now
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>

          <Col md={4} className="p-5">
            <BarChart width={300} height={300} data={data} className="bg-light">
              <XAxis dataKey="name" stroke="#2f4158" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#2f4158" strokeDasharray="10 5" />
              <Bar dataKey="uv" fill="#f97762" barSize={30} />
            </BarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cause;
