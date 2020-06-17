
function openModal() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('myBttn');
    var span = document.getElementsByClassName('close')[0];
    
    console.log('modal: ' + modal)
    console.log('btn: ' + btn)
    console.log('span: ' + span)

    btn.onclick = function() {
        modal.style.display = 'block'
    } 
    
    span.onclick = function() {
        modal.style.display = 'none'
    } 
    
    window.onclick = function(event) {
        if (event.target == modal) modal.style.display = 'none'
    } 

}

