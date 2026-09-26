# Publicação em grupos do Facebook (marketing em matriz)

> Uma configuração: muitos grupos × muitos textos × muitas contas em navegadores fingerprint. Mais alcance, menos copiar e colar.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repositório:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## O que esta automação faz

Projeto de automação para o cliente desktop **AutoAI**. Depois de importar:

| Capacidade | Resultado |
|---|---|
| **Publicar em grupos do Facebook** | Abrir o grupo e publicar texto + imagens, ou texto + um vídeo |
| **Escala em matriz** | Várias URLs + vários textos → **cada grupo recebe todos os textos** (tarefas = grupos × textos) |
| **Vários navegadores/contas** | Tarefas em **round-robin** nos fingerprint escolhidos (1 navegador = 1 conta) |
| **Pools de mídia** | Pool de imagens (N por post, cíclico) ou de vídeos (1 por post) |
| **Anônimo opcional** | Liga “Publicar anonimamente” se o compositor oferecer |
| **Agenda realista** | Limite diário, intervalo aleatório, janela horária (suporta madrugada cruzada) |

### Por que “matriz”

Marketing manual em grupos não escala.

Exemplos:

- **20 grupos × 5 textos = 100 tarefas**, agendadas em vários navegadores  
- Mesma oferta com copy/mídia diferentes em várias comunidades  
- Janelas noturnas para postar quando a audiência está online  

**Execuções de produção quase não consomem tokens de IA.** Tokens são sobretudo para desenvolver, adaptar ou corrigir com o agente.

> Use apenas contas/grupos próprios ou autorizados. Siga as regras do Facebook e a lei local.

---

## Requisitos

- **Cliente desktop AutoAI** ([Download](https://www.xrobot.tech/pt/download/))
  - **Windows:** apenas x86 / x64 (sem ARM)
  - **macOS:** apenas Apple silicon (série M; sem Intel)
- Conta AutoAI ([Registrar](https://www.xrobot.tech/pt/register/) · [Entrar](https://www.xrobot.tech/pt/login/))
- Pelo menos um **navegador fingerprint** logado no Facebook
- **Cota:** AutoAI inclui **um ambiente fingerprint gratuito**. Para matriz/multiconta, **compre mais** no cliente ou no [centro da conta](https://www.xrobot.tech/pt/account/)

---

## Início rápido

### 1. Baixar o cliente

👉 [https://www.xrobot.tech/pt/download/](https://www.xrobot.tech/pt/download/)

### 2. Registrar e entrar

1. [Registre-se](https://www.xrobot.tech/pt/register/) (e-mail + código/senha).
2. Login no site opcional. **Entre com a mesma conta no cliente desktop.**

### 3. Preparar o navegador Facebook

AutoAI traz **um ambiente fingerprint gratuito** (**Navegador da plataforma**). Suficiente para uma conta. Matriz funciona melhor com **vários navegadores (contas)** — compre cota e crie mais ambientes se precisar.

1. Barra lateral **Navegador**.
2. Prefira **Navegador da plataforma** (grátis integrado); BitBrowser/AdsPower também.
3. **Criar** → **Iniciar** → ative **Cast** se quiser ver a tela.
4. **Login manual no Facebook**.
5. Mais contas: comprar cota → criar navegadores → login em cada → selecionar todos ao criar o grupo de tarefas.

### 4. Importar do GitHub

1. **Automação → Importar**.
2. Cole: `https://github.com/yuhaya/facebook-group-post` (também `yuhaya/facebook-group-post` ou `git@github.com:yuhaya/facebook-group-post.git`).
3. **Iniciar importação**.
4. Aparece em **Automação → Minhas automações**.

### 5. Criar grupo de tarefas (execução matriz)

1. **Minhas automações**.
2. **Clique no corpo do card** (não no botão de especialista embaixo).
3. URLs de grupos, textos (`==sep==`), navegadores, mídia, agenda.
4. **Criar** → revisar horários e quantidade.
5. Ative o interruptor mestre **Tarefas** no canto superior direito se pedido.
6. Acompanhe em **Gerenciamento de grupos de tarefas**.

**Regra:** `grupos × textos`. Depois round-robin nos navegadores.

---

## Campos do formulário

| Campo | Significado |
|---|---|
| URLs de grupos | Uma URL por linha; cada grupo recebe todos os textos |
| Textos | Separar com `==sep==` |
| Publicar anonimamente | On → ativa o interruptor se existir |
| Tipo de mídia | Imagens (várias) / Vídeo (um por post) |
| Imagens/Vídeos | Pool em ordem e cíclico |
| Imagens por post | Quantas do pool |
| Navegadores | Ambientes fingerprint que executam |
| Limite diário | Máx. por navegador na janela |
| Intervalo min/max | Espera aleatória (segundos) |
| Início/fim diário | **início > fim** = madrugada (ex. `22:00`→`06:00`) |

---

## Personalizar

Scripts oficiais podem não bater com seu idioma de UI ou região — adapte com o agente integrado.

### Recarregar computação (para o chat do agente)

Produção ≈ 0 tokens. **Alterações/reparo com o agente** consomem **computação de IA**.

1. No site, **recarregue saldo USD**.  
2. No cliente, perfil/carteira → **Comprar computação de IA**.  
3. Depois abra o chat do agente.

### Pedir ao agente

**A. Modo desenvolvimento** — card → **Especialista em automação de navegador** → navegador de debug iniciado → descrever → **teste do script**.

**B. Modo solução de problemas** — **Gerenciamento de grupos** → **Investigar e corrigir**.

### Mais

- [Primeiros passos](https://www.xrobot.tech/blog/pt/guide/getting-started) · [Criar do zero](https://www.xrobot.tech/blog/pt/guide/custom-automation)
- [Casos](https://www.xrobot.tech/pt/cases/) · [Download](https://www.xrobot.tech/pt/download/) · [Registrar](https://www.xrobot.tech/pt/register/) · [Login](https://www.xrobot.tech/pt/login/)

---

## Dicas

- Prefira **vários navegadores (contas)**. Comece com o **gratuito**; compre mais slots fingerprint ao escalar.  
- Intervalos e limites conservadores; janelas noturnas para o dia no exterior.  
- Varie textos e mídia.  
- Antes de lotes grandes, confira logins do Facebook.  
- Produção ≈ **0 tokens**.

---

## Info do projeto

| | |
|---|---|
| ID do pacote | `fb-group-post` |
| Nome | Publicação em grupo do Facebook |
| Runtime | AutoAI desktop (automação de navegador) |

`AGENTS.md` é para desenvolvedores do agente no cliente. Clientes seguem este README.

---

## Suporte

- Site: [https://www.xrobot.tech](https://www.xrobot.tech)

Se falhar algo, use primeiro o **modo desenvolvimento / solução de problemas**.
