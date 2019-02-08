<template lang="pug">
	v-app
		WrInitialize
		WrConversationContainer(
			v-for="id in convoIds"
			:conversation="conversations[id]"
			:id="id"
			:key="id"
		)
</template>

<script>
import WrInitialize from "@/components/Molecules/WrInitialize";
import WrConversationContainer from "@/components/Organisms/WrConversationContainer";
import { mapState } from "vuex";

export default {
	name: "Home",

	components: {
		WrInitialize,
		WrConversationContainer
	},

	computed: {
		...mapState("conversations", {
			conversations: state => state.all,
			convoIds: state => state.allIds
		})
	}
};
</script>
