const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fetchCollegeWiki } = require('../services/wikiService');

exports.getCollegeDetails = async (req, res) => {
  const { slug } = req.params;
  // 1. Get live data from Wiki
  const wikiInfo = await fetchCollegeWiki(slug);
  
  // 2. Here you would normally fetch specific stats from your DB
  // (Fees, Placement rates, etc.)
  
  res.json({
    ...wikiInfo,
    lastUpdated: new Date()
  });
};