<template>
  <div v-permission="userInfo.permission?.has(['admin'])">
    <h2>Permission Admin</h2>
  </div>
  <button @click="set">Set Permission</button>
  <button @click="unset">Unset Permission</button>
</template>

<script lang="ts" setup>
import { INJECT_KEY_STORE_USERINFO } from "@zeesuu-v3/login";
import { wrapPermission } from "@zeesuu-v3/permission";
import { computed } from "vue";
import { useStore } from "vuex";
const UserInfoStore = useStore(INJECT_KEY_STORE_USERINFO);

const userInfo = computed(() => UserInfoStore?.getters?.userInfo) || {};

const set = () => {
  UserInfoStore.dispatch("setUserInfo", {
    ...userInfo.value,
    permission: wrapPermission(["admin", "user"]),
  });
};

const unset = () => {
  UserInfoStore.dispatch("setUserInfo", {
    ...userInfo.value,
    permission: wrapPermission([]),
  });
};

set();
</script>

<style lang="less" scoped></style>
