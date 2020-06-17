function SaveData () {
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var response = '';

    if (userName == '' || password == '') response = 'An invalid username or password was entered';
    document.getElementById('message').innerHTML = response;
};