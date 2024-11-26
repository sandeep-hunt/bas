import React, { useState } from 'react';
import JoinUsForm_First from './JoinUsForm_First';
import JoinUsForm_Second from './JoinUsForm_Second';
import JoinUsForm_Third from './JoinUsForm_Third';
import JoinUsForm_success from './JoinUsForm_success';
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
        aadhaarFile: null,
        panFile: null,
        resumeFile: null,  // Replaced 'photoFile' with 'resumeFile'
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};
        const namePattern = /^[A-Za-z\s]{2,}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const agePattern = /^[1-9][0-9]{0,2}$/;
        const mobilePattern = /^\d{10,15}$/;
        const stateCityPattern = /^[A-Za-z\s]+$/;
        const pincodePattern = /^\d{5,6}$/;

        const fileValidation = (file, allowedTypes) => {
            if (!file) return false;
            const fileType = file.type;
            return allowedTypes.includes(fileType);
        };

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
        } else if (step === 3) {
            const allowedImageAndPdfTypes = ['application/pdf', 'image/jpeg', 'image/png'];
            const allowedPdfOnlyTypes = ['application/pdf'];

            if (!formData.aadhaarFile || !fileValidation(formData.aadhaarFile, allowedImageAndPdfTypes)) {
                newErrors.aadhaarFile = 'Please upload a valid Aadhaar document (PDF, JPG, JPEG, or PNG).';
            }
            if (!formData.panFile || !fileValidation(formData.panFile, allowedImageAndPdfTypes)) {
                newErrors.panFile = 'Please upload a valid PAN document (PDF, JPG, JPEG, or PNG).';
            }
            if (!formData.resumeFile || !fileValidation(formData.resumeFile, allowedPdfOnlyTypes)) {  // Changed from 'photoFile' to 'resumeFile'
                newErrors.resumeFile = 'Please upload a valid Resume document (PDF only).';  // Changed from 'photoFile' to 'resumeFile'
            }
        }

        return newErrors;
    };

    const nextStep = async () => {
        const fieldErrors = validateFields();
        setLoading(true);
        if (Object.keys(fieldErrors).length === 0) {
            if (step === 1) {
                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_BACKEND_API}joinus/check-email`,
                        { email: formData.email }
                    );
                    if (response.data.exists) {
                        setErrors({ emailCheck: 'This email is already registered.' });
                        setLoading(false);
                    } else {
                        setStep((prevStep) => prevStep + 1);
                        setLoading(false);
                        setErrors({});
                    }
                } catch (error) {
                    setLoading(false);
                    console.error('Error:', error);
                }
            } else {
                setLoading(false);
                setStep((prevStep) => prevStep + 1);
                setErrors({});
            }
        } else {
            setLoading(false);
            setErrors(fieldErrors);
        }
    };

    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const submitForm = async () => {
        const fieldErrors = validateFields();
        setLoading(true);
        if (Object.keys(fieldErrors).length === 0) {
            try {
                const formDataToSubmit = new FormData();
                for (const key in formData) {
                    if (formData[key] instanceof File) {
                        formDataToSubmit.append(key, formData[key]);
                    } else {
                        formDataToSubmit.append(key, formData[key]);
                    }
                }

                const response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_API}fetch/register`,
                    formDataToSubmit,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    }
                );
                setLoading(false);
                setStep((prevStep) => prevStep + 1);
            } catch (error) {
                setLoading(false);
                console.error('Error:', error);
            }
        } else {
            setErrors(fieldErrors);
            setLoading(false);
        }
    };

    switch (step) {
        case 1:
            return <JoinUsForm_First formData={formData} setFormData={setFormData} nextStep={nextStep} errors={errors} btnLoad={loading} />;
        case 2:
            return <JoinUsForm_Second formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} errors={errors} />;
        case 3:
            return (
                <JoinUsForm_Third formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} errors={errors} btnLoad={loading} />
            );
        case 4:
            return <JoinUsForm_success formData={formData} />;
        default:
            return <div>Error: Unknown step</div>;
    }
};

export default JoinUsForm_init;
