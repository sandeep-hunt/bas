import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';

export default function ProfileEdit() {

    const [userData, setUserData] = useState(() => {
        const stored = localStorage.getItem('userData');
        return stored ? JSON.parse(stored) : null;
    });

    const [formData, setFormData] = useState({
        id: userData?.user_id,
        username: userData?.user_name,
        email: userData?.email
    });

    const [isEdit, setEdit] = useState(false);


    useEffect(() => {
        if (userData) {
            setFormData({
                id: userData.user_id,
                username: userData.user_name,
                email: userData.email
            });
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setEdit(true);
    };

    // const updateLocalStorage = (newUserData) => {
    //     const updatedData = {
    //         ...userData,
    //         user_name: newUserData.username,
    //         email: newUserData.email
    //     };
    //     localStorage.setItem('userData', JSON.stringify(updatedData));
    //     setUserData(updatedData);
    // };

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.href = '/';
    };

    const validateForm = () => {
        // if (!formData.username || !formData.email) {
        //     alert('Username and email are required');
        //     return false;
        // }

        // if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        //     alert('Please enter a valid email address');
        //     return false;
        // }

        if (formData.username === userData?.user_name && 
            formData.email === userData?.email) {
            alert('No changes to update');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // setIsLoading(true);
        const token = localStorage.getItem('token');
        
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_API}update`, 
                formData, 
                {
                    headers: { 
                        Authorization: token,
                    }
                }
            );

            // updateLocalStorage(formData);
            alert(response?.data?.message || 'Profile updated successfully');
            handleLogout()


        } catch (error) {
            const errorMessage = error.response?.data?.message 
                || error.response?.data?.error 
                || 'An unexpected error occurred';
            alert(errorMessage);
            
        } 
    };

    // if (!userData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Container>
            <div className="bg-white border border-gray-500 w-full p-4 rounded shadow">
                <div className="text-lg font-semibold leading-5 mb-4">Profile Edit</div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Username<span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            value={formData.username || ''}
                                            onChange={handleChange}
                                            required
                                            // disabled={isLoading}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Email<span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email || ''}
                                            onChange={handleChange}
                                            required
                                            // disabled={isLoading}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Button 
                                        type="submit" 
                                        disabled={!isEdit}
                                    >
                                         Update
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}