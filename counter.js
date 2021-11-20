let count = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener("click", function(button){

        const styles = button.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase'))  {
            count++; 
         } else {
             count = 0;
        }
        value.textContent = count;
    });
});