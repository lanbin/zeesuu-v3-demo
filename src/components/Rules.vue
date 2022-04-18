<template>
  <h2>Rules</h2>
  <p>{{ COMMON_RULE }}</p>
  <p>{{ LENGTH_RULE }}</p>
</template>

<script lang="ts" setup>
import Rule from "@zeesuu-v3/rules";
const { COMMON_RULE, LENGTH_RULE } = Rule;
</script>

<style lang="less" scoped></style>
