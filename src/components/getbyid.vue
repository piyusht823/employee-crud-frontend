<template>
    <div>
      <h3>Get Employee by ID</h3>
      <div>
        <label for="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" v-model="employeeId" />
        <button @click="fetchEmployee">Fetch Employee</button>
      </div>
      <div v-if="employee">
        <h4>Employee Details</h4>
        <p>Name: {{ employee.name }}</p>
        <p>Salary: {{ employee.salary }}</p>
      </div>
      <div v-else>
        <p>No employee data available.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  
  const employeeId = ref('');

  const employee = ref(null);
  
  async function fetchEmployee() {
    try {
      const response = await axios.get(`http://localhost:8080/empdata/get/${employeeId.value}`);
      employee.value = response.data;
    } catch (error) {
      console.error(error);
      employee.value = null;
    }
  }
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  