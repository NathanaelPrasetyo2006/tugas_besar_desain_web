<template>
  <div>
    <TransitionRoot as="template" :show="modelValue">
      <Dialog class="relative z-50" @close="emitClose">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/50 transition-opacity"></div>
        </TransitionChild>

        <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-gray-800 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="px-6 py-5">
                  <div :class="icon ? 'flex items-start gap-4' : 'text-left'">
                    <div>
                      <DialogTitle class="text-lg font-semibold text-white">
                        {{ title }}
                      </DialogTitle>
                      <p class="mt-2 text-sm text-gray-400">
                        {{ message }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-700/25 px-4 py-3 flex flex-row-reverse gap-3">
                  <button
                    v-if="confirmText"
                    @click="emitConfirm"
                    class="inline-flex justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400"
                  >
                    {{ confirmText }}
                  </button>
                  <button
                    v-if="cancelText"
                    @click="emitClose"
                    class="inline-flex justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                  >
                    {{ cancelText }}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps({
  modelValue: { type: Boolean, default: false },
  title: String,
  message: String,
  confirmText: { type: String, default: 'OK' },
  cancelText: { type: String, default: null },
})

const emit = defineEmits(['update:modelValue', 'confirm'])

function emitClose() {
  emit('update:modelValue', false)
}

function emitConfirm() {
  emit('confirm')
  emit('update:modelValue', false)
}
</script>
