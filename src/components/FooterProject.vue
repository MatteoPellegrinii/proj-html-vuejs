<template>
<div class="contenitore">
  <div class="firstpart">
    <div class="sezione">
      <img src="../assets/images/logo-2x.png">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolore, maiores inventore quod rem ab dignissimos, ipsum molestias, amet repellendus obcaecati tempora laborum incidunt voluptatem impedit architecto praesentium beatae veniam!</p>
      <div class="social">
        <font-awesome-icon class="soclogo" icon="fa-brands fa-facebook" />
        <font-awesome-icon class="soclogo" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="soclogo" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="soclogo" icon="fa-brands fa-linkedin" />
        <font-awesome-icon class="soclogo" icon="fa-brands fa-youtube" />
      </div>
   </div>
  
    <div class="sezione">
      <h4>RECENT POSTS</h4>
      <LinkFooter v-for="(item, index) in linkFooter" :url="item.url" :name="item.text" :key="index" />
    </div>
    <div class="sezione">
      <h4>CONTACT INFORMATION</h4>
      <h5>4576 Tripple Road Mitchigan 3434</h5>
      <h4>Mobile: 3243243232</h4>
      <h4>Email: pippo@mail.com</h4>
    </div>
  </div>
  <hr>
  <div class="lastpart">
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia adipisci at veritatis maxime sed mollitia nam est</h5>
  </div>
</div>
</template>

<script>
import LinkFooter from "./LinkFooter.vue";
export default {
    name: "FooterProject",
    data() {
        return {
            linkFooter: [
                {
                    text: " > The best protein shake",
                    url: "#"
                },
                {
                    text: " > Ultimate cardio workout",
                    url: "#"
                },
                {
                    text: " > New juices avilable now",
                    url: "#"
                },
                {
                    text: " > Tips to find training partners",
                    url: "#"
                },
                {
                    text: " > 20 best healthy recipes",
                    url: "#"
                },
            ]
        };
    },
    components: { LinkFooter }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.firstpart{
  width: 100%;
  height: 450px;
  background-color: black;
  padding: 5% 10%;
  display: flex;
  align-items: center;
  .sezione{
    width: 33%;
    padding: 0 10px;
    text-align: center;
    img{
      width: 80%;
    }
    p{
      width: 100%;
      color: gray;
      font-size: 13px;
      margin: 15px 5px;
    }
    h4{
      color: white;
    }
    h5{
      color: gray;
      margin: 20px 0;
    }
  }
  .social{
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  .soclogo{
    color: red;
    margin: 0 5px;
  }
}
.lastpart{
  width: 100%;
  background-color: black;
  padding: 20px;
  text-align: center;
  h5{
    color: grey;
  }
}
</style>