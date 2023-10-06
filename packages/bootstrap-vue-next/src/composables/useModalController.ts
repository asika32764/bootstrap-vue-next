import {toRef} from 'vue'
import type {BModalExposedProxy} from './useModal'
import {useSharedModalStack} from './useModalManager'

export default () => {
  const {last, stack} = useSharedModalStack()

  const hide = (trigger = '') => {
    if (last.value) {
      last.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    const modals = stack.value.reverse()

    for (const modal of modals) {
      modal.exposed?.hide(trigger)
    }
  }

  const getTop = () => toRef(() => last.value?.exposeProxy as BModalExposedProxy)

  return {
    hide,
    hideAll,
    getTop,

    // Todo: Supports listening events globally in the future
  }
}
