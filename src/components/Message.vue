<script setup>
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
            ].includes(value)
        }

    },
    text: String,
});

let computedClass = computed(() => {
    let combined = '';
    combined += props.class;
    if(props.color){
        combined += ' is-' + props.color
    }
    return combined;
});
</script>

<template>
    <article class="message" :class="computedClass">
        <div class="message-header">
            <p>Hello World</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ text }}
        </div>
    </article>
</template>