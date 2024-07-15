<script setup>
defineProps({
  id: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
  } ,
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    default: () => ({
      color: "bg-gradient-success",
      label: "Mais Informações",
    }),
  },
});


const emit = defineEmits(['noticeClick'])

const showDetails = (value) => {
  let emitClosed = {
      value: value   
  }
  emit("noticeClick", emitClosed)
}


</script>
<template>
  <div class="">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a :href="action.route" class="d-block blur-shadow-image image-cursor-point" @click="showDetails(id)" >
        <img :src="image" :alt="title" class="img-fluid border-radius-lg"  style="background-color: #cccccc; width: 328px;"/>
      </a>
    </div>
    <div class="card-body text-center">
      <h5 class="font-weight-normal">
        <a href="javascript:;" v-if="(title.length > 39)" :title="title">{{ title.slice(0, 39) + '...' }}</a>
        <a href="javascript:;" :title="title" v-else>{{title }}</a>
      </h5>
      <p class="mb-0" v-if="(description.length > 85)">{{ description.slice(0, 85) + '...' }}</p>
      <p v-else>{{ description }}</p> 
      <!-- <a type="button" :href="href" class="btn btn-sm mb-0 mt-3" :class="action.color">
        {{ action.label }}
      </a> -->
    </div>
  </div>
</template>

<style>
.image-cursor-point {
  cursor: pointer;
}

.image-cursor-point:hover {
  margin: 10px;
}

</style>
