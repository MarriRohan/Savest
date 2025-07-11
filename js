const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/goals', (req, res) => {
  const { goalName, amount, years } = req.body;
  const yearly = amount / years;
  const monthly = yearly / 12;
  const quarterly = yearly / 4;
  const weekly = yearly / 52;
  const daily = yearly / 365;

  res.json({
    goalName,
    years,
    total: amount,
    yearly: yearly.toFixed(2),
    monthly: monthly.toFixed(2),
    quarterly: quarterly.toFixed(2),
    weekly: weekly.toFixed(2),
    daily: daily.toFixed(2)
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
