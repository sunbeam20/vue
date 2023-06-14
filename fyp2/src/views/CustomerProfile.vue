<template>
  <div class="box">
    <div class="lSide">
      <span class="account">
        <img src="../assets/man.png" alt="profile pic" />
        <h3>user_name</h3>
      </span>
      <ul>
        <li class="main-lists">
          <span>
            <img src="../assets/account.png" />
            <p>My Account</p>
          </span>
          <ul>
            <li @click="selectedLink = 'Profile'" class="nested-lists">Profile</li>
            <li class="nested-lists">Address</li>
            <li class="nested-lists">Banks & Cards</li>
            <li @click="selectedLink = 'ChangePassword'" class="nested-lists">
              Change Password
            </li>
          </ul>
        </li>
        <li class="main-lists">
          <span>
            <img src="../assets/orders.png" />
            <p>My Orders</p>
          </span>
        </li>
      </ul>
    </div>
    <MyProfile v-if="selectedLink == 'Profile'" />
    <ChangePassword v-else-if="selectedLink == 'ChangePassword'" />
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import ChangePassword from "@/components/ChangePassword.vue";

export default {
  name: "CustomerProfile",
  components: {
    MyProfile,
    ChangePassword,
  },
  data() {
    return {
      selectedLink: null,
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  margin-top: 2em;
}

.lSide {
  width: 20vw;
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 0px 5px rgba(90, 90, 90, 0.5);
  margin: 2em 2em 2em 10em;
  border-radius: 5px;
}

.lSide ul {
  border-radius: 5px;
  margin: 2em 2em 0em 1em;
  list-style-type: none;
}

.account {
  margin-left: 3em;
  padding-top: 1em;
}

.account,
.account img,
.account h3 {
  display: flex;
  align-items: center;
  margin-right: 1em;
}

.main-lists,
.nested-lists {
  margin-top: 1em;
  padding: 1em 1em 1em 0em;
}
.main-lists span {
  display: flex;
  align-items: center;
}
.main-lists img {
  width: 2em;
  height: 2em;
  margin-right: 1em;
}
.nested-lists:hover {
  cursor: pointer;
  color: rgb(218, 171, 33);
}
/*Component*/
</style>
