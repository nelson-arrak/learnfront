<script setup>
defineProps(['items', 'title', 'importanceTerms']);
let isActive = false
</script>

<template>
    <h1>{{ title }}</h1>
    <dl>
        <dd v-for="item in items" :key="item.id" :class="importanceTerms[item.importance]">
            <!-- <input type="checkbox" v-model="item.isDone"> -->
            <div class="select is-rounded is-small">
                <select v-model="item.importance" :class="importanceTerms[item.importance]">
                    <option value="2" style="background-color: red;"></option>class
                    <option value="1" style="background-color: yellow;"></option>
                    <option value="0" style="background-color: green;"></option>
                </select>
            </div>
            <p class="inline" :class="{ strikeThrough: item.isDone }" @click="item.isDone = !item.isDone">{{ item.text }}
            </p>
        </dd>
    </dl>


</template>

<style>
.inline {
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
}

.strikeThrough {
    text-decoration-line: line-through;
    cursor: pointer;
}

.Low {
    accent-color: green;
}

select.Low {
    background-color: green;
}

.Medium {
    accent-color: yellow;
}

select.Medium {
    background-color: yellow;
}

.High {
    accent-color: red;
}

select.High {
    background-color: red;
}
</style>