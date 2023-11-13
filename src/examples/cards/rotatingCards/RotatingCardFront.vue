<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class=""
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body py-7 text-center">
      <i v-if="icon" class="material-icons text-white text-4xl my-3">{{
        icon
      }}</i>
      <p
        v-if="label"
       
      >
        {{ label }}
      </p>
      <p
      
        v-if="label"
        class=""
      >
        {{ label }}
      </p>
      <h3 style="color: transparent" v-html="title" />
      <p style="color: transparent">
        {{ description }}
      </p>
    </div>
  </div>
</template>
