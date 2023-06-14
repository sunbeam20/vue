<template>
  <div class="dashBoard">
    <div class="toDo">
      <h2>To Do lists</h2>
      <p>Things you need to deal with</p>
      <table style="width: 100%">
        <tbody>
          <tr>
            <td class="border-right">
              <p class="p">0</p>
              <p>Unpaid</p>
            </td>
            <td class="border-right">
              <p class="p">0</p>
              <p>To-Ship</p>
            </td>
            <td class="border-right">
              <p class="p">0</p>
              <p>Shipped</p>
            </td>
            <td>
              <p class="p">0</p>
              <p>Pending Cancellation</p>
            </td>
          </tr>
          <tr>
            <td class="border-right">
              <p class="p">0</p>
              <p>Pending Return/Refund</p>
            </td>
            <td class="border-right">
              <p class="p">0</p>
              <p>Banned Products</p>
            </td>
            <td class="border-right">
              <p class="p">0</p>
              <p>Sold Out Products</p>
            </td>
            <td>
              <p class="p">0</p>
              <p>Pending Cancellation</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>
<style scoped>
.dashBoard {
  width: 45%;
  height: 80%;
  margin: 1em 5em 5em 10em;
  padding: 2em 3em 3em 0em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: #f5f5f5;
  border-radius: 5px;
}

.toDo {
  display: block;
  margin-left: 2em;
}

table {
  display: flex;
}

tbody {
  margin: 0em 1em;
}

tr {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
}

table,
tbody,
tr {
  width: 100%;
}

td {
  display: flex;
  /*background-color: aliceblue;*/
  flex-direction: column;
  align-items: center;
  width: 25%;
  border-radius: 5px;
}

.p {
  font-size: large;
  font-weight: bold;
}

td:hover {
  background-color: #ffffff;
  cursor: pointer;
}

/* Border styles */
td.border-right {
  /*
  border-right: 1px solid rgba(160, 160, 160, 0.5);*/
  border-right-style: inset;
}
</style>
