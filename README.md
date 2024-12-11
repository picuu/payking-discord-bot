# PayKing Discord bot

> Developed by [carloscapo.com](https://carloscapo.com)
>
> You can find me on [Discord](https://carloscapo.com/discord), [LinkedIn](https://linkedin.com/in/carloscapo) and [GitHub](https://github.com/picuu)
>
> Or you can contact me via email [contact@carloscapo.com](mailto:contact@carloscapo.com)

## Description

Simple bot for PayKing Discord server with two main commands: `/convertir` and `/mensaje_bot`.

## 🚀 Getting started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js v22.12.0 LTS](https://nodejs.org/en/download/)
- Create a Discord bot client and get the token and client ID. You can follow the instructions of the [official discord guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

### Installation

1. Clone the repository

  ```bash
  git clone https://github.com/picuu/payking-discord-bot.git
  cd payking-discord-bot
  ```

2. Install the dependencies

  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  # or
  bun install
  ```

3. Create a `.env` file with the following variables:
   - `TOKEN` (Discord bot token)
   - `CLIENT_ID` (Discord client ID)
   - `MAIN_COLOR` (Color (hex) to be displayed in the embeds)

  Example (this is not a real token, client ID or color):

  ```env
  TOKEN = ANFVAD8923J2NVAhdfsafahN23.Uf234s.vda3920vNHF8yshdfdLADfsdaN-Icj389vhasL
  CLIENT_ID = 2003656289516569217
  MAIN_COLOR = 0099ff
  ```

4. Run the bot with the same package manager you used to install the dependencies

  ```bash
  npm start
  # or
  yarn start
  # or
  pnpm start
  # or
  bun start
  ```

## 🤖 Commands

The bot has two main commands:

### Command `/convertir`

This command helps user to know how much fee they would have to pay for a conversion with a given amount of money.

#### Usage

`/convertir <amount>` where:

- `<amount>` is the amount of money to convert

#### Example

`/convertir 100`

### Command `/mensaje_bot`

This command allows the user to send a message through the bot to the channel where the command was executed.

#### Usage

`/mensaje_bot <message>` where:
- `<message>` is the message to send

#### Example

`/mensaje_bot Hello, world!`

## 📜 License

This project is licensed under the GNU AFFERO GENERAL PUBLIC License - see the [LICENSE](LICENSE) file for details

