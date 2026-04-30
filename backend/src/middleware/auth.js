const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(' ')[1]; // Format: "Bearer <token>"
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userId = decoded.userId; // Pass the ID to the next function
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};