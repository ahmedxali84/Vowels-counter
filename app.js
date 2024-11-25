function vowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
        else if (char === 'A'|| char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        } 
    }
    return count;
}

function mybutton() {
    let vowelss = document.getElementById('text').value;
    let count = vowels(vowelss);
document.getElementById('div').innerHTML = "No. of Vowels : " + count;
}