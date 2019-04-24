<template>
  <v-card>
    <v-card-title primary-title>
      <img src="../../assets/profile-default.jpg" class="avatar" />
      <div>
        <h3 class="headline mb-0">{{ user.name }} as {{ user.username }}</h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn v-on:click="handleClick(user.id)" flat color="orange"
        >Details</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  border-radius: 50%;
  height: 70px;
  margin-right: 10px;
  width: 70px;
}
</style>
