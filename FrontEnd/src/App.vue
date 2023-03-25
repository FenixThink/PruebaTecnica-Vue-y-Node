<script setup>
import mainTable from './components/mainTable.vue'    
import CreateFestivalModal from './components/CreateFestivalModal.vue'    
import buttonCreate from './components/buttonCreate.vue'    
import { ref, onMounted } from "vue";

const datos = ref([]);
const personal = ref([]);
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

const listeners = () => {
  const details = document.querySelectorAll(".details");
  const deletes = document.querySelectorAll(".delete");
  deletes.forEach((element) => {
    element.addEventListener("click", async (e) => {
      const id = e.target.id;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          fetch(`http://localhost:8000/deleteFestival/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          let button = "";
          setInterval(() => {
            button = Swal.isVisible();
            if (button == false) {
              window.location = "/";
            }
          }, 100);
        }
      });
    });
  });
  details.forEach((element) => {
    element.addEventListener("click", async (e) => {
      const response = await fetch(
        `http://localhost:8000/EspecificFestival/${e.target.id}`
      );
      const data = await response.json();
      personal.value = data;
    });
  });
  document.querySelector("#saveData").addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name-event").value.trim();
    const location = document.querySelector("#Location-event").value.trim();
    const date = document.querySelector("#date-event").value.trim();
    let time = document.querySelector("#time-event").value.trim();
    const capacity = document.querySelector("#max-capacity").value.trim();
    const available = document.querySelector("#aval-tick").value.trim();
    time += ":00";
    if (!name || !date || !time || !capacity || !available || !location) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios!",
      });
    } else {
      const save = {
        nameEvent: name,
        eventDate: date,
        timeEvent: time,
        max_capacity: capacity,
        location: location,
        available_tickets: available,
      };
      const response = await fetch("http://localhost:8000/createFestival", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // especificar los encabezados
        },
        body: JSON.stringify(save),
      });
      const data = await response.json();
      Swal.fire("Good job!", "You registed a Event!", "success");
      let button = "";
      setInterval(() => {
        button = Swal.isVisible();
        if (button == false) {
          window.location = "/";
        }
      }, 100);
    }
  });
};
setTimeout(() => {
  listeners();
}, 500);
</script>

<template>
  <header class="m-3">
    <buttonCreate />
  </header>
  <main>
    <mainTable />
    
  </main>

  <createFestivalModal />
  

  <div
    class="modal fade"
    id="detai"
    tabindex="-1"
    aria-labelledby="detai"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="sapo">{{ personal.nameEvent }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h2>Id: {{ personal._id }}</h2>
          <p>Event Name: {{ personal.nameEvent }}</p>
          <p>
            Date Event: {{ new Date(personal.dateEvent).toLocaleDateString() }}
          </p>
          <p>
            Time Event:
            {{
              new Date(personal.dateEvent).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </p>
          <p>Maximum capacity: {{ personal.max_capacity }}</p>
          <p>Location: {{ personal.location }}</p>
          <p>Tickets availables: {{ personal.available_tickets }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
main {
  width: 75%;
  margin: auto;
}
.margin {
  margin: auto;
  display: flex;
}
</style>
