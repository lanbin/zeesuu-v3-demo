<template>
  <div class="userInfo">
    <h1>User Info</h1>
    <p>Username: {{ userInfo.userName }}</p>
    <p>Nicename: {{ userInfo.nickName }}</p>
    <p>Email: {{ userInfo.email }}</p>
    <button @click="set">Set</button>
    <button @click="clean">Clean</button>
  </div>
</template>

<script lang="ts" setup>
import {
  INJECT_KEY_STORE_USERINFO,
  IK_PROVIDE_SET_USERINFO,
  IK_PROVIDE_CLEAN_USERINFO,
} from "@zeesuu-v3/login";
import { wrapPermission } from "@zeesuu-v3/permission";
import { computed, inject, watch } from "vue";
import { useStore } from "vuex";

const userInfoStore = useStore(INJECT_KEY_STORE_USERINFO);

const userInfo = computed(() => userInfoStore?.getters?.userInfo) || {};
const setUserInfo = inject(IK_PROVIDE_SET_USERINFO, (userInfo: any) => ({}));
const cleanUserInfo = inject(IK_PROVIDE_CLEAN_USERINFO, () => {});

const set = () => {
  setUserInfo({
    userName: "111",
    nickName: "ok",
    email: "111@gmail.com",
    permission: wrapPermission(["admin"]),
  });
};

const clean = () => {
  cleanUserInfo();
};
</script>

<style lang="less" scoped>
.userInfo {
  margin: 0 auto;
  font-size: 16px;
}
</style>
