import React, { useState } from 'react';
import Donation_FirstStep from './Donation_FirstStep'
import Donation_SecondStep from './Donation_SecondStep';
import Donation_ThirdStep from './Donation_ThirdStep';

const MultiStep_Init = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        age: '',
        gender: '',
        state: '',
        city: '',
        address: '',
        pincode: '',
        donation_type: '',
        donation_amt: '',
        donation_freq: '',
    });

    const [errors, setErrors] = useState({}); // Error messages for validation

    const validateFields = () => {
        const newErrors = {};
        const namePattern = /^[A-Za-z\s]{2,}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const agePattern = /^[1-9][0-9]{0,2}$/; 
        const mobilePattern = /^\d{10,15}$/; 
        const stateCityPattern = /^[A-Za-z\s]+$/; 
        const pincodePattern = /^\d{5,6}$/;
        const donationAmtPattern = /^\d{1}/;
    
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
            if (!formData.donation_type) {
                newErrors.donation_type = 'Please select a donation type.';
            }
            if (!formData.donation_amt || !donationAmtPattern.test(formData.donation_amt)) {
                newErrors.donation_amt = 'Please enter a donation amount.';
            }
            if (!formData.donation_freq) {
                newErrors.donation_freq = 'Please select a donation frequency.';
            }
        }
    
        // Update errors state
        setErrors(newErrors);
        return newErrors;
    };
    
    const nextStep = () => {
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length === 0) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => setStep((prevStep) => prevStep - 1);
    const submitForm = () => {
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length === 0) {
            alert('form submitted');
        }
        else {
            setErrors(fieldErrors);
        }
    };

    switch (step) {
        case 1:
            return <Donation_FirstStep formData={formData} setFormData={setFormData} nextStep={nextStep} errors={errors} />;
        case 2:
            return <Donation_SecondStep formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} errors={errors} />
        case 3:
            return <Donation_ThirdStep formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} errors={errors} />
        default:
            return <div>Error: Unknown step</div>;
    }
}

export default MultiStep_Init