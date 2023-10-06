<!-- <template>
    <div>
      <h2>Vue.js App</h2>
      <button @click="fetchDataFromSpringBoot">Fetch Data</button>
      <p>Data from Spring Boot: {{ responseData }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        responseData: ''
      };
    },
    methods: {
      fetchDataFromSpringBoot() {
        axios.get('http://localhost:8080/empdata/getAll')
          .then(response => {
            this.responseData = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
   -->




   <template>
    <div>
      <h2>Vue.js App</h2>
      <button @click="fetchEmployee">Fetch Data</button>
      <p>Data from Spring Boot: {{ employee }}</p>
    </div>
  </template>
  
<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios';

const employee = ref([])

    function  fetchEmployee() {
        axios.get('http://localhost:8080/empdata/getAll')
          .then(response => {
            employee.value = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }

      // onMounted(()=>{
      //   fetchEmployee();
      // })
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  