<template>
	<div>
		<h1>Users</h1>
    <ul>
      <li v-for="user in users">
        <router-link v-bind:to="'/users/' + user.id">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'Users',
	data () {
		return {
      users: [
      {id: '0', name: 'Per Persen'},
      {id: '1', name: 'Anders Andersen'},
      {id: '2', name: 'Nils Nilsen'}
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
