<template lang="pug">
	v-container
		v-card
			v-card-title conversation Id: {{ id }}
			WrMessage(
				v-for="message in conversation.messages"
				:message="message"
				:key="message.created"
			)
			v-form
				v-text-field(
					:value="newMessageText"
					@change="v => newMessageText = v"
					@keyup.enter="send"
					placeholder="メッセージを入力..."
				)
</template>

<script>
import WrMessage from "@/components/Molecules/WrMessage";
import { mapState } from "vuex";
export default {
	name: "WrConversationContainer",

	props: {
		conversation: {
			type: Object,
			required: true
		},
		id: {
			type: String,
			required: true
		}
	},

	created() {
		// fetching messages in real time
		this.$store.state.db
			.collection("conversations")
			.doc(this.id)
			.onSnapshot(convo => {
				let source = convo.metadata.hasPendingWrites ? "Local" : "Server";
				console.log(`Source ${source}`);

				// add message to store
				if (convo && convo.data()) {
					convo.data().messages.forEach(message =>
						this.$store.commit("conversations/ADD_MESSAGE", {
							conversationId: this.id,
							message
						})
					);
				}
			});
	},

	methods: {
		send() {
			this.$store.dispatch("conversations/sendMessage", {
				text: this.newMessageText,
				created: Date.now(),
				conversationId: this.id,
				sender: this.$store.state.users.currentUser
			});
		}
	},

	components: {
		WrMessage
	}
};
</script>