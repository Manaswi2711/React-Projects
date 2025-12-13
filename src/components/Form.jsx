import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const [data, setData] = useState([]);

  const stuForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      age: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name required").min(4),
      lastname: Yup.string().required("Last Name required").min(4),
      password: Yup.string().required("Password required") .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
          "waste password"
        ),
      age: Yup.string().required("Age required").min(2)
      
    }),

    onSubmit: (values, { resetForm }) => {
      setData([...data, values]);
      resetForm();
      alert("From submitted");
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        className="border p-4 mb-4"
        style={{
          width: "380px",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <h3 className="text-center mb-3">Student Form</h3>

        <form onSubmit={stuForm.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="form-control mb-1"
            {...stuForm.getFieldProps("firstname")}
          />
          <small className="text-danger">
            {stuForm.touched.firstname && stuForm.errors.firstname}
          </small>

          <input
            type="text"
            placeholder="Last Name"
            className="form-control mb-1 mt-2"
            {...stuForm.getFieldProps("lastname")}
          />
          <small className="text-danger">
            {stuForm.touched.lastname && stuForm.errors.lastname}
          </small>

          <input
            type="text"  
            placeholder="Password"
            className="form-control mb-1 mt-2"
            {...stuForm.getFieldProps("password")}
          />
          <small className="text-danger">
            {stuForm.touched.password && stuForm.errors.password}
          </small>

          <input
            type="text"
            placeholder="Age"
            className="form-control mb-1 mt-2"
            {...stuForm.getFieldProps("age")}
          />
          <small className="text-danger">
            {stuForm.touched.age && stuForm.errors.age}
          </small>

          <button type="submit" className="btn btn-dark w-100 mt-3">
            Submit
          </button>
        </form>
      </div>

      {data.length > 0 && (
        <div
          className="border p-3"
          style={{
            width: "600px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <h4 className="text-center mb-3">Submitted Data</h4>

          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Password</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.password}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;
