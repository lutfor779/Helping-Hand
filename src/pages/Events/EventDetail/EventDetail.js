import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import swal from "sweetalert";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const EventDetail = () => {
  const { id } = useParams();

  const [event, setEvent] = useState({}); //use redux for store data

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = React.useState();


  //  joining in an events
  const handleJoining = () => {

  }
  const onSubmit = (data) => {

    console.log(data);
    data["rating"] = rating;
    const image = event.image;
    data.image = image;
    axios
      .post("http://localhost:5000/feedback", data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Good job!", "Feedback Added", "success");
        }
        reset();
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      });
  };
  // console.log(event);

  return (
    <>
      <Header />
      <div className="event-details py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="single-details">
                {/* <h5>Event Detail of {id}</h1> */}
                <h1> {event.title}</h1>
                <img src={event.image} className="img-fluid" alt="" />
                <h6 className="mt-3"> Event Date: {event.date}</h6>
                <button onClick={handleJoining}>Join in this event as volunteer</button>


                <div className="feedback area mt-3">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="theme-color">Give a Feedback</Accordion.Header>
                      <Accordion.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input
                            className="form-control mb-3"
                            defaultValue={user.displayName}
                            {...register("name")}
                            placeholder="Your Name"
                          />
                          <input
                            className="form-control mb-3"
                            defaultValue={event.title}
                            {...register("eventName")}
                            placeholder="Event Name"
                          />
                          <textarea
                            className="form-control mb-3"
                            style={{ height: "150px" }}
                            {...register("feedback")}
                            placeholder="Feedback"
                          />
                          <div className="flex flex-col mb-3">
                            <p className="text-gray-600 font-primary">
                              Give a rating*
                            </p>
                            <Rating
                              onChange={(rate) => setRating(rate)}
                              emptySymbol={<FaRegStar />}
                              fullSymbol={<FaStar />}
                            />
                          </div>
                          <input
                            className="btn theme-bg text-white px-4"
                            type="submit"
                            value="Submit Feedback"
                          />
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EventDetail;