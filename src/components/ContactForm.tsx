'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import { useContactFormContext } from '@/contexts/ContactFormContext';

interface FormData {
    name: string;
    email: string;
    phone: string;
    countryCode: string;
    state: string;
}

interface SubmitMessage {
    text: string;
    isError: boolean;
}

interface ValidationErrors {
    name: string;
    email: string;
    phone: string;
    state: string;
}

const ContactForm = () => {
    const { isPopupOpen, setIsPopupOpen } = useContactFormContext();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        countryCode: 'INR(+91)',
        state: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<SubmitMessage>({ text: '', isError: false });
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [errors, setErrors] = useState<ValidationErrors>({
        name: '',
        email: '',
        phone: '',
        state: ''
    });

    // Show popup when user visits the site (after a small delay)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 0); // Shows popup after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    // Clear success message after timeout
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (submitMessage.text && !submitMessage.isError) {
            timer = setTimeout(() => {
                setSubmitMessage({ text: '', isError: false });
            }, 3000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [submitMessage]);

    // Validate form field
    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 3) return 'Name must be at least 3 characters';
                if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name should contain only letters';
                return '';
            
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
                return '';
            
            case 'phone':
                if (!value.trim()) return 'Phone number is required';
                if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) return 'Please enter a valid 10-digit phone number';
                return '';
            
            case 'state':
                if (!value) return 'Please select your state';
                return '';
            
            default:
                return '';
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Validate on change and update errors
        const errorMessage = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: errorMessage
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone),
            state: validateField('state', formData.state)
        };

        setErrors(newErrors);
        
        // Check if there are any errors
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>, isPopup = false) => {
        e.preventDefault();
        
        // First validate the form
        if (!validateForm()) {
            setSubmitMessage({ 
                text: 'Please fix the errors before submitting.', 
                isError: true 
            });
            return;
        }
        
        setIsSubmitting(true);
        setSubmitMessage({ text: '', isError: false });
        setShowConfirmation(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(`Failed to submit form: ${responseData.error || response.statusText}`);
            }

            // Form submitted successfully - clear form data
            setFormData({
                name: '',
                email: '',
                phone: '',
                countryCode: 'INR(+91)',
                state: ''
            });

            // Set success message based on where data was saved
            let successMessage = 'Form submitted successfully!';
            if (responseData.savedToSheets) {
                console.log("Data was saved to Google Sheets!");
            }

            setSubmitMessage({ text: successMessage, isError: false });

            // Show confirmation for non-popup form
            if (!isPopup) {
                setShowConfirmation(true);
                setTimeout(() => {
                    setShowConfirmation(false);
                    // Redirect after showing confirmation
                    window.location.href = "https://www.daiict.ac.in/undergraduate-admissions-all-india-category";
                }, 2000); // Reduced to 3 seconds before redirect
            }

            // Close popup form if needed
            if (isPopup) {
                setTimeout(() => {
                    setIsPopupOpen(false);
                    // Redirect after closing popup
                    window.location.href = "https://www.daiict.ac.in/undergraduate-admissions-all-india-category";
                }, 2000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitMessage({
                text: `Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`,
                isError: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderErrorMessage = (field: keyof ValidationErrors) => {
        return errors[field] ? (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
        ) : null;
    };

    return (
        <>
            {/* Popup Contact Form */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-md w-full relative animate-fade-in-up">
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            aria-label="Close popup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4 text-center">Apply Now</h2>

                            {submitMessage.text && (
                                <div className={`mb-4 p-3 rounded ${submitMessage.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {submitMessage.text}
                                </div>
                            )}

                            <form className="space-y-4" onSubmit={(e) => handleSubmit(e, true)}>
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Ramesh Sharma"
                                        className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    {renderErrorMessage('name')}
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="rameshsharma@gmail.com"
                                        className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    {renderErrorMessage('email')}
                                </div>

                                <div>
                                    <div className={`flex items-center border rounded-md overflow-hidden ${errors.phone ? 'border-red-500' : ''}`}>
                                        <select
                                            className="appearance-none bg-white p-3 text-gray-400 outline-none"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                        >
                                            <option>INR(+91)</option>
                                        </select>
                                        <span className="px-2 text-gray-500">|</span>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="12345 67890"
                                            className="w-full p-3 outline-none"
                                            required
                                        />
                                    </div>
                                    {renderErrorMessage('phone')}
                                </div>

                                <div>
                                    <select
                                        className={`w-full p-3 border rounded-md text-gray-400 bg-white ${errors.state ? 'border-red-500' : ''}`}
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">State/Union Territory</option>
                                        <option>Andaman and Nicobar Islands</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chandigarh</option>
                                        <option>Chhattisgarh</option>
                                        <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option>Delhi</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Ladakh</option>
                                        <option>Lakshadweep</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Puducherry</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                    </select>
                                    {renderErrorMessage('state')}
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Apply Now'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Contact Form Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* Logo and Heading */}
                    <div className="text-center md:text-left md:w-1/2">
                        <Image src='/logo_with_form.png' height={300} width={500} alt='logo' />
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Submit confirmation overlay - appears after successful submission */}
                        {showConfirmation && (
                            <div className="absolute inset-0 bg-white bg-opacity-95 z-10 flex flex-col items-center justify-center rounded-lg shadow-md animate-fade-in-down">
                                <div className="text-green-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-center">Thank You!</h3>
                                <p className="text-gray-700 text-center mb-6 px-8">
                                    Your form has been submitted successfully. We will get back to you soon.
                                </p>
                                <Button
                                    onClick={() => setShowConfirmation(false)}
                                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
                                >
                                    Close
                                </Button>
                            </div>
                        )}

                        {submitMessage.text && !showConfirmation && (
                            <div className={`mb-4 p-3 rounded ${submitMessage.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {submitMessage.text}
                            </div>
                        )}

                        <form className="space-y-4 bg-gray-50 p-8 rounded-lg shadow-md" onSubmit={(e) => handleSubmit(e, false)}>
                            <div>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Ramesh Sharma"
                                    className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : ''}`}
                                    required
                                />
                                {renderErrorMessage('name')}
                            </div>

                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="rameshsharma@gmail.com"
                                    className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                                    required
                                />
                                {renderErrorMessage('email')}
                            </div>

                            <div>
                                <div className={`flex items-center border rounded-md overflow-hidden ${errors.phone ? 'border-red-500' : ''}`}>
                                    <select
                                        className="appearance-none bg-white p-3 text-gray-400 outline-none"
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleInputChange}
                                    >
                                        <option>INR(+91)</option>
                                    </select>
                                    <span className="px-2 text-gray-500">|</span>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="12345 67890"
                                        className="w-full p-3 outline-none"
                                        required
                                    />
                                </div>
                                {renderErrorMessage('phone')}
                            </div>

                            <div>
                                <select
                                    className={`w-full p-3 border rounded-md text-gray-400 bg-white ${errors.state ? 'border-red-500' : ''}`}
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">State/Union Territory</option>
                                    <option>Andaman and Nicobar Islands</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chandigarh</option>
                                    <option>Chhattisgarh</option>
                                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option>Delhi</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jammu and Kashmir</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Ladakh</option>
                                    <option>Lakshadweep</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Puducherry</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                </select>
                                {renderErrorMessage('state')}
                            </div>


                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;