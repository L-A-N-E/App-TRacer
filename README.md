<h1 align="center"> :zap: TRACER :racing_car:</h1> 

![banner](https://github.com/L-A-N-E/CP2_Edge_1SEM/assets/153787379/132308ff-27a0-45e7-8323-80d9103f2390)

## Índice :page_with_curl:

* [Descrição do Projeto](#descrição-do-projeto-bookmark_tabs)
* [Tecnologias Utilizadas](#tecnologias-utilizadas-calling)
* [Design do Aplicativo](#design-do-aplicativo-file_folder)
* [Instalação](#instalação-desktop_computer)
* [Execução](#execução-floppy_disk)
* [Dependências do Projeto](#dependências-do-projeto-gear)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto-globe_with_meridians)
  
## Descrição do Projeto :bookmark_tabs:

<p>Nós da LANE, desenvolvemos um aplicativo em React Native, nomeado TRacer, com o objetivo de popularizar a Fórmula E por meio de uma competição online de pontos. Os usuários poderão selecionar dois pilotos para compor sua equipe e acumular pontos com base no desempenho deles nas corridas, que será medido pelo tempo de volta.</p>

<p>Esses dados serão captados por outro projeto nosso, o TrackVision. Embora a primeira versão do aplicativo não consiga coletar essas informações, planejamos, em futuras atualizações, permitir que os usuários visualizem o histórico de pontos dos pilotos em seus perfis, possibilitando um acompanhamento mais próximo e em tempo real.</p>

<p>Além disso, na próxima versão do aplicativo, os usuários terão acesso a gráficos interativos que mostrarão o desempenho dos pilotos, incluindo velocidade, aceleração e tempo por volta. Esses gráficos serão gerados por nosso software em Python, enriquecendo a experiência do usuário e proporcionando uma análise detalhada das corridas.</p>

## Tecnologias Utilizadas :calling:

<p align="center">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
    <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
</p>

## Design do Aplicativo :file_folder:

Acesse o Figma de nosso projeto [aqui](https://www.figma.com/design/0ndghp1jZFHKjSobTvncFy/App-TRacer?node-id=0-1&t=hvMpMv9YVwOJKlKI-1)!

## Instalação :desktop_computer:

```bash
    git clone https://github.com/L-A-N-E/App-TRacer

    cd App-TRacer

    npm install
```

## Execução :floppy_disk:

```bash
    npm start
    npm andorid # Rodar em Android
    npm ios # Rodar em IPhone
```
*OBS: Na versão atual, foi feita principalmente para Android, no AndroidSimulator com o dispositivo Pixel 4a*

## Dependências do Projeto :gear:

- React Native Async Storage: ```npm install @react-native-async-storage/async-storage```
    - Baixamos esse pacote para poder concertar um erro que não era fatal para funcionalidade do projeto para não termos problemas futuros;

- React Native Firebase:
    1. App: ```npm install @react-native-firebase/app```
    2. Auth: ```npm install @react-native-firebase/auth```
    3. Firebase:  ```npm install firebase```
    - Utilizamos esses pacotes para conectar o Firebase ao nosso aplicativo, como fazer a autenticação do usuário.

- React Navigation:
    1. Native: ```npm install @react-navigation/native```
    2. Stack: ```npm install @react-navigation/stack```
    3. Bottom-Tabs: ``npm install @react-navigation/bottom-tabs``
    3. React Native Screens: ```npm install react-native-screens```
    - Utilizamos esses pacotes para navegar entre as telas do aplicativo

-  Styled-Components: ```npm install styled-components```
    - Baixamos esse pacote para estilizar o nosso projeto
- Expo Vector Icons: ``@expo/vector-icons``
    - Utilizamos para colocar os ícones na aba de navegação!

## Pessoas Desenvolvedoras do Projeto :globe_with_meridians:

| [<img src="https://avatars.githubusercontent.com/u/101829188?v=4" width=115><br><sub>Alice Santos Bulhões</sub>](https://github.com/AliceSBulhoes) |  [<img src="https://avatars.githubusercontent.com/u/163866552?v=4" width=115><br><sub>Eduardo Oliveira Cardoso Madid</sub>](https://github.com/EduardoMadid) |  [<img src="https://avatars.githubusercontent.com/u/148162404?v=4" width=115><br><sub>Lucas Henzo Ide Yuki</sub>](https://github.com/LucasYuki1) | [<img src="https://avatars.githubusercontent.com/u/153787379?v=4" width=115><br><sub>Nicolas Haubricht Hainfellner</sub>](https://github.com/NicolasHaubricht) |
| :---: | :---: | :---: | :---: |
| RM:554499 | RM:556349 | RM:554865 | RM:556259 |
