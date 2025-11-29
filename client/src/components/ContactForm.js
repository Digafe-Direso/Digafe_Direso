// client/src/components/ContactForm.js

import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear status when user starts typing again
        if (status.message) {
            setStatus({ type: '', message: '' });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'sending', message: 'Sending your message...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({ 
                    type: 'success', 
                    message: 'SUCCESS! Your message has been sent to Digafe. We will get back to you soon.' 
                });
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus({ 
                    type: 'error', 
                    message: data.message || 'Failed to send message. Please try again.' 
                });
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus({ 
                type: 'error', 
                message: 'Network error: Could not connect to the server. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Status message styling
    const getStatusStyle = () => {
        switch (status.type) {
            case 'success':
                return { color: '#4CAF50', textAlign: 'center', padding: '10px', margin: '10px 0' };
            case 'error':
                return { color: '#f44336', textAlign: 'center', padding: '10px', margin: '10px 0' };
            case 'sending':
                return { color: '#FFA500', textAlign: 'center', padding: '10px', margin: '10px 0' };
            default:
                return { textAlign: 'center', padding: '10px', margin: '10px 0' };
        }
    };

    return (
        <section id="contact" style={{ padding: '40px', backgroundColor: '#000', color: '#fff' }}>
            <p>E-mail: digafe871@gmail.com</p>
            <p>CALL: +251777965669</p>
            
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        margin: '10px 0', 
                        backgroundColor: '#000', 
                        border: '1px solid #555', 
                        color: '#fff',
                        opacity: isSubmitting ? 0.6 : 1
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        margin: '10px 0', 
                        backgroundColor: '#000', 
                        border: '1px solid #555', 
                        color: '#fff',
                        opacity: isSubmitting ? 0.6 : 1
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    disabled={isSubmitting}
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        margin: '10px 0', 
                        backgroundColor: '#000', 
                        border: '1px solid #555', 
                        color: '#fff',
                        opacity: isSubmitting ? 0.6 : 1
                    }}
                ></textarea>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: isSubmitting ? '#666' : '#333', 
                        color: '#fff', 
                        border: 'none', 
                        cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                        display: 'block', 
                        margin: '0 auto',
                        opacity: isSubmitting ? 0.6 : 1
                    }}
                >
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </form>

            {/* Display status message to the user */}
            {status.message && (
                <div style={getStatusStyle()}>
                    {status.type === 'sending' && '⏳ '}
                    {status.type === 'success' && '✅ '}
                    {status.type === 'error' && '❌ '}
                    {status.message}
                </div>
            )}

            {/* Debug info for development */}
            {process.env.NODE_ENV === 'development' && status.type === 'error' && (
                <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '10px' }}>
                    Development Tip: Make sure your backend server is running on port 5000
                </p>
            )}
        </section>
    );
}

export default ContactForm;