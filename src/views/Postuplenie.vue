<template>
  <div>
      <h1>Поступление на муницпальную службу</h1>
      <router-view></router-view>
      </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.postuplenie;
    },
  },
};
</script>

<style>

</style>