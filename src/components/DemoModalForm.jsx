"use client";

import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Button,
  OutlinedInput,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";
import DemoFormIcon from '../../public/DemoFormIcon.svg'
import Image from "next/image";

const DemoModalForm = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("contactNo", data.contactNo);
      formData.append("schoolName", data.schoolName);
      formData.append("email", data.email);

      const response = await axios.post(
        "https://www.auth.edu2all.in/sch/request/create",
        formData
      );

      if (response?.data?.status === "success") {
        setSnackbar({
          open: true,
          message: response.data.message,
          severity: "success",
        });
        setTimeout(() => {
          reset();
        }, 2000);
        setSuccess(true);
      } else {
        setSnackbar({
          open: true,
          message: response?.data?.message || "Error occurred",
          severity: "error",
        });
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  const handleClose = () => {
    reset();
    setSuccess(false);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {!success ? (
          <Box p={4} sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Image
                src={DemoFormIcon}
                alt="Get in Touch"
                width={30}
                height={30}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#F28F53", fontSize: "18px" }}
              >
                GET IN TOUCH
              </Typography>
            </Box>
            <Typography
              sx={{
                mb: 3,
                mt: 1,
                fontWeight: 700,
                fontSize: { xs: "30px", sm: "40px" },
                color: "#04857A",
              }}
            >
              Book A Free Demo
            </Typography>

            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <OutlinedInput
                id="name"
                type="text"
                placeholder="Enter Name"
                {...register("name", {
                  required: "This Field is required",
                  validate: {
                    minLength: (value) =>
                      value.length >= 4 || "Minimum Length is 4",
                    pattern: (value) =>
                      /^[a-zA-Z\s]+$/.test(value) ||
                      "Name must contain only letters, and spaces",
                  },
                })}
                fullWidth
                error={Boolean(errors.name)}
                sx={{ backgroundColor: "white", mb: 1 }}
              />
              {errors.name && (
                <Typography variant="caption" color="error" sx={{ mb: 2 }}>
                  {errors.name.message}
                </Typography>
              )}

              <OutlinedInput
                id="email"
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "This Field is required",
                  validate: {
                    pattern: (value) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        value
                      ) || "Not a valid email format",
                  },
                })}
                fullWidth
                error={Boolean(errors.email)}
                sx={{ backgroundColor: "white", mb: 1 }}
              />
              {errors.email && (
                <Typography variant="caption" color="error" sx={{ mb: 2 }}>
                  {errors.email.message}
                </Typography>
              )}

              <OutlinedInput
                id="contactNo"
                type="text"
                placeholder="Enter Contact No"
                {...register("contactNo", {
                  required: "This field is required",
                  validate: {
                    maxLength: (value) =>
                      value.length === 10 ||
                      "Contact number must be exactly 10 digits",
                    pattern: (value) =>
                      /^[6-9]\d{9}$/.test(value) ||
                      "Contact number must be valid 10-digit number",
                  },
                })}
                fullWidth
                error={Boolean(errors.contactNo)}
                sx={{ backgroundColor: "white", mb: 1 }}
              />
              {errors.contactNo && (
                <Typography variant="caption" color="error" sx={{ mb: 2 }}>
                  {errors.contactNo.message}
                </Typography>
              )}

              <OutlinedInput
                id="schoolName"
                type="text"
                placeholder="Enter School Name"
                {...register("schoolName", {
                  required: "This Field is required",
                  validate: {
                    minLength: (value) =>
                      value.length >= 4 || "Minimum Length is 4",
                    pattern: (value) =>
                      /^[a-zA-Z\s]+$/.test(value) ||
                      "Name must contain only letters, and spaces",
                  },
                })}
                fullWidth
                error={Boolean(errors.schoolName)}
                sx={{ backgroundColor: "white", mb: 1 }}
              />
              {errors.schoolName && (
                <Typography variant="caption" color="error">
                  {errors.schoolName.message}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1,
                  backgroundColor: "#E38C53",
                  color: "white",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "#d07c46" },
                  maxWidth: "150px",
                }}
              >
                SUBMIT NOW
              </Button>
            </form>
          </Box>
        ) : (
          <DialogContent sx={{ textAlign: "center", py: 5 }}>
            <Image
              src={DemoFormIcon}
              alt="Thumbs Up"
              width={100}
              height={100}
            />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              You Have Been <strong>Successfully Registered</strong>
            </Typography>
            <Typography mt={1}>
              For the demo software. Our executive will contact you soon.
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#D38149" }}
              onClick={handleClose}
            >
              CONTINUE
            </Button>
          </DialogContent>
        )}
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          variant="filled"
          severity={snackbar.severity}
          sx={{ width: "100%", color: "#fff" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DemoModalForm;
