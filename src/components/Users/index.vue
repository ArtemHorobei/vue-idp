<template>
  <div>
    <h1>Welcome to Your Newsfeed</h1>
    <v-layout v-for="user in users" :key="user.id" class="wrap">
      <v-flex sm4 offset-sm4>
        <UserCard :user="user" :handleClick="handleClickDetails" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { users } from '../../constants';
import UserCard from './UserCard';

export default {
  name: 'Users',
  data() {
    return {
      users,
    };
  },
  components: {
    UserCard,
  },
  methods: {
    handleClickDetails(userId) {
      this.$router.push(`/${userId}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  margin-bottom: 20px;
}
</style>
