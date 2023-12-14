'use strict'
/*Зробити функцію-контсруктор для сутності Користувач (User).
У користувача мають бути наступні властивості:
ім'я
прізвище
стать (чоловіча або жіноча)
кількість повідомлень
У користувача мають бути такі методи:
Метод для отримання всіх даних про користувача у рядку (Коистувач такий-то такої-то статі написав стількі-то повідомлень). У кожного користувача метод має повертати саме його дані
Метод написання нового повідомлення. Має приймати повідомлення т повертати рядок (Користувач такий-то написав текстПовідомлення). Також має збільшувати кількість повідомлень.*/


function User (name, surname, isMale, messages) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.messages = messages;
    this.getUserDetails = () => {
      return `User name:  ${this.name} ${this.surname} gender: ' ${this.isMale? 'male': 'female'} wrote messages: ${this.messages}`;
      },
    this.newMessages = (text) => {
      this.messages++;
      return `User: ${this.name} wrote ${text}`;
    } 
};

let user1 = new User('Anna', 'Саt', true, 12);
console.log(user1.newMessages('good weather'));
console.log(user1.getUserDetails());

let user2 = new User('Sem', 'Dog', false, 1);
console.log(user2.getUserDetails());