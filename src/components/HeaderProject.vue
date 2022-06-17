<template>
<div class="contenitore">
    <div class="logo">
        <img src="../assets/images/logo-200x34.png" alt="">
    </div>
    <div class="navbar">
        <ul>
            <LinkProject v-for="(item,index) in linkNavbar" :url="item.url" :newpippo="item.new" :active="item.active" :specialblue="item.specialblue" :icon="item.icon" :nome="item.text" :key="index"/>        
            <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
            <li><a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a></li>
        </ul>
    </div>
</div>
</template>

<script>
import LinkProject from "../components/linkProject.vue"
export default {
    name: "HeaderProject",
    data() {
        return {
            linkNavbar: [
                {
                    text: "Home",
                    url: "#",
                    active: true,
                    specialblue: false,
                    new: "",
                },
                {
                    text: "Services",
                    url: "#",
                    active: false,
                    specialblue: false,
                    new: "",
                },
                {
                    text: "About",
                    url: "#",
                    active: false,
                    specialblue: false,
                    new: "",
                },
                {
                    text: "Videos",
                    url: "#",
                    active: false,
                    specialblue: false,
                    new: "",
                },
                {
                    text: "Blog",
                    url: "#",
                    active: false,
                    specialblue: false,
                    new: "",
                },
                {
                    text: "Store",
                    url: "#",
                    active: false,
                    specialblue: false,
                    new: "new",
                },
                {
                    text: "Schedule a workout",
                    url: "#",
                    active: false,
                    specialblue: true,
                    new: "",
                },
            ]
        };
    },
    components: { LinkProject }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contenitore{
    background-color: #060607;
    width: 100%;
    height: 80px;
    display: flex;
    .logo{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar{
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        ul{
            display: flex;
        }
        li{
            list-style-type: none;
            margin-right: 20px;
            a{
                color: grey;
                
            }
        }
    
    }
}
</style>