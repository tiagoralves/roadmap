interface Data {
  title: string;
  week: string;
  content: string;
  date: string;
  type: string;
  hasAssignment: boolean;
  itemAssignment?: string;
}

const data: Data[] = [
  {
    title: "1° dia do projeto",
    type: "Dia de planejamento",
    date: "02/07 - Sexta feira",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "2° dia do projeto",
    type: "Dia de planejamento",
    date: "05/07 - Segunda feira",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "3° dia do projeto",
    type: "Dia de planejamento",
    date: "06/07 - Terça feira",
    content:
      "O terceiro dia será de apresentação do projeto, o time deverá entregar um documento contendo o que foi decidido, qual aplicação será construída, qual problema irá resolver e também quais ferramentas o grupo irá utilizar no dia a dia. Esse será também um bom dia para iniciar a construção do JSON Server.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/35/assignments/7322?module_item_id=8392'
  },
  {
    title: "4° dia do projeto",
    type: "Dia de código",
    date: "07/07 - Quarta feira",
    content:
      "O dia 04 será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "5° dia do projeto",
    type: "Dia de código e gerenciamento!",
    date: "08/07 - Quinta feira",
    content: "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu como um todo. Este documento deve ser anexado ao Kanban (Trello)",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "6° dia do projeto",
    type: "Dia de código",
    date: "09/07 - sexta feira",
    content:
      "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "7° dia do projeto",
    type: "Dia de código e pre-apresentação",
    date: "12/07 - Segunda feira",
    content:
      "O sétimo dia terá um momento de apresentação do projeto para um cliente (Equipe de ensino). O que será verificado: A situação de como está indo em relação ao planejamento, como o código está estruturado, e a organização geral das ferramentas (Kanban, Figma, etc). No botão abaixo está o calendário de reuniões com os clientes.",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://www.notion.so/kenzieacademybr/Calend-rio-de-pr-apresenta-es-e262683cf2084a029195ea4671feeee5'
  },
  {
    title: "8° dia do projeto",
    type: "Dia de código",
    date: "13/07 - Terça feira",
    content:
      "O oitavo dia é mais um dia focado no código, lembrando sempre de seguir o planejamento, reportar dificuldades e focar no MVP.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "9° dia do projeto",
    type: "Dia de código",
    date: "14/07 - Quarta feira",
    content:
      "O nono dia é para corrigir possíveis bugs na aplicação, finalizar o layout e deixar o código limpo sem mensagens no console e comentários desnecessários.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "10° dia do projeto",
    type: "Dia de código",
    date: "15/07 - Quinta feira",
    content:
      "O décimo dia, será o dia final do grupo trabalhando no Capstone, o grupo deverá realizar a ultima retrospectiva e se preparar para partir para um próximo desafio (Q3)! 🚀",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/35/assignments/7326?module_item_id=8397'
  },
];

export default data;
