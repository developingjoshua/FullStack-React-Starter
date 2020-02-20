const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    {id: 1, firstName: 'Joshua', lastName: 'S.'},
    {id: 2, firstName: 'Chris', lastName: 'M.'},
    {id: 3, firstName: 'Krystal', lastName: 'F.'},
    {id: 4, firstName: 'Kendrick', lastName: 'D.'},
  ];

  res.json(users);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);