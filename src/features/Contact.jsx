import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      alert(`Thank you ${values.name}, we will contact you soon!`);
      resetForm();
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "450px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          📩 Contact Us
        </h2>

        
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            {...formik.getFieldProps("name")}
            style={{ width: "100%", padding: "10px" }}
          />
          {formik.touched.name && formik.errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.name}
            </p>
          )}
        </div>

        
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
            style={{ width: "100%", padding: "10px" }}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.email}
            </p>
          )}
        </div>

      
        <div style={{ marginBottom: "15px" }}>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            {...formik.getFieldProps("message")}
            style={{ width: "100%", padding: "10px" }}
          />
          {formik.touched.message && formik.errors.message && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff6b35",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
