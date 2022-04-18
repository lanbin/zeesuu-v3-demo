<script setup lang="ts">
import UserInfo from "./components/UserInfo.vue";
import Permission from "./components/Permission.vue";
import Rules from "./components/Rules.vue";
import { inject, onMounted, reactive, ref } from "vue";
import { iZeesuuService } from "@zeesuu-v3/service/lib/index.d";

const testElValue = ref("");
const $service = inject<iZeesuuService>("$service");

const tableOptions = reactive({
  formOptions: [{}],
  staticData: [{ name: "1" }, { name: "2" }, { name: "3" }],
  beforeQuery(searchData: any) {
    console.log("before");
  },
});

const fetchUrl = async () => {
  try {
    await $service?.Login();
  } catch (e) {
    alert(JSON.stringify(e.message));
  }
};
</script>

<template>
  <h1>Test Zeesuu</h1>
  <UserInfo></UserInfo>
  <Permission></Permission>
  <Rules></Rules>
  <h2>Zeesuu SearchTable</h2>
  <SearchTable ref="searchTable" :options="tableOptions" table-layout="fixed">
    <el-table-column label="name" prop="name"></el-table-column>
  </SearchTable>
  <h1>Zeesuu Select</h1>
  <p>Select Value is: {{ testElValue }}</p>
  <SearchSelect v-model="testElValue" type="testEl"></SearchSelect>
  <h1>Zeesuu Service</h1>
  <button @click="fetchUrl">Fetch</button>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #eeeeee;
  min-height: 100vh;
  padding: 10px 20px;
}
</style>
