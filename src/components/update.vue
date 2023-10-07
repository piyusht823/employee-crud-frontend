<template>
    <div>
      <h3>Update Employee by ID</h3>
      <form @submit.prevent="updateEmployee">
        <div>
          <label for="employeeId">Employee ID</label><br>
          <input type="text" id="employeeId" v-model="employeeId" required />
        </div><br>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="updatedEmployee.name" required />
        </div>
        <div>
          <label for="salary">Salary:</label>
          <input type="salary" id="salary" v-model="updatedEmployee.salary" required />
        </div>
        <div>
          <button type="submit">Update Employee</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const employeeId = ref('');
  const updatedEmployee = ref({
    name: '',
    salary: ''
  });
  
  const route = useRoute();
  
  const fetchEmployeeById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/empdata/get/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching employee:', error);
      return null;
    }
  };
  
  const updateEmployee = async () => {
    const id = employeeId.value;
    const existingEmployee = await fetchEmployeeById(id);
  
    if (!existingEmployee) {
      console.error('Employee with ID not found:', id);
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:8080/empdata/update/${id}`, updatedEmployee.value);
      console.log('Employee updated:', response.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  