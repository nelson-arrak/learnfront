<script setup>
import {computed, ref } from 'vue';
import ItemList from './ItemList.vue';

let isPrimary = ref(true);
let text = ref('');
let newItem = ref(['']);
let i = 0;
let items = ref([
    {id:i++, text:'Piim', isDone: true}, 
    {id:i++, text:'Viin', isDone: true}, 
    {id:i++, text:'Kali', isDone: false}, 
    {id:i++, text:'Leib', isDone: true}, 
    {id:i++, text:'Sibul', isDone: false}, 
]);

function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:i++, text:newItem.value.trim(), isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
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
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="items" title="All items"></ItemList>
    </div>

</template>

<style></style>