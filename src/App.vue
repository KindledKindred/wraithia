<template lang="pug">
  router-view
</template>


<script>
export default {
	name: "App",

	created() {
		console.log(this.$store.state.db);
	}
};
</script>
