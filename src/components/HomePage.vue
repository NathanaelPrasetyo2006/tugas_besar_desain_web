<template>
  <div class="home mx-6 my-4">
    <h1 class="text-2xl font-bold">Best Seller</h1>
  </div>
  <div class="flex flex-row">
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
  </div>
  <div class="home mx-6 my-4">
    <h1 class="text-2xl font-bold">Recommended</h1>
  </div>
  <div class="flex flex-row">
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
        image="/src/assets/Coco banana bread.jpg"
        title="Coco Banana Bread"
        description="Coco Banana Bread adalah roti yang lembut dan lezat dengan rasa kopi yang menggugah selera."
      />
    </div>
  </div>
</template>

<script>
import TheCard from './TheCard.vue'

export default {
  name: 'HomePage',
  components: {
    TheCard,
  },
}
</script>

<style scoped></style>
