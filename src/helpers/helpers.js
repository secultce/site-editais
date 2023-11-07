import moment from 'moment';
moment.locale('pt-br');

async function getNoticeOpen()
{
    const codeAgent = import.meta.env.VITE_ID_AGENTS_SECULT
    const urlMata = import.meta.env.VITE_API_MAPA_URL

    // console.log(codeAgent)
    const dataNoticeOpen = [];
    const period = `${'registrationFrom=LTE('+moment().format('YYYY-MM-DD')+')&registrationTo=GTE('+moment().format('YYYY-MM-DD')+')'}`;
    const field = '@select=id,singleUrl,name,subTitle,type,shortDescription,terms';

    const dataF = await fetch(urlMata + '/api/opportunity/find/?&'+period+'&@order=createTimestamp%20DESC&'+field+'&@files=(avatar.avatarBig):url&@page=1&status=eq(1)&owner=IN('+codeAgent+')')
    .then(res => {
        return res.json()
    })
    .then(function(data) {

        return data
        // console.log(dataNoticeOpen)
    })
    .catch(err => {
        console.log({err})
    })

    return dataF
}


async function getNoticeClosed()
{
    const period = `${'registrationTo=LTE('+moment().format('YYYY-MM-DD')+')'}` //menor que a data do dia
    const field = '@select=id,singleUrl,name,publishedRegistrations,shortDescription' //campos que deseja pelo api
    const year = moment().format("YYYY")+'-01-01,'+moment().format("YYYY")+'-12-31' //ano inteiro, variando somente o ano
    const codeAgent = import.meta.env.VITE_ID_AGENTS_SECULT //Agentes dono das oportunidades
    const dataClosed = await fetch(
        import.meta.env.VITE_API_MAPA_URL + 
        'api/opportunity/find/?'+
        period + '&@order=createTimestamp%20DESC&'+
        field + '&@files=(avatar.avatarBig):url,description&@page=1&registrationFrom=BET('+year+')&owner=IN('+codeAgent+')&publishedRegistrations=EQ(true)'
    )
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        //
        return data
    })
    .catch(err => {
        console.log('getNoticeClosed ', err)
    })

    return dataClosed
}

async function getNoticePublic()
{
    const period = `${'registrationFrom=GT('+moment().format('YYYY-MM-DD')+')&registrationTo=GT('+moment().format('YYYY-MM-DD')+')'}`;
    const field = '@select=id,singleUrl,name' //campos que deseja pelo api
    const codeAgent = import.meta.env.VITE_ID_AGENTS_SECULT //Agentes dono das oportunidades
    const dataClosed = await fetch(
        import.meta.env.VITE_API_MAPA_URL + 
        'api/opportunity/find/?'+
        period + '&@order=createTimestamp%20DESC&'+
        field + '&@files=(avatar.avatarBig):url,description&owner=IN('+codeAgent+')'
    )
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        //
        return data
    })
    .catch(err => {
        console.log('getNoticePublic ', err)
    })

    return dataClosed
}

async function getNoticeProcess()
{
    const year = moment().format("YYYY")+'-01-01,'+moment().format("YYYY")+'-12-31' //ano inteiro, variando somente o ano
    const period = `${'registrationTo=LT('+moment().format('YYYY-MM-DD')+')'}`;
    const field = '@select=id,singleUrl,name,shortDescription,publishedRegistrations' //campos que deseja pelo api
    const codeAgent = import.meta.env.VITE_ID_AGENTS_SECULT //Agentes dono das oportunidades
    const dataNotice = await fetch(
        import.meta.env.VITE_API_MAPA_URL + 
        'api/opportunity/find/?'+
        period + '&@order=createTimestamp%20DESC&'+
        field + '&@files=(avatar.avatarBig):url,description&registrationFrom=BET('+year+')&owner=IN('+codeAgent+')&publishedRegistrations=EQ(false)'
    )
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        //
        return data
    })
    .catch(err => {
        console.log('getNoticeProcess ', err)
    })

    return dataNotice
}



export default {
    getNoticeOpen,
    getNoticeClosed,
    getNoticePublic,
    getNoticeProcess
}
