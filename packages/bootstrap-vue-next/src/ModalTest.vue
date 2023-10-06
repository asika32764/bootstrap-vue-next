<script setup lang="ts">
import {ref} from 'vue'
import {type BModalController, useModal, useModalController} from './BootstrapVue'

const {hide, modal} = useModal()
const modalController: BModalController = useModalController()
const secondModal = ref(false)

function close() {
  modalController.hide()
}
</script>

<template>
  <div>
    Hello
    <button type="button" @click="hide">Hide Closest Modal</button>
    <button type="button" @click="close">Hide By Controller (Sequential)</button>
    <button type="button" @click="secondModal = true">Show Second Modal</button>

    <BModal v-model="secondModal">
      <button type="button" @click="modalController.hide">Hide By Controller (Sequential)</button>
      <button type="button" @click="modalController.hideAll">Hide All</button>
    </BModal>
  </div>
</template>

<style scoped lang="scss"></style>
