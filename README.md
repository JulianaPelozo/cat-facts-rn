# Bem vindo ao repositório Cat Facts App!

🐈 Cat Facts App
Bem-vindo ao Cat Facts App! Este é um aplicativo móvel simples, construído com React Native e Expo, que fornece fatos aleatórios e interessantes sobre gatos, utilizando a API Cat Facts.

O projeto utiliza o Expo Router para uma navegação baseada em arquivos, tornando a gestão de rotas simples e intuitiva.

https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif

✨ Funcionalidades
Fatos Aleatórios: Busca e exibe um fato aleatório sobre gatos ao pressionar um botão.

Navegação Rápida: Utiliza o Expo Router para gerenciar telas (por exemplo, Tela Inicial e Sobre).

Design Responsivo: Interface otimizada para dispositivos móveis usando componentes React Native.

🚀 Tecnologias Utilizadas
React Native: Framework para desenvolvimento de aplicativos móveis.

Expo: Plataforma para construir, implantar e iterar rapidamente em aplicativos React Native.

Expo Router: Sistema de roteamento baseado em arquivos para aplicativos Expo.

Cat Facts API: API pública e gratuita para obter dados de fatos sobre gatos.

Axios / Fetch: Para requisições HTTP (API calls).

⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js: Versão LTS recomendada.

npm (ou yarn): Gerenciador de pacotes.

Expo Go App: Instalado no seu dispositivo móvel (Android/iOS) ou um emulador/simulador.

📦 Instalação e Execução
Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

1. Clonar o Repositório
bash
git clone [URL_DO_SEU_REPOSITORIO]
cd CatFactsApp
2. Instalar Dependências
Instale todas as dependências do projeto usando npm ou yarn:

bash
npm install
# ou
yarn install
3. Iniciar o Servidor de Desenvolvimento
Execute o seguinte comando para iniciar o servidor de desenvolvimento do Expo:

bash
npx expo start
4. Rodar o Aplicativo
Após o comando de inicialização, um código QR será exibido no seu terminal (e no navegador).

Dispositivo Físico: Abra o aplicativo Expo Go no seu celular e escaneie o código QR.

Emulador/Simulador: Pressione a para Android ou i para iOS no terminal para iniciar o aplicativo no emulador/simulador.

https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif

🌐 API Utilizada
O projeto utiliza a API pública e gratuita Cat Facts para buscar os fatos.

Endpoint Principal: https://catfact.ninja/fact

Documentação: https://catfact.ninja/

O endpoint é simples e retorna um objeto JSON com o fato e o tamanho da string.

json
{
  "fact": "A group of cats is called a clowder.",
  "length": 38
}
📝 Estrutura do Projeto
A estrutura de pastas baseada no Expo Router:

text
.
├── app/                  # Rotas e telas do Expo Router
│   ├── index.js          # Tela Inicial
│   └── about.js          # Tela Sobre
├── components/           # Componentes reutilizáveis (e.g., BotaoFato)
├── hooks/                # Lógica customizada (e.g., useCatFact)
├── assets/               # Imagens, ícones e outros recursos
├── node_modules/
├── package.json
└── app.json
🎯 Exemplo de Uso
https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif

Abra o aplicativo

Toque no botão "Obter Fato sobre Gatos"

Leia o fato interessante que aparece na tela

Explore outras telas através da navegação

🤝 Contribuições
https://media.giphy.com/media/3oriO13ytjLMr2R31u/giphy.gif

Sinta-se à vontade para contribuir, reportar bugs ou sugerir melhorias!

Áreas onde você pode ajudar:

Adicionar novos componentes visuais

Melhorar a experiência do usuário

Adicionar mais funcionalidades

Otimizar o código

Traduções para outros idiomas

Como contribuir:

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

<div align="center">
Desenvolvido com ❤️ e muito amor por gatos! 🐾

https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif

</div>s