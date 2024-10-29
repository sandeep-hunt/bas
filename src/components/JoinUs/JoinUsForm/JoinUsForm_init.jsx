import React, { useState } from 'react'
import JoinUsForm_First from './JoinUsForm_First'
import JoinUsForm_Second from './JoinUsForm_Second';

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

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);
    const submitForm = () => {
        alert('Form submitted!');
        console.log(formData);
    };

    switch (step) {
        case 1:
            return <JoinUsForm_First formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <JoinUsForm_Second formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} />
        default:
            return <div>Error: Unknown step</div>;
    }
}

export default JoinUsForm_init