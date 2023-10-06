<template>
  <BContainer>
    <button type="button" @click="showById">Show By ID</button>

    <BModal id="hello">
      <ModalTest />
    </BModal>
  </BContainer>
</template>

<script setup lang="ts">
import {BModal, useModal} from './BootstrapVue'
import ModalTest from './ModalTest.vue'

const {show, modal} = useModal('hello')

function showById() {
  show()
}
</script>
