<script setup>
import { ref, onMounted } from "vue";
const datos = ref([]);
async function getData() {
  try {
    const response = await fetch("http://localhost:8000/AllFestival");
    const data = await response.json();
    datos.value = data;
  } catch (error) {
    console.error(error);
  }
}
onMounted(getData);
</script>
<template>
  <div>
    <table class="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name Event</th>
          <th scope="col">Date Event</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      {{ datos.message }}
      <tbody v-if="datos.length > 0">
        <tr v-for="dato in datos" :key="dato.id">
          <th scope="row">{{ dato._id }}</th>
          <td>{{ dato.nameEvent }}</td>
          <td>{{ new Date(dato.dateEvent).toLocaleDateString() }}</td>
          <td class="d-flex justify-content-around">
            <button
              type="button"
              class="details btn btn-primary"
              :id="dato._id"
              data-bs-toggle="modal"
              data-bs-target="#detai"
            >
              Deatils
            </button>
            <button type="button" class="btn btn-danger delete" :id="dato._id">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <template v-else>
        <tr>
          <td colspan="4" class="text-center text-info">
            No se encontraron festivales registrados
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>
