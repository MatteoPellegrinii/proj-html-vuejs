<template>
<div>
    <a :href="url">{{name}}</a>    
</div>
</template>

<script>
export default {
  name: 'LinkFooter',
  props:{
    name: String,
    url: String,
  },

}
</script>

<style scoped lang="scss">
div{
    margin: 10px 0;
}
a{
    color: white;
    text-decoration: none;
    font-size: 14px;
}

</style>