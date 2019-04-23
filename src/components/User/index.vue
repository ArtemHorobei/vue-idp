<template>
  <div>
    <img class="avatar" src="../../assets/profile-default.jpg" alt="avatar" />
    <p>{{ user.name }} as {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
    <p>
      Address:
      {{
        Object.values(user.address)
          .filter(item => typeof item !== "object")
          .join(", ")
      }}
    </p>
    <div>
      Company: "{{ user.company.name }}"({{ user.company.catchPhrase }})
    </div>
  </div>
</template>

<script>
import { users } from '../../constants';

export default {
  name: 'User',
  data() {
    return {
      user: users.find(
        user => user.id === +this.$router.history.current.params.userId,
      ),
    };
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
