const dataArray = data
const titleArray = frameTitle

$(document).ready(function() {

    titleArray.forEach(function(titles) {
        $('#headerRow').append(`<div class='mainTitle'>${titles.title}</div>`)
    })

    dataArray.forEach(function(items) {        
        $('#unitRow').append(`<div class='border'>${items.unit}</div>`)
        $('#typeRow').append(`<div class='border'>${items.type}</div>`)
        $('#tableRow').append(`<div class='border'>${items.table}</div>`)
        $('#primaryRow').append(`<div class='border'>${items.primary}</div>`)
        $('#secondaryRow').append(`<div class='border'>${items.secondary}</div>`)
        $('#tiedRow').append(`<div class='border'>${items.tied}</div>`)
        $('#latchedRow').append(`<div class='border'>${items.latched}</div>`)
        $('#activityStatusRow').append(`<div class='border'>${items.activityStatus}</div>`)
        $('#creationDateRow').append(`<div class='border'>${items.creationDate}</div>`)
        $('#useridRow').append(`<div class='border'>"TODO"</div>`)
        $('#editRow').append(`<div class='border'>edit</div>`)
        $('#deleteRow').append(`<div class='border'>&#9249</div>`)
    })
})



