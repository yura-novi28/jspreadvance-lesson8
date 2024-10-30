let inputBad = document.querySelector('#inputTextBad') as HTMLInputElement;
let textareaCenzor = document.querySelector('#textareaCenzor') as HTMLTextAreaElement;
let textValueBad = document.querySelector('#textValueBad') as HTMLParagraphElement;
let badWords: Array<string> = [];


function checkBadWords(arr: Array<string>, txt: string): boolean{
    let check = arr.every((item) => item !== txt);
    return check;
}

function addBadWordsValue(arr: Array <string>): void{
    let textArr: string = arr.join(',');
    inputBad.value = '';
    textValueBad.textContent = textArr;
}

function addBadWords(): void{
    let inputValue = inputBad.value.trim();
    if(inputValue !== ''){
        inputBad.placeholder = 'word here...';
        inputBad.style.border = '1px solid darkgray';
        if(checkBadWords(badWords, inputValue)){
            badWords.push(inputValue);
            addBadWordsValue(badWords);
            console.log(badWords)
        }
    }
    else{
        inputBad.placeholder = 'Please write a word!';
        inputBad.style.border = '1px solid red';
    }
}

function resetBadWords(): void{
    textValueBad.textContent = '';
    badWords = [];
}

function addCenzorStar(arr: Array<string>): Array <string>{
    arr.forEach((item, index, arr) => {
        badWords.forEach(check => {
            if(check === item){
                arr[index] = '*'.repeat(item.length);
            }
        })
    })
    return arr;
}


function cenzorTextarea(): void{
    let textareaValue = textareaCenzor.value;
    if(textareaValue.trim() !== ''){
        textareaCenzor.placeholder = 'text here...';
        textareaCenzor.style.border = '1px solid darkgray';
        let arrTextCenzor: Array<string> = addCenzorStar(textareaValue.split(' '));
        textareaCenzor.value = `${arrTextCenzor.join(' ')}`;
        textareaCenzor.style.border = '1px solid lightgreen';
    }
    else{
        textareaCenzor.placeholder = 'Please write a text!';
        textareaCenzor.style.border = '1px solid red';
    }
}

document.querySelector('#buttonAdd')?.addEventListener('click', addBadWords);
document.querySelector('#buttonReset')?.addEventListener('click', resetBadWords);
document.querySelector('#buttonCenzor')?.addEventListener('click', cenzorTextarea);