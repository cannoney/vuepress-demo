<template>
  <h2 class="hd2">
    <!-- <span class="icon iconfont icon-leaf"></span> -->
    <!-- 模板字符串 -->
    <span :class="`icon iconfont icon-${icon || 'leaf'}`"></span>
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
//import { defineProps } from 'vue'
defineProps(['icon']);
</script>