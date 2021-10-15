<template>
  <div id="todos">
    <ul>
      <li v-for="n in 100" :key="n">
        <Todo />
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#todos{
  margin-top: 80px;
}
#todos ul {
  padding: 0;
}
#todos ul li{
  list-style: none;
}
</style>
