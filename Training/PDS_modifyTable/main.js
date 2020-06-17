
const dataArray = data
const titleArray = frameTitleModification

$(document).ready(function() {    
    let cnt = 0;
    titleArray.forEach(function(headers) {        
        $('#headerRow'+'').append(`<div class='mainTitle' id='T${cnt++}'>${headers.title}</div>`)
    })

    cnt = 0
    dataArray.forEach(function(items) {
        if (items.type == 'feed') {items.primary = items.secondary = items.tied = ''}

        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.unit}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.type}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.table}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.primary}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.secondary}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.tied}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.latched}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.activityStatus}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.creationDate}</div>`)
        $('#dataRow'+'').append(`<div class='borderMod' id='fb${cnt++}'>${items.userid}</div>`)
        $('#dataRow'+'').append(`<div class='border' id='fb${cnt++}'>edit</div>`)
    })
    
})

