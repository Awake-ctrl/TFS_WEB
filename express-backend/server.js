import express from "express"

app = express();


app.get('/api/items', (req, res) => {
    const { page = 1, limit = 10 } = req.query; 
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    const paginatedItems = items.slice(startIndex, endIndex);
  
    res.json({
      currentPage: parseInt(page),
      totalItems: items.length,
      totalPages: Math.ceil(items.length / limit),
      data: paginatedItems
    });
  });