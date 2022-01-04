import React from 'react';
import axios from "axios";
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddCauses = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    axios
      .post("https://serene-bastion-42312.herokuapp.com/causes", data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Good job!", "Causes Added", "success");
        }
        reset();
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      });
    console.log(data);
  };

  return (
    <Container>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6 bg-light p-5 w-sm-100  custom-shadow border rounded-3'>
          <h2 className='text-center text-danger fw-bold'>Add Causes</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Causes Title</label>
            <input
              {...register("title")}
              placeholder="title"
              className="form-control mb-3"
            />
            <label>Causes Date</label>
            <input
              {...register("date")}
              // placeholder="Name"
              type="date"
              className="form-control mb-3"
            />
            <label>Causes Description</label>
            <input
              {...register("description")}
              placeholder="Description"
              className="form-control mb-3"
            />
            <label>Causes Images</label>

            <input
              {...register("image", { required: true })}
              placeholder="Image Link"
              className="form-control mb-3"
            />

            <input type="submit" value="Add Causes" className="btn theme-bg text-white" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddCauses;