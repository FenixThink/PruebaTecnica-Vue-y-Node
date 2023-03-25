<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              New Festival
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div class="modal-body">
              <div class="mb-3">
                <label for="name-event" class="col-form-label"
                  >Name Event:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="name-event"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="Location-event" class="col-form-label"
                  >Location Event:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="Location-event"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="date-event" class="col-form-label"
                  >Date Event:</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="date-event"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="time-event" class="col-form-label"
                  >Time Event:</label
                >
                <input
                  type="time"
                  class="form-control"
                  id="time-event"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="max-capacity" class="col-form-label"
                  >maximum capacity:</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="max-capacity"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="aval-tick" class="col-form-label"
                  >available tickets:</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="aval-tick"
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" id="saveData">
                Save Festival
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
