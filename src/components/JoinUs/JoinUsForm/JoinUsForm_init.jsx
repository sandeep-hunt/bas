import React, { useState } from 'react'
import JoinUsForm_First from './JoinUsForm_First'
import JoinUsForm_Second from './JoinUsForm_Second';
import axios from 'axios';

const JoinUsForm_init = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        age: '',
        gender: '',
        member_type: '',
        state: '',
        city: '',
        address: '',
        pincode: '',
    });

    const [errors, setErrors] = useState({}); // Error messages for validation

    const validateFields = () => {
        const newErrors = {};
        const namePattern = /^[A-Za-z\s]{2,}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const agePattern = /^[1-9][0-9]{0,2}$/; // Positive integer (1-3 digits)
        const mobilePattern = /^\d{10,15}$/; // Mobile number (10-15 digits)
        const stateCityPattern = /^[A-Za-z\s]+$/; // Letters and spaces only
        const pincodePattern = /^\d{5,6}$/; // 5 or 6 digits

        if (step === 1) {
            if (!formData.name || !namePattern.test(formData.name)) {
                newErrors.name = 'Name should contain only letters and be at least 2 characters long.';
            }
            if (!formData.email || !emailPattern.test(formData.email)) {
                newErrors.email = 'Enter a valid email address.';
            }
            if (!formData.age || !agePattern.test(formData.age)) {
                newErrors.age = 'Enter a valid age.';
            }
            if (!formData.mobile || !mobilePattern.test(formData.mobile)) {
                newErrors.mobile = 'Enter a valid mobile number with 10-15 digits.';
            }
            if (!formData.gender) {
                newErrors.gender = 'Please select a gender.';
            }
            if (!formData.member_type) {
                newErrors.member_type = 'Please select a member type.';
            }
        } else if (step === 2) {
            if (!formData.state || !stateCityPattern.test(formData.state)) {
                newErrors.state = 'State should contain only letters.';
            }
            if (!formData.city || !stateCityPattern.test(formData.city)) {
                newErrors.city = 'City should contain only letters.';
            }
            if (!formData.address || formData.address.length < 5) {
                newErrors.address = 'Address must be at least 5 characters long.';
            }
            if (!formData.pincode || !pincodePattern.test(formData.pincode)) {
                newErrors.pincode = 'Pincode should be exactly 5 or 6 digits.';
            }
        }

        return newErrors;
    };

    const nextStep = () => {
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length === 0) {
            setStep((prevStep) => prevStep + 1); // Proceed to the next step
            setErrors({}); // Clear errors if moving to the next step
        } else {
            setErrors(fieldErrors); // Set errors if validation fails
        }
    };

    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const submitForm = async () => {
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length === 0) {
            try {
                // Send form data to the backend
                const response = await axios.post(import.meta.env.VITE_BACKEND_API + 'fetch/register', formData);
                alert(response.data.message);  // Success message
            } catch (error) {
                console.error('Error:', error);
            }
        }
        else {
            setErrors(fieldErrors);
        }
    };

    switch (step) {
        case 1:
            return <JoinUsForm_First formData={formData} setFormData={setFormData} nextStep={nextStep} errors={errors} />;
        case 2:
            return <JoinUsForm_Second formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} errors={errors} />
        default:
            return <div>Error: Unknown step</div>;
    }
}

export default JoinUsForm_init