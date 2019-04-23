<template>
  <div>
    <h1>{{ msg }}</h1>
    <v-layout v-for="user in users" :key="user.id" class="wrap">
      <v-flex sm4 offset-sm4>
        <v-card>
          <v-card-title primary-title>
            <img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              class="avatar"
            />
            <div>
              <h3 class="headline mb-0">
                {{ user.name }} as {{ user.username }}
              </h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn v-on:click="test(user.id)" flat color="orange"
              >Details</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { users } from '../../constants';

export default {
  name: 'Users',
  data() {
    return {
      msg: 'Welcome to Your Newsfeed',
      users,
    };
  },
  methods: {
    test(userId) {
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
.avatar {
  border-radius: 50%;
  height: 70px;
  margin-right: 10px;
  width: 70px;
}
</style>
