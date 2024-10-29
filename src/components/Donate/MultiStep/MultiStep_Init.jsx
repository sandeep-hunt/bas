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

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);
    const submitForm = () => {
        alert('Form submitted!');
        console.log(formData);
    };

    switch (step) {
        case 1:
            return <Donation_FirstStep formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <Donation_SecondStep formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
        case 3:
            return <Donation_ThirdStep  formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} />
        default:
            return <div>Error: Unknown step</div>;
    }
}

export default MultiStep_Init