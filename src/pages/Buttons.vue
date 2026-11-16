<script setup>
import Btn from '../components/Btn.vue';

</script>

<template>
    <Btn class="is-primary is-rounded is-outlined is-inverted">Cool button</Btn>
    <Btn color="warning" size="large">Cool button 2</Btn>
    <Btn>Cool button 3</Btn>
    <Btn fullwidth>Cool button 4</Btn>
    <Btn color="success" href="https://google.com">Cool button 6</Btn>
    <Btn color="primary" rounded inverted outlined state="loading" @click="console.log('click')">Cool button 5</Btn>
</template>