
import React, { useState } from 'react';
import './Registration.css';

export default function Registration() {

    // 1. Store form data
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobilenumber: "",
        password: "",
        confirmpassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
    });

    // 2. Store errors
    const [errors, setErrors] = useState({});

    // 3. Store success message
    const [success, setSuccess] = useState("");

    // 4. Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });

        setSuccess("");
    };

    // 5. Validate form
    const validateForm = () => {

        let newErrors = {};

        // First Name
        if (!formData.firstname.trim()) {
            newErrors.firstname = "First name is required";
        }
        else if (!/^[a-zA-Z]+$/.test(formData.firstname)) {
            newErrors.firstname = "Enter a valid first name";
        }

        // Last Name
        if (!formData.lastname.trim()) {
            newErrors.lastname = "Last name is required";
        }
        else if (!/^[a-zA-Z]+$/.test(formData.lastname)) {
            newErrors.lastname = "Enter a valid last name";
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        // Mobile Number
        if (!formData.mobilenumber.trim()) {
            newErrors.mobilenumber = "Mobile number is required";
        }
        else if (!/^[6-9]\d{9}$/.test(formData.mobilenumber)) {
            newErrors.mobilenumber = "Enter a valid 10-digit mobile number";
        }

        // Password
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        }
        else if (formData.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters";
        }

        // Confirm Password
        if (!formData.confirmpassword.trim()) {
            newErrors.confirmpassword = "Confirm password is required";
        }
        else if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "Passwords do not match";
        }

        // Date of Birth
        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        }
        else if (new Date(formData.dob) > new Date()) {
            newErrors.dob = "Date of birth cannot be in the future";
        }

        // Gender
        if (!formData.gender) {
            newErrors.gender = "Please select your gender";
        }

        // Address
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        // City
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // 6. Handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateForm()) {

            setSuccess("Registration Successful! Welcome.");

            console.log("Registration Details:", formData);
        }
    };

    // 7. Reset form
    const handleReset = () => {

        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            mobilenumber: "",
            password: "",
            confirmpassword: "",
            dob: "",
            gender: "",
            address: "",
            city: ""
        });

        setErrors({});
        setSuccess("");
    };

    // 8. Return JSX
    return (

        <div className="registration-container">

            <div className="registration-card">

                <h2>Create Account</h2>

                <p className="subtitle">
                    Please fill your details to register
                </p>

                <form onSubmit={handleSubmit} noValidate>

                    <div className="form-grid">

                        {/* First Name */}
                        <div className="form-group">
                            <label>First Name</label>

                            <input
                                type="text"
                                name="firstname"
                                placeholder="Enter first name"
                                value={formData.firstname}
                                onChange={handleChange}
                            />

                            {errors.firstname && (
                                <p className="error">{errors.firstname}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="form-group">
                            <label>Last Name</label>

                            <input
                                type="text"
                                name="lastname"
                                placeholder="Enter last name"
                                value={formData.lastname}
                                onChange={handleChange}
                            />

                            {errors.lastname && (
                                <p className="error">{errors.lastname}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {errors.email && (
                                <p className="error">{errors.email}</p>
                            )}
                        </div>

                        {/* Mobile */}
                        <div className="form-group">
                            <label>Mobile Number</label>

                            <input
                                type="tel"
                                name="mobilenumber"
                                placeholder="Enter 10-digit number"
                                value={formData.mobilenumber}
                                onChange={handleChange}
                            />

                            {errors.mobilenumber && (
                                <p className="error">{errors.mobilenumber}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label>Password</label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Minimum 8 characters"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            {errors.password && (
                                <p className="error">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="form-group">
                            <label>Confirm Password</label>

                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Re-enter password"
                                value={formData.confirmpassword}
                                onChange={handleChange}
                            />

                            {errors.confirmpassword && (
                                <p className="error">{errors.confirmpassword}</p>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div className="form-group">
                            <label>Date of Birth</label>

                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                max={new Date().toISOString().split("T")[0]}
                            />

                            {errors.dob && (
                                <p className="error">{errors.dob}</p>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="form-group">
                            <label>Gender</label>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>

                            {errors.gender && (
                                <p className="error">{errors.gender}</p>
                            )}
                        </div>

                        {/* Address */}
                        <div className="form-group full-width">
                            <label>Address</label>

                            <textarea
                                name="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                            />

                            {errors.address && (
                                <p className="error">{errors.address}</p>
                            )}
                        </div>

                        {/* City */}
                        <div className="form-group full-width">
                            <label>City</label>

                            <input
                                type="text"
                                name="city"
                                placeholder="Enter your city"
                                value={formData.city}
                                onChange={handleChange}
                            />

                            {errors.city && (
                                <p className="error">{errors.city}</p>
                            )}
                        </div>

                    </div>

                    {/* Success Message */}
                    {success && (
                        <p className="success">{success}</p>
                    )}

                    {/* Buttons */}
                    <div className="button-group">

                        <button type="submit" className="submit-btn">
                            Register
                        </button>

                        <button
                            type="button"
                            className="reset-btn"
                            onClick={handleReset}
                        >
                            Reset
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
