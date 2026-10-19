<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

let tabTitles = ref(['item1', 'documents', 'music', 'jne']);
let contents = ['content1', 'content2', 'content3', 'content4'];
let activeTab = ref(0);
</script>

<template>
    <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab = $event"></Tabs>
    <div class="container content mt-3">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>

<style></style>