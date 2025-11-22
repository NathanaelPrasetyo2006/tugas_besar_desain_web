<template>
  <div class="flex items-center">
    <router-link
      to="/produk"
      class="text-gray-700 text-xl font-medium hover:text-blue-600 transition duration-200"
      active-class="text-blue-700 border-b-2 border-blue-700 pb-1"
    >
      Produk
    </router-link>
    <Menu as="div" class="relative inline-block">
      <MenuButton
        :class="[
          'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-blue-600/20',
          $route.path !== '/produk' ? 'pointer-events-none opacity-20' : '',
        ]"
      >
        <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
      </MenuButton>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#RotiSpesial"
                :class="[
                  active ? 'bg-white/5 text-white outline-hidden' : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Roti Spesial</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#RotiAsinGurih"
                :class="[
                  active ? 'bg-white/5 text-white outline-hidden' : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Roti Asin/Gurih</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#RotiManis"
                :class="[
                  active ? 'bg-white/5 text-white outline-hidden' : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Roti Manis</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#RotiTawar"
                :class="[
                  active ? 'bg-white/5 text-white outline-hidden' : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Roti Tawar</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
