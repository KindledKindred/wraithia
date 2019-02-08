<template lang="pug">
	v-layout
		v-btn(@click="init") Init
		v-btn(@click="get") Get
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "WrInitializeData",

	methods: {
		...mapActions(["users/seed", "conversations/seed"]),

		init() {
			this.$store.dispatch("users/seed");
			this.$store.dispatch("conversations/seed");
		},
		get() {
			this.$store.dispatch("users/get");
			this.$store.dispatch("conversations/get");
		}
	}
};
</script>
