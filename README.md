<div style="display: flex;" align="center"><br>
<h1>FindBus</h1>
<div style="display:flex; flex-direction:"column"">
<img align="center" alt="FindBus" height="200" width="200" src="https://user-images.githubusercontent.com/121250213/233269292-1d83ef32-c6ff-4399-acd1-659bc1c39790.jpeg">
</div>
<br>
Aplicativo para facilitar as informações de transporte público (Localização em Tempo Real, Horários)
</div>



## O que é este projeto?
O FindBus foi uma ideia de TCC do ano de 2022 na Etec Euro Albino de Souza, o objetivo era de que conseguíssemos "rastrear" os ônibus, para que os usuários conseguissem mais informação
e transparência, facilitando assim o transporte público. Foi dividido em dois aplicativos, o do usuário e o do motorista.

### Usuário

O app do usuário contém uma interface amigável e intuitiva, onde o usuário pode navegar e coletar a informação que deseja sobre o transporte correspondente.

### Motorista
O app do motorista contém uma interface única, para envio da localização correspondente a do celular atual.

## Instalação
Instale o arquivo "Find_Bus OFC.aia" em seu Kodular, então gere o APK correspondente, este aplicativo será o do usuário.
É necessário que você tenha instalado o Node.JS e o Yarn em seu computador, pois foi utilizado React Native nesta aplicação.
Com estes arquivos do repositório em uma pasta, é necessário gerar o APK para celular com o comando do Expo, por exemplo com:

```
expo-build:android
```

Este APK feito em React Native será o do motorista, onde irá capturar a localização do celular para o banco de dados, que enviará para o usuário em intervalos pequenos de tempo.

## Tecnologia Utilizada
<div style="display: inline_block" align="center"><br>
  <center><img align="center" alt="React Native" height="100" width="100" src="https://user-images.githubusercontent.com/121250213/233266357-1dfb0963-40a9-40b7-97cb-47d45d857429.png">
  </center>
</div>

