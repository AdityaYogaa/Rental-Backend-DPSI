const express = require('express');
const app = express();
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const sequelize = require('./config/database'); // Sesuaikan dengan lokasi file konfigurasi Sequelize Anda

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const orderRouter = require('./routes/orderRoutes');
const providerRouter = require('./routes/providerRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const truckRouter = require('./routes/truckRoutes');
const userRouter = require('./routes/userRoutes');
const promoRouter = require('./routes/promoRoutes');
const addressRouter = require('./routes/addressRoutes');
const user = require('./routes/userRoutes');
const index = require('./routes/index');

app.use('/',index)

app.use('/api', orderRouter);
app.use('/api', providerRouter);
app.use('/api', reviewRouter);
app.use('/api', truckRouter);
app.use('/api', userRouter);
app.use('/api', promoRouter);
app.use('/api', addressRouter);
app.use('/api',userRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send JSON response
  res.status(err.status || 500).json({ error: err.message });
});

// Sync database
sequelize.sync({ force: false }) // force: false untuk menghindari overwrite data
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = app;
