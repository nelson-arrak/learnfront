<script setup>
import { ref } from 'vue';

let isPrimary = ref(true);
let text = ref('');

let items = ref(['Piim', 'Viin', 'Kali', 'Leib', 'Sibul']);
let newItem = ref(['']);

function add(){
    if(newItem.value.trim() !== ''){
        items.value.push(newItem.value.trim());
    }
    newItem.value = '';
}
</script>

<template>
    <div class="container content mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
                <button @click="add" class="button is-primary">
                    Add
                </button>
            </div>
        </div>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
    </div>

</template>

<style></style>