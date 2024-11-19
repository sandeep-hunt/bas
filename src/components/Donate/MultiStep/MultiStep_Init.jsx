import React, { useState } from 'react';
import Donation_FirstStep from './Donation_FirstStep';
import Donation_SecondStep from './Donation_SecondStep';
import Donation_ThirdStep from './Donation_ThirdStep';
import axios from 'axios';
import Donation_verifying from './Donation_verifying';
import Donation_success from './Donation_success';
import Donation_failed from './Donation_failed';

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
        const donationAmtPattern = /^\d+$/;

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
            if (!formData.donation_amt || !donationAmtPattern.test(formData.donation_amt) || parseInt(formData.donation_amt) < 1001) {
                newErrors.donation_amt = 'Please enter a donation amount of at least ₹1001.';
            }
            if (!formData.donation_freq) {
                newErrors.donation_freq = 'Please select a donation frequency.';
            }
        }

        setErrors(newErrors);
        return newErrors;
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const nextStep = () => {
        const fieldErrors = validateFields();
        if (Object.keys(fieldErrors).length === 0) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const submitForm = async () => {
        const fieldErrors = validateFields();
        setLoading(true);
        if (Object.keys(fieldErrors).length === 0) {
            try {
                const donateResponse = await axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/donate-now`, { ...formData });
                const { orderId, receiptId } = donateResponse.data;
    
                const res = await loadRazorpayScript();
                if (!res) {
                    alert('Razorpay SDK failed to load');
                    return;
                }
    
                const options = {
                    key: import.meta.env.VITE_RAZARPAY_KEY_ID,
                    amount: formData.donation_amt * 100,
                    currency: 'INR',
                    name: 'Donation',
                    description: 'Make a donation',
                    order_id: orderId,
                    image: 'https://your-site-logo.com/logo.png',
                    handler: async function (response) {
                        setStep(4); // Move to verifying step
                        try {
                            const verifyResponse = await axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/donation/verify-payment`, {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                receiptId,
                                email: formData.email,
                            });
                            setLoading(false);
                            setStep(verifyResponse.data.success ? 5 : 6); // Move to success or failed step
                        } catch (error) {
                            setLoading(false);
                            setStep(6); // Move to failed step
                        }
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.mobile,
                    },
                    notes: {
                        address: formData.address,
                    },
                    theme: {
                        color: '#F37254',
                    },
                };
    
                const paymentObject = new window.Razorpay(options);
    
                paymentObject.on('payment.failed', async function (response) {
                    // Payment failure handling
                    try {
                        // Update backend with failure details
                        await axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/donation/verify-payment`, {
                            razorpay_order_id: response.error.metadata.order_id,
                            razorpay_payment_id: response.error.metadata.payment_id,
                            razorpay_signature: response.error.metadata.signature || '',
                            receiptId,
                            status: 'failed', // Optionally, send a specific failure status to backend
                        });
                        setLoading(false);
                        setStep(6); // Move to failed step
                    } catch (error) {
                        console.error('Error updating failed payment status:', error);
                        setLoading(false);
                        setStep(6); // Move to failed step
                    }
                });
    
                paymentObject.open();
            } catch (error) {
                setLoading(false);
                console.error('Error initiating payment:', error);
            }
        } else {
            setLoading(false);
            setErrors(fieldErrors);
        }
    };
    

    switch (step) {
        case 1:
            return <Donation_FirstStep formData={formData} setFormData={setFormData} nextStep={nextStep} errors={errors} />;
        case 2:
            return <Donation_SecondStep formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} errors={errors} />;
        case 3:
            return <Donation_ThirdStep formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} errors={errors} btnLoad={loading} />;
        case 4:
            return <Donation_verifying />;
        case 5:
            return <Donation_success />;
        case 6:
            return <Donation_failed />;
        default:
            return <div>Error: Unknown step</div>;
    }
};

export default MultiStep_Init;