// function getSqrt(num?: unknown): void{
//     if(typeof num === 'number'){
//         if(num < 0){
//             console.log('Введіть додатнє число.');
//         }
//         else{
//             console.log(Math.sqrt(num));
//         }
//     }
//     else if(num === undefined){
//         console.log('Будь ласка, введіть число!');
//     }
//     else{
//         console.log('Повинно бути числове значення.');
//     }
// }

function getSqrt(num?: number): void{
    console.log(num === undefined
        ?'Будь ласка, введіть число!'
        :typeof num === 'number'
            ?num < 0
                ?'Введіть додатнє число.'
                : Math.sqrt(num)
            :'Повинно бути числове значення.'
    )
}

getSqrt(6)