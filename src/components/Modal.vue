<script setup>
defineProps(['active', 'url']);
</script>

<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div @click="$emit('close')" class="modal-background"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>