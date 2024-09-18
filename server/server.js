// import express from "express";
// import cors from "cors";
// import records from "./routes/record.js";
// import mongoose from 'mongoose';

// import dotenv from 'dotenv';
// import uploadRoutes from './routes/uploadRoutes.js';
  

// dotenv.config();

// const PORT = process.env.PORT || 5050;
// const app = express();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("Error connecting to MongoDB:", err);
// });

// app.use('/api', uploadRoutes);

// const port = process.env.PORT || 5050;



// app.use(cors());
// app.use(express.json());
// app.use("/record", records);

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });



import express from 'express';
import uploadRoutes from './routes/uploadRoutes.js'; // Adjust if the path differs
import records from './routes/record.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());  
const PORT = process.env.PORT || 5050;



mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', uploadRoutes);
app.use('/record', records);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
