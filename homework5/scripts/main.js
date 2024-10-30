let inputBad = document.querySelector('#inputTextBad');
let textareaCenzor = document.querySelector('#textareaCenzor');
let textValueBad = document.querySelector('#textValueBad');
let badWords = [];
function checkBadWords(arr, txt) {
    let check = arr.every((item) => item !== txt);
    return check;
}
function addBadWordsValue(arr) {
    let textArr = arr.join(',');
    inputBad.value = '';
    textValueBad.textContent = textArr;
}
function addBadWords() {
    let inputValue = inputBad.value.trim();
    if (inputValue !== '') {
        inputBad.placeholder = 'word here...';
        inputBad.style.border = '1px solid darkgray';
        if (checkBadWords(badWords, inputValue)) {
            badWords.push(inputValue);
            addBadWordsValue(badWords);
            console.log(badWords);
        }
    }
    else {
        inputBad.placeholder = 'Please write a word!';
        inputBad.style.border = '1px solid red';
    }
}
function resetBadWords() {
    textValueBad.textContent = '';
    badWords = [];
}
function addCenzorStar(arr) {
    arr.forEach((item, index, arr) => {
        badWords.forEach(check => {
            if (check === item) {
                arr[index] = '*'.repeat(item.length);
            }
        });
    });
    return arr;
}
function cenzorTextarea() {
    let textareaValue = textareaCenzor.value;
    if (textareaValue.trim() !== '') {
        textareaCenzor.placeholder = 'text here...';
        textareaCenzor.style.border = '1px solid darkgray';
        let arrTextCenzor = addCenzorStar(textareaValue.split(' '));
        textareaCenzor.value = `${arrTextCenzor.join(' ')}`;
        textareaCenzor.style.border = '1px solid lightgreen';
    }
    else {
        textareaCenzor.placeholder = 'Please write a text!';
        textareaCenzor.style.border = '1px solid red';
    }
}
document.querySelector('#buttonAdd')?.addEventListener('click', addBadWords);
document.querySelector('#buttonReset')?.addEventListener('click', resetBadWords);
document.querySelector('#buttonCenzor')?.addEventListener('click', cenzorTextarea);
