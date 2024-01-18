// Your existing script.js logic

function calculateLuasPersegi() {
    // Add logic for calculating Luas Persegi here
    var sisiValue = document.getElementById('sisiluas').value;

    // Example: Display the result in the result-luas-persegi div
    // document.getElementById('result-luas-persegi1').innerText = 'L = S X S'+ (sisiValue * sisiValue) ;
    document.getElementById('result-luas-persegi').innerHTML = 'L = S X S' + '<br>' + 'L = ' + (sisiValue) +' X '+ (sisiValue) + '<br>' + 'Luas Persegi = ' + (sisiValue * sisiValue);
    document.getElementById('result-luas-persegi').style.display = 'block';
}

function resetLuasPersegi() {
    // Add logic to reset Luas Persegi form and result here
    document.getElementById('luas-persegi').reset();
    document.getElementById('result-luas-persegi').style.display = 'none';
}

function calculateKelilingPersegi() {
    // Add logic for calculating Keliling Persegi here
    var sisiValue = document.getElementById('sisikeliling').value;

    // Example: Display the result in the result-keliling-persegi div
    document.getElementById('result-keliling-persegi').innerText = 'Keliling Persegi: ' + (sisiValue * 4);
    document.getElementById('result-keliling-persegi').style.display = 'block';
}

function resetKelilingPersegi() {
    // Add logic to reset Keliling Persegi form and result here
    document.getElementById('keliling-persegi').reset();
    document.getElementById('result-keliling-persegi').style.display = 'none';
}
