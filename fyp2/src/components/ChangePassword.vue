<template>
  <div class="rSide">
    <div class="head">
      <h2>Change Password</h2>
      <p>Manage your account</p>
    </div>
    <div class="body">
      <form action="" class="form">
        <table style="width: 100%">
          <tr>
            <td class="column columnA">
              <label for="" class="label">New Password</label>
            </td>
            <td class="column" style="width: 70%">
              <input type="password" class="input" />
            </td>
          </tr>
          <tr>
            <td class="column columnA">
              <label for="" class="label">Confirm Password</label>
            </td>
            <td class="column" style="width: 70%">
              <input type="password" class="input" />
            </td>
          </tr>
          <tr>
            <td class="column columnA"></td>
            <td class="column button" style="width: 80%">
              <button>Save</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
};
</script>

<style scoped>
.rSide {
  border-radius: 5px;
  display: block;
  width: 50vw;
  margin: 2em;
  padding: 0em 2em;
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 0px 5px rgba(90, 90, 90, 0.5);
}

.head {
  border-bottom: 0.025em solid rgba(0, 0, 0, 0.247);
}

.body {
  margin: 2em 0em 1em 4em;
}

.form {
  border-radius: 5px;
  width: 90%;
}

.form,
.label,
.input {
  margin: 1em;
  padding: 0.7em;
}

.columnA {
  text-align: right;
}

.column .div {
  margin-left: 1em;
  display: flex;
  align-items: center;
}
.div input,
.div label {
  margin: 1em;
}

.input {
  width: 80%;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.411);
}
.button {
  display: flex;
  justify-content: flex-end;
  margin-top: 3em;
}
.button button {
  padding: 0.5em 1em;
}
</style>
