<template>
    <div>
      <h3>Delete Employee</h3>
      <div>
        <label for="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" v-model="employeeId" />
        <button @click="deleteEmployee">Delete Employee</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const employeeId = ref('');
  
  const deleteEmployee = async () => {
    try {
      await axios.delete(`http://localhost:8080/empdata/delete/${employeeId.value}`);
      console.log('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  </script>
  