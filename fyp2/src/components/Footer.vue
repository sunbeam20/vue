<template>
  <footer class="footer">
    <div class="footer-section">
      <h3>Company Info</h3>
      <ul>
        <li>About Sun</li>
        <li>Fashion</li>
        <li>Blogger</li>
        <li>Social Responsibility</li>
        <li>Careers</li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>Help Support</h3>
      <ul>
        <li>Shipping Info</li>
        <li>How To Order</li>
        <li>How To Track</li>
        <li>Size Guide</li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>Customer Care</h3>
      <ul>
        <li>Contact Us</li>
        <li>Payment Method</li>
        <li>Returns</li>
        <li>Refund</li>
      </ul>
    </div>

    <div class="find-payment">
      <h3>Find Us On</h3>
      <ul class="find-us">
        <li><img src="../assets/facebook2.png" /></li>
        <li><img src="../assets/instagram.png" /></li>
        <li><img src="../assets/twitter.png" /></li>
        <li><img src="../assets/youtube.png" /></li>
        <li><img src="../assets/pinterest.png" /></li>
      </ul>
    </div>

    <div class="find-payment">
      <h3>We Accept</h3>
      <ul class="payment">
        <li><img src="../assets/cash-on-delivery.png" /></li>
        <li><img src="../assets/visa.png" /></li>
        <li><img src="../assets/paypal.png" /></li>
        <li><img src="../assets/google-pay.png" /></li>
        <li><img src="../assets/apple-pay.png" /></li>
      </ul>
    </div>

    <div class="footer-section bottom">
      <p>&copy; 2022-2023 SUN All Rights Reserved</p>
      <ul class="ul">
        <li><a href="#">Privacy Center</a></li>
        <li><a href="#">Privacy &amp; Cookie Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 50px 50px 0px 50px;
}
.footer-section,
.find-payment {
  margin: 0px 10px;
}
.payment li,
.find-us li,
.ul li {
  display: inline-block;
  margin-right: 10px;
}
.ul li {
  padding-right: 10px;
  border-right: 1px solid rgb(127, 127, 127);
}
.find-payment {
  display: flex;
  flex-direction: column;
}
.bottom {
  width: 100%;
  padding-bottom: 5px;
  text-align: right;
}
h3,
.bottom p {
  font-size: 14px;
  margin-bottom: 15px;
}
li {
  font-size: smaller;
}
ul {
  list-style: none;
  padding-left: 0;
}
ul li {
  margin-bottom: 10px;
}
p {
  margin-bottom: 15px;
}

li a {
  color: #666;
  text-decoration: none;
}
li a:hover,
li:hover {
  color: #000000;
  text-decoration: underline;
  cursor: pointer;
}
img {
  width: 25px;
  height: auto;
}
.payment img {
  width: 40px;
  height: auto;
}
</style>
