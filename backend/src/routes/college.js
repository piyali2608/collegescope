const express = require('express');
const router = express.Router();
const axios = require('axios');
const prisma = require('../config/db');
const auth = require('../middleware/auth');

// 1. Wikipedia Proxy (GET /api/colleges/wiki/:slug)
router.get('/wiki/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`);
        res.json({
            extract: response.data.extract,
            image: response.data.thumbnail?.source,
            url: response.data.content_urls?.desktop?.page
        });
    } catch (error) {
        res.status(404).json({ error: "Wikipedia data not found" });
    }
});

// 2. Save/Toggle Favorite (POST /api/colleges/favorite)
router.post('/favorite', auth, async (req, res) => {
    const { collegeId, slug } = req.body;
    const userId = req.userId;

    try {
        // Check if already favorited
        const existing = await prisma.favorite.findFirst({
            where: { userId, collegeId }
        });

        if (existing) {
            await prisma.favorite.delete({ where: { id: existing.id } });
            return res.json({ message: "Removed from favorites" });
        }

        const fav = await prisma.favorite.create({
            data: { userId, collegeId, slug }
        });
        res.status(201).json(fav);
    } catch (error) {
        res.status(500).json({ error: "Failed to update favorites" });
    }
});

// 3. Get User's Favorites (GET /api/colleges/my-favorites)
router.get('/my-favorites', auth, async (req, res) => {
    try {
        const favorites = await prisma.favorite.findMany({
            where: { userId: req.userId }
        });
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch favorites" });
    }
});

module.exports = router;