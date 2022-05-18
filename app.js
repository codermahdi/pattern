// # Create an email pattern
let email = "mahdi@gmail.com";
let emailPattern = /^[a-z0-9._]*@(excelbd.com|gmail.com|yohoo.com)$/;
console.log(emailPattern.test(email));

// # Create a  username pattern
let username = "mahdi";
let userPattern = /[a-z0-9]*/;
console.log(userPattern.test(username));

// # Create a Bangladeshi phone number pattern
let bdNumber = "01521200655";
let numberPattern = /^(\+8801|008801|01)[0-9]{9}$/;
console.log(numberPattern.test(bdNumber));

// # Create a password pattern
let uPass = "12345678";
let passwordPatter = /[a-z0-9~!@#$%^&*()_+=-?.]{8,14}/;
console.log(passwordPatter.test(uPass));

// # Create a zipcode pattern
let zipcode = "1256";
let zipPattern = /^[0-9]{4}$/;
console.log(zipPattern.test(zipcode));
