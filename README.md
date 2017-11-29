### JS ECMAScript 6
## Estrutura básica de diretórios
```
js-oo/client/css/bootstrap.css

js-oo/client/js/app/controllers/
js-oo/client/js/app/helpers/
js-oo/client/js/app/models/
js-oo/client/js/app/views/

js-oo/client/index.html
```

#Commits
convenção de encapsulamento, get somente leitura, Object.freeze(objeto) private this, 
imutar a classe Date(), programação defensiva, let escopo de bloco, mecanismo da Controller, 
receber form por querySelector

#Trabalhar com a classe Date()
form input: '2020-11-25'
let dataErro = new Date(input);
dataErro
Fri Nov 24 2017 22:00:00 GMT-0200

let data2 = new Date(input.split('-'));
data2
Sat Nov 25 2017 00:00:00 GMT-0200

let data22 = new Date('2017,11,25')
data22
Sat Nov 25 2017 00:00:00 GMT-0200

let dErro = new Date(2017,11,25)
dErro
Mon Dec 25 2017 00:00:00 GMT-0200 

