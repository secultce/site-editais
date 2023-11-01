<script setup>
import {ref, onMounted} from "vue"
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import moment from 'moment';
moment.locale('pt-br');

const props = defineProps({
    id: Number
})

const editalData = ref([])
const featureCover = ref('');
const urlApi = ref(import.meta.env.VITE_API_MAPA_URL)
const idNotice = ref(props.id);
const divNotice = ref(null)
//Buscando edital via api
const editalFind = () => {
fetch(import.meta.env.VITE_API_MAPA_URL + 'api/opportunity/find/?&@order=createTimestamp%20DESC&@select=id,singleUrl,name,subTitle,type,shortDescription,terms,project.name,project.singleUrl,%20user,%20owner.userId,owner.name,registrationFrom,registrationTo&@files=(avatar.avatarBig,downloads):url,description&@page=1&status=eq(1)&id=eq('+props.id+')')
.then(res => {
    
    return res.json()
})
.then(function(data) {
  console.log(data[0])
    //
    editalData.value = data[0]
    featureCover.value = editalData.value['@files:avatar.avatarBig'].url;
    editalData.value.registrationFrom = moment(data[0].registrationFrom.date).format('llll');
    editalData.value.registrationTo = moment(data[0].registrationTo.date).format('llll');
    editalData.value.nameOwner = editalData.value.owner.name 
    editalData.value.idOwner = editalData.value.owner.id
    editalData.value.files = editalData.value['@files:downloads']

})
.catch(err => {
    console.log({err})
})
}

onMounted(() => {
  editalFind();
  divNotice.value.scrollIntoView({ behavior: 'smooth' }); 
})


</script>
<template>
  <section class="my-5 py-5" ref="divNotice">
    <div class="container">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
        <h1>Informação do Edital </h1>
      </div>
      <div class="row animate__animated animate__bounceIn">
        <div class="col-md-4">
          <RotatingCard>
            <RotatingCardFront
              :image="`${featureCover}`"
              icon="touch_app"
              title="Feel the <br /> Material Kit"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Publicado por"
              :description="`${editalData.nameOwner}`"
              :action="[
                {
                  route:  urlApi + 'oportunidade/' + editalData.id,
                  label: 'Acessar Oportunidade',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-md-4 sm:mt-3">
          <DefaultInfoCard
              icon="content_copy"
              title="Etapas de Execução"
              :description="`${'Inscrições do período de: '+editalData.registrationFrom+' até '+editalData.registrationTo}`"
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Descrição do Edital"
              :description="`${editalData.shortDescription}`"
            />
        </div>
        <div class="col-md-4">
          <div class="col-md-12 ">
            <h5 class="font-weight-bolder mt-3">Publicação do edital</h5>
            <ul class="list-group">
              <div  v-for="(element, index) in editalData.files">
                <li :key="index" class="list-group-item ">
                <a :href="`${element.url}`" :key="index" class="">{{ element.description }}</a>
              </li>
              </div>
            
          </ul>
          </div>
                
        </div>
      </div>
    </div>
  </section>
</template>
