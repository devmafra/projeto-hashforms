# Formulário com Validação e Máscaras em JavaScript

Este projeto é um formulário web simples que aplica máscaras de entrada e valida campos usando JavaScript puro, garantindo que os dados sejam digitados corretamente antes do envio.

### Funcionalidades

- Máscaras para CPF, telefone e CEP com a biblioteca [IMask.js](https://imask.js.org/)
- Validação dos campos do formulário:
  - Nome (apenas letras e espaços)
  - CPF (11 dígitos numéricos)
  - Telefone (11 dígitos numéricos)
  - CEP (8 dígitos numéricos)
  - Estado (sigla com 2 caracteres)
- Exibição de alertas para informar erros de preenchimento
- Prevenção do envio do formulário até que todos os dados estejam válidos

### Tecnologias usadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- IMask.js para máscaras de input

### Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/devmafra/projeto-hashforms.git
   ```

2. Ou acesse direto no GitHub Pages:
   [http://devmafra.github.io/projeto-hashforms/](http://devmafra.github.io/projeto-hashforms/)

3. Preencha o formulário e envie.

4. Caso algum campo esteja incorreto, um alerta indicará o problema.

### Possíveis melhorias

- Implementar validação oficial do CPF (algoritmo)
- Mensagens de erro inline para melhor experiência do usuário
- Interface responsiva e mais amigável
- Integração com backend para armazenamento dos dados

---

Feito por [Dev Mafra](https://github.com/devmafra)
