import React, { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
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

  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = React.useState();
  const [event, setEvent] = useState({});
  const [isJoin, setIsJoin] = useState([]);

  useEffect(() => {
    fetch(`https://serene-bastion-42312.herokuapp.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);


  //  joining in an events
  const eventTitle = [event.title];

  const handleJoining = () => {

    fetch(`https://serene-bastion-42312.herokuapp.com/join/${user?.email}`, {

      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventTitle)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          alert('Join  Successfully');

        }
      })
  }

  // checking already joined in this event
  useEffect(() => {
    fetch(`https://serene-bastion-42312.herokuapp.com/joinedEvents/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const x = data?.events?.filter(y => y === event?.title)
        setIsJoin(x)
      });
  }, [user?.email, event?.title]);


  const onSubmit = (e, data) => {
    console.log(data);
    data["rating"] = rating;
    const image = event.image;
    data.image = image;
    axios
      .post("https://serene-bastion-42312.herokuapp.com/feedback", data)
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

                {isJoin?.length !== 0 && <Button variant="success " onClick={handleJoining}>Join in this event as volunteer</Button>}
                {isJoin?.length === 0 && <h3 >You Already joined</h3>}




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