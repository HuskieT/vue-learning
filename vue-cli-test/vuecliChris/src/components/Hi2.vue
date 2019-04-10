<template>
	<div class="hello">
		<h1>{{ tt }}</h1>
    <h2>{{  $route.params.username }}</h2>
    <h2>{{  $route.params.id }}</h2>
	</div>
</template>

<script>
  export default {
    name: 'hi2',
    data() {
      return {
        tt: 'I am hi2'
      }
    }
  }
</script>

<style scoped>
</style>
