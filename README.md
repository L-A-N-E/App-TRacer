<h1 align="center"> :zap: TRACER :racing_car:</h1> 

![banner](https://github.com/L-A-N-E/CP2_Edge_1SEM/assets/153787379/132308ff-27a0-45e7-8323-80d9103f2390)

## Índice :page_with_curl:

* [Descrição do Projeto](#descrição-do-projeto-bookmark_tabs)
* [Tecnologias Utilizadas](#tecnologias-utilizadas-calling)
* [Design do Aplicativo](#design-do-aplicativo-file_folder)
* [Instalação](#instalação-desktop_computer)
* [Execução](#execução-floppy_disk)
* [Como configurar o Android Simulator](#como-configurar-o-android-simulator-iphone)
  * [Instalando o Chocolatey e o Android Simulator](#instalando-o-chocolatey-e-o-android-simulator-inbox_tray)
  * [Configurar um emulador](#configurar-um-emulador-mobile_phone_off)
  * [Inicialização do Android Simulator](#inicialização-do-android-simulator-arrow_forward)
* [Dependências do Projeto](#dependências-do-projeto-gear)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto-globe_with_meridians)
  
## Descrição do Projeto :bookmark_tabs:

<p>Nós da LANE, desenvolvemos um aplicativo em React Native, nomeado TRacer, com o objetivo de popularizar a Fórmula E por meio de uma competição online de pontos. Os usuários poderão selecionar dois pilotos para compor sua equipe e acumular pontos com base no desempenho deles nas corridas, que será medido pelo tempo de volta.</p>

<p>Esses dados serão captados por outro projeto nosso, o TrackVision. Embora a primeira versão do aplicativo não consiga coletar essas informações, planejamos, em futuras atualizações, permitir que os usuários visualizem o histórico de pontos dos pilotos em seus perfis, possibilitando um acompanhamento mais próximo e em tempo real.</p>

<p>Além disso, na próxima versão do aplicativo, os usuários terão acesso a gráficos interativos que mostrarão o desempenho dos pilotos, incluindo velocidade, aceleração e tempo por volta. Esses gráficos serão gerados por nosso software em Python, enriquecendo a experiência do usuário e proporcionando uma análise detalhada das corridas.</p>

## Tecnologias Utilizadas :calling:

<p align="center">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
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

## Como configurar o Android Simulator :iphone:

### Instalando o Chocolatey e o Android Simulator :inbox_tray:

- ``1.`` Instale o Chocolatey seguindo [estas instruções](https://chocolatey.org/install);
- ``2.`` Instale o [Android Simulator](https://developer.android.com/studio?hl=pt-br);
- ``3.`` Abra o Android Studio Setup . Em **Select components to install** , selecione Android Studio e Android Virtual Device. Em seguida, clique em **Next**;
- ``4.`` No Assistente de configuração do Android Studio, em **Tipo de instalação** , selecione **Padrão** e clique em **Avançar**;
      <details>
        <summary>Imagem de ilustração para o passo a cima</summary>
        <img src="https://github.com/user-attachments/assets/69aab1ca-87ab-4a00-aad7-f6c3b4550d5b" alt="Install Android Studio">
      </details>
- ``5.`` O Android Studio Setup Wizard pedirá que você verifique as configurações, como a versão do Android SDK, platform-tools e assim por diante. Clique em **Next** depois de verificar;
- ``6.`` Na próxima janela, aceite licenças para todos os componentes disponíveis;
- ``7.`` Após a conclusão da instalação das ferramentas, configure a ``ANDROID_HOME`` variável de ambiente. Vá para **Painel de Controle do Windows > Contas de Usuário > Contas de Usuário (novamente) > Alterar minhas variáveis ​​de ambiente** e clique em **Novo** para criar uma nova ``ANDROID_HOME`` variável de usuário. O valor dessa variável apontará para o caminho para seu Android SDK:
  - ``7.1.`` Por padrão, o Android SDK é instalado no seguinte local: ``%LOCALAPPDATA%\Android\Sdk``
  - ``7.2.`` Para ter mais certeza, você pode encontrar o caminho vá para **Configurações > Idiomas** e **Frameworks > Android SDK**.
      <details>
        <summary>Veja a localização ao lado de Android SDK Location</summary>
        <img src="https://github.com/user-attachments/assets/9da22ce4-9bee-42b0-9ae6-7f9c8a3c2f09" alt="Localização Andoird SDK">
      </details>
- ``8.`` Para verificar se a nova variável de ambiente foi carregada, abra o **PowerShell** e copie e cole o seguinte comando para verificar as variáveis de ambiente, e verifique se o ``ANDROID_HOME`` está entre elas:
  ```bash
  Get-ChildItem -Path Env: 
  ```
- ``9.`` Para adicionar platform-tools ao caminho, vá para **Painel de Controle do Windows > Contas de Usuário > Contas de Usuário (novamente) > Alterar minhas variáveis ​​de ambiente > Caminho > Editar > Novo** e adicione o caminho para platform-tools à lista.
  - ``9.1.`` Por padrão, as ferramentas da plataforma são instaladas no seguinte local: ``%LOCALAPPDATA%\Android\Sdk\platform-tools`` 
      <details>
        <summary>Veja o caminho para platform-tools</summary>
        <img src="https://github.com/user-attachments/assets/6baa2326-6554-4721-947e-3a49a396ee0a" alt="Caminho Platform-Tools">
      </details>

### Configurar um emulador :mobile_phone_off:

- ``1.`` Na tela principal do Android Studio, clique em Mais ações e depois em **Gerenciador de dispositivos virtuais** no menu suspenso.
      <details>
        <summary>Veja o caminho para os dispositivos virtuais</summary>
        <img src="https://github.com/user-attachments/assets/bf932687-ac99-4c72-b482-9d24ecd3a728" alt="Localização Dispositivos Virtuais">
      </details>
- ``2.`` Clique no botão **Criar dispositivo**:
- ``3.`` Em **Select Hardware**, escolha o tipo **Pixel4a**.
      <details>
        <summary>Veja o <strong>Pixel4a</strong> selecionado no Android Simulator</summary>
        <img src="https://github.com/user-attachments/assets/3843b081-972f-4847-80ab-2341bb7180a6" alt="Pixel 4a Selecionado">
      </details>
- ``4.`` Selecione o sistema operacional ``Tiramisu``para carregar no emulador e baixe a imagem.
      <details>
        <summary>Veja o sistema operacional Tiramisu selecionado</summary>
        <img src="https://github.com/user-attachments/assets/20b5bf9a-0b8a-4821-86c5-ba7300f41ccb" alt="Tiramisu Selecionado">
      </details>
- ``5.`` Altere quaisquer outras configurações que desejar e pressione **Finish** para criar o emulador. 

### Inicialização do Android Simulator :arrow_forward:

- Ao iniciar o programa, aparecerá a opção ``Press a │ open Android``, então pressione ``a`` para iniciar o Android Simulator via **Terminal**;
  <details>
    <summary>Veja a opção para iniciar o Android Simulator</summary>
    <img src="https://github.com/user-attachments/assets/c866552f-cb96-4e1e-a91f-6045e6dcc609" alt="Opção Android">
  </details>
- Se você não quiser iniciar assim, você poderá iniciar no Android Simulator antes para depois selecionar no terminal a opção ``Press a │ open Android``;
  <details>
    <summary>Veja a opção para iniciar o emulador no Android Simulator</summary>
    <img src="https://github.com/user-attachments/assets/302fa42d-f65f-4adb-9685-d01f6b5cffb0" alt="Iniciar Emulador">
  </details>

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
