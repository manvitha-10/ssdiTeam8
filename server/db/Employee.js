import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  level: String
}, {collection: 'records'});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
