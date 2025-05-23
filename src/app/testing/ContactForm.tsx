'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import { useContactFormContext } from '@/contexts/ContactFormContext';

// Add this object with country-specific states/territories
const countryStates = {
    'INR(+91)': [
        'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
        'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
        'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
        'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
        'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
        'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ],
    'USA(+1)': [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
        'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
        'Wisconsin', 'Wyoming', 'District of Columbia', 'Puerto Rico', 'Guam', 'American Samoa',
        'U.S. Virgin Islands', 'Northern Mariana Islands'
    ],
    'UK(+44)': [
        'England', 'Scotland', 'Wales', 'Northern Ireland', 
        'Bedfordshire', 'Berkshire', 'Bristol', 'Buckinghamshire', 'Cambridgeshire',
        'Cheshire', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham',
        'East Sussex', 'Essex', 'Gloucestershire', 'Greater London', 'Greater Manchester',
        'Hampshire', 'Hertfordshire', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire',
        'Merseyside', 'Norfolk', 'North Yorkshire', 'Northamptonshire', 'Nottinghamshire',
        'Oxfordshire', 'Shropshire', 'Somerset', 'South Yorkshire', 'Staffordshire', 'Suffolk',
        'Surrey', 'Tyne and Wear', 'Warwickshire', 'West Midlands', 'West Sussex',
        'West Yorkshire', 'Wiltshire', 'Worcestershire'
    ],
    'UAE(+971)': [
        'Abu Dhabi', 'Ajman', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Umm Al Quwain'
    ],
    'CAN(+1)': [
        'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
        'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
        'Quebec', 'Saskatchewan', 'Yukon'
    ],
    'AUS(+61)': [
        'Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland',
        'South Australia', 'Tasmania', 'Victoria', 'Western Australia'
    ],
    'OTHER': [] // Empty for manual input
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    countryCode: string;
    manualCountryCode: string; // For "Other" option
    state: string;
    manualState: string; // Add this for manual state entry
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
interface ContactFormProps {
    redirectUrl?: string;
}
const redirectUrl = "https://applyadmission.net/DA-IICT2025/" 
const ContactForm: React.FC<ContactFormProps> = () => {
    const { isPopupOpen, setIsPopupOpen } = useContactFormContext();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        countryCode: 'INR(+91)',
        manualCountryCode: '',
        state: '',
        manualState: '' // Initialize the new field
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
    const [isBTechPage, setIsBTechPage] = useState<boolean>(false);

    // Detect if this is the BTech page based on URL
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            setIsBTechPage(pathname.includes('/btech') || pathname === '/');
        }
    }, []);

    // Show popup when user visits the site (after a small delay)
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsPopupOpen(true);
    //     }, 0); // Shows popup after 3 seconds

    //     return () => clearTimeout(timer);
    // }, []);

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

    const getAvailableStates = () => {
        if (!isBTechPage) {
            // Only show Indian states for non-BTech pages
            return countryStates['INR(+91)'];
        }
        return countryStates[formData.countryCode as keyof typeof countryStates] || [];
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // When country code changes, reset the state field if not available in new country
        if (name === 'countryCode') {
            const availableStates = countryStates[value as keyof typeof countryStates] || [];
            if (!availableStates.includes(formData.state)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value,
                    state: '' // Reset state when country changes
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

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

        // Prepare submission data with proper country code and state handling
        const submissionData = {
            ...formData,
            // Use the manual country code if "OTHER" is selected
            countryCode: formData.countryCode === 'OTHER' ? formData.manualCountryCode : formData.countryCode,
            // Use manual state if "OTHER" is selected
            state: formData.countryCode === 'OTHER' ? formData.manualState : formData.state
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
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
                manualCountryCode: '',
                state: '',
                manualState: '' // Reset manual state
            });

            // Set success message based on where data was saved
            let successMessage = 'Form submitted successfully!';
            if (responseData.savedToSheets) {
                console.log("Data was saved to Google Sheets!");
            }

            setSubmitMessage({ text: successMessage, isError: false });

            // Dispatch custom event to notify form was submitted
            window.dispatchEvent(new Event('contactFormSubmitted'));

            // Show confirmation for non-popup form
            if (!isPopup) {
                setShowConfirmation(true);
                setTimeout(() => {
                    setShowConfirmation(false);
                    // Redirect after showing confirmation
                    window.location.href = redirectUrl;
                }, 2000); // Reduced to 3 seconds before redirect
            }

            // Close popup form if needed
            if (isPopup) {
                // Check if this is an apply action or download action
                const isApplyAction = localStorage.getItem('isApplyAction') === 'true';
                const isDownloadAction = localStorage.getItem('isDownloadAction') === 'true';
                
                setTimeout(() => {
                    setIsPopupOpen(false);
                    
                    // Only redirect for apply actions, not for download actions
                    if (isApplyAction) {
                        // Redirect after closing popup for apply actions
                        setTimeout(() => {
                            window.location.href = redirectUrl;
                        }, 500);
                    }
                    
                    // Clear the action flags
                    localStorage.removeItem('isApplyAction');
                    localStorage.removeItem('isDownloadAction');
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
                                            disabled={!isBTechPage} // Disable for non-BTech pages
                                        >
                                            <option value="INR(+91)">India (+91)</option>
                                            {isBTechPage && (
                                                <>
                                                    <option value="USA(+1)">USA (+1)</option>
                                                    <option value="UK(+44)">UK (+44)</option>
                                                    <option value="UAE(+971)">UAE (+971)</option>
                                                    <option value="CAN(+1)">Canada (+1)</option>
                                                    <option value="AUS(+61)">Australia (+61)</option>
                                                    <option value="OTHER">Other (Manual)</option>
                                                </>
                                            )}
                                        </select>
                                        <span className="px-2 text-gray-500">|</span>
                                        {formData.countryCode === 'OTHER' ? (
                                            <div className="flex items-center w-full">
                                                <Input
                                                    type="text"
                                                    name="manualCountryCode"
                                                    value={formData.manualCountryCode}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. +65"
                                                    className="w-24 p-3 outline-none"
                                                    required
                                                />
                                                <span className="px-2 text-gray-500">|</span>
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Phone number"
                                                    className="w-full p-3 outline-none"
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <Input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="12345 67890"
                                                className="w-full p-3 outline-none"
                                                required
                                            />
                                        )}
                                    </div>
                                    {renderErrorMessage('phone')}
                                </div>

                                <div>
                                    {formData.countryCode === 'OTHER' ? (
                                        <Input
                                            type="text"
                                            name="manualState"
                                            value={formData.manualState}
                                            onChange={handleInputChange}
                                            placeholder="Enter your state/region"
                                            className={`w-full p-3 border rounded-md ${errors.state ? 'border-red-500' : ''}`}
                                            required
                                        />
                                    ) : (
                                        <select
                                            className={`w-full p-3 border rounded-md text-gray-400 bg-white ${errors.state ? 'border-red-500' : ''}`}
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">State/Territory</option>
                                            {getAvailableStates().map((state, index) => (
                                                <option key={index} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {renderErrorMessage('state')}
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-red-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
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
                    <div className="text-center md:text-left md:w-1/2 md:mr-[100px]">
                        <Image src='/logo_with_form.png' height={300} width={576.92} alt='logo' />
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
                                    className="bg-red-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
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
                                        disabled={!isBTechPage} // Disable for non-BTech pages
                                    >
                                        <option value="INR(+91)">India (+91)</option>
                                        {isBTechPage && (
                                            <>
                                                <option value="USA(+1)">USA (+1)</option>
                                                <option value="UK(+44)">UK (+44)</option>
                                                <option value="UAE(+971)">UAE (+971)</option>
                                                <option value="CAN(+1)">Canada (+1)</option>
                                                <option value="AUS(+61)">Australia (+61)</option>
                                                <option value="OTHER">Other (Manual)</option>
                                            </>
                                        )}
                                    </select>
                                    <span className="px-2 text-gray-500">|</span>
                                    {formData.countryCode === 'OTHER' ? (
                                        <div className="flex items-center w-full">
                                            <Input
                                                type="text"
                                                name="manualCountryCode"
                                                value={formData.manualCountryCode}
                                                onChange={handleInputChange}
                                                placeholder="e.g. +65"
                                                className="w-24 p-3 outline-none"
                                                required
                                            />
                                            <span className="px-2 text-gray-500">|</span>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Phone number"
                                                className="w-full p-3 outline-none"
                                                required
                                            />
                                        </div>
                                    ) : (
                                        <Input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="12345 67890"
                                            className="w-full p-3 outline-none"
                                            required
                                        />
                                    )}
                                </div>
                                {renderErrorMessage('phone')}
                            </div>

                            <div>
                                {formData.countryCode === 'OTHER' ? (
                                    <Input
                                        type="text"
                                        name="manualState"
                                        value={formData.manualState}
                                        onChange={handleInputChange}
                                        placeholder="Enter your state/region"
                                        className={`w-full p-3 border rounded-md ${errors.state ? 'border-red-500' : ''}`}
                                        required
                                    />
                                ) : (
                                    <select
                                        className={`w-full p-3 border rounded-md text-gray-400 bg-white ${errors.state ? 'border-red-500' : ''}`}
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">State/Territory</option>
                                        {getAvailableStates().map((state, index) => (
                                            <option key={index} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {renderErrorMessage('state')}
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full bg-red-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
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