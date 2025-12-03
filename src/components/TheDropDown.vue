<template>
  <div class="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4">
    <router-link
      to="/produk"
      class="text-gray-700 text-lg md:text-xl font-medium hover:text-blue-600 transition duration-200"
      active-class="md:text-blue-700 md:border-b-2 md:border-blue-700 md:pb-1"
    >
      Produk
    </router-link>

    <Menu as="div" class="relative inline-block">
      <MenuButton
        :class="[
          'inline-flex justify-center items-center gap-x-1.5 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-sm font-semibold text-white bg-transparent hover:bg-gray-300 transition w-full sm:w-auto',
          $route.path !== '/produk' ? 'pointer-events-none opacity-20' : '',
        ]"
      >
        <ChevronDownIcon class="-mr-1 size-4 sm:size-5 text-gray-500" aria-hidden="true" />
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
          class="absolute right-0 z-10 mt-2 w-36 sm:w-44 md:w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-white/10 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#RotiSpesial"
                :class="[
                  active ? 'bg-white/5 text-white' : 'text-gray-300',
                  'block px-3 py-1.5 text-xs sm:text-sm',
                ]"
              >
                Roti Spesial
              </a>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <a
                href="#RotiAsinGurih"
                :class="[
                  active ? 'bg-white/5 text-white' : 'text-gray-300',
                  'block px-3 py-1.5 text-xs sm:text-sm',
                ]"
              >
                Roti Asin/Gurih
              </a>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <a
                href="#RotiManis"
                :class="[
                  active ? 'bg-white/5 text-white' : 'text-gray-300',
                  'block px-3 py-1.5 text-xs sm:text-sm',
                ]"
              >
                Roti Manis
              </a>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <a
                href="#RotiTawar"
                :class="[
                  active ? 'bg-white/5 text-white' : 'text-gray-300',
                  'block px-3 py-1.5 text-xs sm:text-sm',
                ]"
              >
                Roti Tawar
              </a>
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
