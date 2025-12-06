const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Validate environment variables on startup
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.TARGET_EMAIL) {
    console.error('❌ Missing required environment variables in .env file');
    console.error('Required: EMAIL_USER, EMAIL_PASS, TARGET_EMAIL');
    process.exit(1);
}

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Nodemailer Transporter with better configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    // Additional options for better reliability
    pool: true,
    maxConnections: 1,
    rateDelta: 1000,
    rateLimit: 1
});

// Verify transporter configuration on startup
transporter.verify(function (error, success) {
    if (error) {
        console.error('❌ Nodemailer configuration error:', error);
    } else {
        console.log('✅ Nodemailer is ready to send emails');
    }
});

// Contact Form POST Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false,
            message: 'All fields are required.' 
        });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid email address.'
        });
    }

    const mailOptions = {
        from: `"Website Contact" <${process.env.EMAIL_USER}>`, // Use your email as sender
        replyTo: `${name} <${email}>`, // Set reply-to as the actual sender
        to: process.env.TARGET_EMAIL,
        subject: `NEW MESSAGE from Website Contact Form: ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #333;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <h3 style="margin-top: 0;">Sender Information</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
                <div style="margin-top: 20px;">
                    <h3>Message Content</h3>
                    <p style="white-space: pre-line; background: #fff; padding: 15px; border-left: 4px solid #007bff;">${message}</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully from: ${email}`);
        res.status(200).json({ 
            success: true,
            message: 'Message sent successfully!' 
        });
    } catch (error) {
        console.error('❌ Nodemailer Error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Failed to send message. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        service: 'Contact Form API',
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`✅ Backend Server running on http://localhost:${port}`);
    console.log(`📧 Email service configured for: ${process.env.EMAIL_USER}`);
});