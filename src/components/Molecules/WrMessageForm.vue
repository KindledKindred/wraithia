<template lang="pug">
  v-form
    v-text-field(
			:value="messageText"
			@change="v => messageText = v"
			@keyup.enter="send"
      placeholder="メッセージを送信"
		)
</template>

<script>
export default {
	name: "WrMessageForm",

	data() {
		return {
			massageText: ""
		};
	},

	methods: {
		send() {
			this.$emit("send");
		}
	}
};
</script>
