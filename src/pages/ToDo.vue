<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let importanceTerms = ref([
    'Low',
    'Medium',
    'High',
    'Choose'
])
let activeImportance = 3;

let isActive = ref(true);
let text = ref('');
let newItem = ref(['']);
let i = 0;
let items = ref([
    { id: i++, text: 'Piim', isDone: true, importance: 0 },
    { id: i++, text: 'Viin', isDone: true, importance: 2},
    { id: i++, text: 'Kali', isDone: false, importance: 0 },
    { id: i++, text: 'Leib', isDone: true, importance: 1 },
    { id: i++, text: 'Sibul', isDone: false, importance: 2 },
]);

function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({ id: i++, text: newItem.value.trim(), isDone: false, importance: activeImportance });
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
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Add task">
            </div>
            <!-- dropdown menu -->
            <div @click="isActive = !isActive"  class="dropdown" :class="{'is-active': isActive, 'is-active': !isActive}">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span >{{ importanceTerms[activeImportance] }}</span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div class="dropdown-content">
                        <button @click="activeImportance = 2" class="dropdown-item"> High </button>
                        <button @click="activeImportance = 1" class="dropdown-item"> Medium </button>
                        <button @click="activeImportance = 0" class="dropdown-item"> Low </button>
                    </div>
                </div>
            </div>
            <!-- add button -->
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