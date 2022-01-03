import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Cause = () => {
  const data = [{ name: "Raised", uv: 400, pv: 2400, amt: 2400},{ name: "Goal", uv: 300, pv: 200, amt: 100}];
  const [causes, setCauses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/causes")
      .then((res) => setCauses(res.data));
  }, []);
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={8}>
            {causes?.map((cause) => (
              <Col md={12} key={cause._id}>
                <div className="d-flex">
                  <div>
                    <img src={cause.image} alt="" />
                  </div>
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
                </div>
              </Col>
            ))}
          </Col>
          <Col md={4}>
            <BarChart width={500} height={300} data={data}>
              <XAxis dataKey="name" stroke="#eed8d2" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#eed8d2" strokeDasharray="10 5" />
              <Bar dataKey="uv" fill="#eed8d2" barSize={30} />
            </BarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cause;
