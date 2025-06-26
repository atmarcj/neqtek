// Serverless function for Vercel deployment
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, service, message, language } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Simple in-memory storage simulation for demo
      // In production, you'd connect to a real database
      const submission = {
        id: Date.now(),
        name,
        email,
        service: service || '',
        message,
        language: language || 'en',
        createdAt: new Date().toISOString()
      };

      // Log submission (appears in Vercel function logs)
      console.log('Contact form submission:', submission);

      res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully',
        id: submission.id
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }
}