<template lang="pug">
	v-app
		WrInitializeData
		WrConversationContainer(
			v-for="id in convoIds"
			:conversation="conversations[id]"
			:id="id"
			:key="id"
		)
</template>

<script>
import WrInitializeData from "@/components/Molecules/WrInitializeData";
import WrConversationContainer from "@/components/Organisms/WrConversationContainer";
import { mapState } from "vuex";

export default {
	name: "Home",

	components: {
		WrInitializeData,
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
