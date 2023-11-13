<script setup>
import Header from "../../../examples/Header.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import HeaderBanner from "../../Presentation/Sections/Secult/HeaderBanner.vue"

const linkceficleft = [
    {
        title: 'I Edital Mecenas - 2008',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1177/'
    },
    {
        title: 'III Edital Mecenas do Ceará - 2011',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1179/'
    },
    {
        title: 'VI Edital Mecenas do Ceará - 2013',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1287/'
    },
    {
        title: 'VIII Edital Mecenas do Ceará - 2015',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/732/#'
    },
    {
        title: 'X Edital Mecenas do Ceará - 2017',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/732/#'
    },
    {
        title: 'XII Mecenas do Ceará - 2019',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1409/'
    }
]
const linkceficright = [
    {
        title: 'II Edital Mecenas do Ceará - 2010',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1178/'
    },
    {
        title: 'V Edital Mecenas do Ceará - 2012',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1180/'
    },
    {
        title: 'VII Edital Mecenas do Ceará - 2014',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1288/'
    },
    {
        title: ' IX Edital Mecenas do Ceará - 2016',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/215/#'
    },
    {
        title: 'XI Edital Mecenas do Ceará - 2018',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/1302/#'
    },
    {
        title: 'XIII Edital Mecenas do Ceará - 2021',
        link: 'https://mapacultural.secult.ce.gov.br/projeto/2876/'
    }
]


</script>


<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <NavbarDefault :sticky="true" />
            </div>
        </div>
    </div>
    <Header>
        <HeaderBanner />
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

        <section class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-12 d-flex justify-content-center">
                        <h3 class="border-bottom border-success">EDITAIS ANTERIORES MECENAS DO CEARÁ</h3>
                    </div>
                    <div class="col-md-12 col-lg-12 mt-2">

                        <p>
                            Instituído pela Lei Estadual Nº13.811, de 16 de agosto de 2006, o Mecenato Estadual é o fomento
                            a atividades culturais por meio da conjugação de recursos do poder público estadual com os de
                            instituições privadas, no qual ocorra renúncia fiscal nas modalidades doação, patrocínio e
                            investimento.
                        </p>
                        <div class="row">
                            <div class="col-lg-6">

                                <ul class="list-group" v-for="(item, index) in linkceficleft">
                                    <a :href="item.link" :key="index" class="list-group-item list-group-item-action"
                                        target="_blank">
                                        <i class="fa fa-check"></i> {{ item.title }}
                                    </a>
                                </ul>
                            </div>
                            <div class="col-lg-6">

                                <ul class="list-group" v-for="(item, index) in linkceficright">
                                    <a :href="item.link" :key="index" class="list-group-item list-group-item-action"
                                        target="_blank">
                                        <i class="fa fa-check"></i> {{ item.title }}
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <p class="mt-4">
                            <label class="fs-5">Quem pode incentivar?</label> <br>
                            Empresa contribuinte de ICMS no Ceará e que não gozem de nenhuma dedução legal que
                             ultrapasse os 70% (setenta por cento) do imposto ou que tenha muita substituição 
                             tributária e que se encontra em situação de regularidade fiscal com a Secretaria da 
                             Fazenda Estadual do Ceará e com a Receita Federal.
                        </p>
                        <p>
                            <label class="fs-5">Como funciona o incentivo fiscal?</label> <br>
                            O Contribuinte, em situação de regularidade fiscal com a SEFAZ, pode deduzir o ICMS 
                            até o limite de 2% (dois por cento)* devido mensalmente e de acordo com o valor constante 
                            do Certificado Fiscal de Incentivo à Cultura (CEFIC), que é definido pela Secult com base
                             no limite financeiro mensal no limite de 2% do recolhimento do ICMS dos últimos 6 meses 
                             do contribuinte.
                        </p>
                        <p>
                            <label class="fs-5">Quais projetos podem ser incentivados?</label> <br>
                            Os projetos inscritos e aprovados no edital Mecenas do Ceará, lançado anualmente pela
                             Secretaria da Cultura do Estado do Ceará. A autorização para captação de recursos
                              ocorrerá após homologação dos projetos pela Comissão 
                              Estadual de Incentivo à Cultura – CEIC, 
                              responsável pela avaliação e decisão sobre os projetos submetidos ao Mecenato Estadual. 
                              A CEIC é vinculada ao Conselho Estadual de Política Cultural do Ceará e é formada por
                               representantes da Secult e por representantes indicados pelas associações civis e
                                entidades escolhidos por meio de editais públicos da Secult
                        </p>
                        <p>
                            <label class="fs-5">Quais os benefícios para o incentivador?</label> <br>
                            O incentivo ao setor cultural tem impacto principalmente sobre a imagem institucional
                             da empresa, pois ela poderá agregar valor a sua marca, reforçar seu papel na localidade 
                             onde atua, desenvolver novas oportunidades de negócio e reforçar a política de
                              relacionamento da empresa com outras esferas do governo e, principalmente, com os 
                              artistas e grupos artísticos.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    </div>
    <DefaultFooter />
</template>


<style>
/* .list-group-item:hover {} */
</style>