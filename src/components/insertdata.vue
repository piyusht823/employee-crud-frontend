<template>
    <div>
      <h3>Add Employee</h3>
      <form @submit.prevent="addEmployee">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="employee.name" required />
        </div>
        <div>
          <label for="email">Salary:</label>
          <input type="text" id="salary" v-model="employee.salary" required />
        </div>
        <!-- Add more input fields for other employee details -->
        <div>
          <button type="submit">Add Employee</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const employee = ref({
    name: '',
    salary: ''
    // Add more properties as needed
  });
//   const employee = ref({id:'',name:'',salary:''});

  
  const addEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:8080/empdata/create', employee.value);
      console.log('Employee added:', response.data);
      // Optionally, you can navigate to another route or perform other actions
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };
  </script>
  