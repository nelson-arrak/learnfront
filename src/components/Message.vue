<script setup>
import { computed } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '',
        validator(value, props) {
            // The value must match one of these strings
            return [
                'success',
                'warning',
                'danger',
                'info',
                'light',
                'dark',
                'ghost',
                'white',
                'black',
                'text',
                'link',
            ].includes(value)
        }

    },
    size: {
        type: String,
        validator(value, props) {
            return [
                'small',
                'normal',
                'medium',
                'large',
            ].includes(value)
        }
    },
    text: {
        type: String,
        default: "World",
    },
    headerText: {
        type: String,
        default: "Hello",
    },
});

let computedClass = computed(() => {
    let combined = '';
    combined += props.class;
    if (props.color) {
        combined += ' is-' + props.color
    }
    if(props.size){
        combined += ' is-' + props.size
    }
    return combined;
});
</script>

<template>
    <article class="message" :class="computedClass">
        <div class="message-header">
            <p>{{ headerText}}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ text }}
        </div>
    </article>
</template>