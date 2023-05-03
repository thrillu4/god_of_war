export const formValidation = (CardNumber, CardDate, CardCCV) => {
    const cardNumber = document.getElementById(CardNumber),
        cardDate = document.getElementById(CardDate),
        cardCCV = document.getElementById(CardCCV);

        cardNumber.addEventListener("input", function(event) {
          const value = event.target.value;
          const digitsOnly = value.replace(/[^\d]/g, "");
          let formattedValue = '';
        
          // Проверяем, удаляются ли символы из поля ввода
          if (value.length > formattedValue.length && digitsOnly.length > 0) {
              formattedValue = digitsOnly.length > 0 ? digitsOnly.match(/.{1,4}/g).join(' ') : '';
            } else {
              formattedValue = digitsOnly.length > 0 ? digitsOnly.slice(0, 16).match(/.{1,4}/g).join(' ') : '';
            }
            event.target.value = formattedValue;
          });
        
          cardDate.addEventListener("keydown", function(event) {
            const value = cardDate.value;
            const selectionStart = cardDate.selectionStart;
          
            if (event.key === "Backspace") {
              if (selectionStart === 3) { // курсор перед дробью
                event.preventDefault(); // отменяем стандартное поведение
                cardDate.value = value.slice(0, 2); // удаляем дробь и последнюю цифру месяца
              } else if (selectionStart === 2) { // курсор после дроби
                event.preventDefault(); // отменяем стандартное поведение
                cardDate.value = value.slice(0, 1) + value.slice(3); // удаляем дробь и первую цифру года
              }
            }
          });

          cardDate.addEventListener("input", function() {
            const value = cardDate.value.replace(/\D/g, ""); // удаляем все, кроме цифр
            const month = value.slice(0, 2);
            const year = value.slice(2, 4);
            cardDate.value = `${month}/${year}`;
          });

          cardCCV.addEventListener("input", function() {
            const value = cardCCV.value.replace(/\D/g, ""); // удаляем все, кроме цифр
            cardCCV.value = value
          });
}