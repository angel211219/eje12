document.getElementById('checkBtn').addEventListener('click', checkAnagram);

function checkAnagram() {
    // Obtener las cadenas del input
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;

    // Llamar a la función para verificar si son anagramas
    const result = areAnagrams(str1, str2);

    // Mostrar el resultado
    document.getElementById('result').innerText = result ? 'Son anagramas' : 'No son anagramas';
}

function areAnagrams(string1, string2) {
    // Eliminar espacios y convertir a minúsculas
    const normalize = str => str.replace(/\s/g, '').toLowerCase();

    // Ordenar las cadenas y compararlas
    const sortedString1 = normalize(string1).split('').sort().join('');
    const sortedString2 = normalize(string2).split('').sort().join('');

    // Devolver verdadero si son anagramas
    return sortedString1 === sortedString2;
}
