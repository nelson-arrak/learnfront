<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue'
import ImgModal from '../components/ImgModal.vue';

let modal1Open = ref(false);
let modal2Open = ref(false);
let modal3Open = ref(false);

</script>

<template>
    <div class="container content mt-3">
        <button @click="modal1Open = true" class="button is-primary">Open modal 1</button>
        <Modal :active="modal1Open" @close="modal1Open = false"
            url="https://media.tenor.com/nEqDdKTbAx4AAAAj/shaco-worm.gif" content="">
            <div class='box'>I'm in a box.</div>
        </Modal>
    </div>

    <div class="container content mt-3">
        <button @click="modal2Open = true" class="button is-success">Open modal 2</button>
        <ImgModal :active="modal2Open" @close="modal2Open = false"
            url="https://wiki.leagueoflegends.com/en-us/images/thumb/Shaco_Render.png/213px-Shaco_Render.png"></ImgModal>
    </div>

    <div class="container content mt-3">
        <button @click="modal3Open = true" class="button is-warning">Open modal 3</button>
        <ImgModal :active="modal3Open" @close="modal3Open = false" url="https://picsum.photos/seed/nelson/1280/960">
        </ImgModal>

    </div>
</template>

<style></style>