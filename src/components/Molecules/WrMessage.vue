<template lang="pug">
	v-layout
		v-card(:class="getPosition") {{ message.text }}
</template>

<script>
export default {
	name: "WrMessage",
	props: {
		message: {
			type: Object,
			required: true
		}
	},
	computed: {
		getPosition() {
			if (this.message.sender === this.$store.state.users.currentUser) {
				return "my message";
			} else {
				return "message";
			}
		}
	}
};
</script>