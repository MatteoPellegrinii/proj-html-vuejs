<template>
<li> <a :class="[specialblue == true ? 'specialblueclass' : '', active== true ? 'active' : '' ]" :href="url" >{{nome}} <span class="yellow">{{newpippo}}</span> </a> </li>
</template>

<script>
export default {
  name: 'LinkProject',
  props:{
    nome: String,
    icon: Object,
    specialblue: Boolean,
    active: Boolean,
    url: String,
    newpippo: String,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
    color: grey;
    text-decoration: none;
    
}
.specialblueclass{
    color: white;
    background-color: blue;
    padding: 10px;
    border-radius: 20px;
}
.yellow{
    background-color: yellow;
    color: black;
    margin-left: 5px;
}
.active{
    color: white;
}

</style>