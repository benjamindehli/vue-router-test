<template>
	<div>
		<h1>{{ user.name }}</h1>
    <p>User ID is {{ $route.params.userId }}</p>

  </div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'User',
	data () {
		return {
			user: {
        name: ''
      }
    }
  },
  mounted () {
    axios.get('/dummyApi/users/' + this.$route.params.userId + '.json').then(
      response => this.user = response.data
      );
  }
}
</script>

<style lang="scss">

</style>
