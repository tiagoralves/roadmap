interface Data {
  title: string;
  date: string;
  week: string;
  content: string;
  type: string;
  hasAssignment: boolean;
  itemAssignment?: string;
}

const data: Data[] = [
  {
    title: "1° dia do projeto",
    type: "Dia de planejamento",
    date: "08/11 - segunda-feira",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/assignments/7180?module_item_id=8120'
  },
  {
    title: "2° dia do projeto",
    type: "Dia de planejamento",
    date: "09/11 - terça-feira",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "3° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "10/11 - quarta-feira",
    content:
      "O terceiro dia será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa. No terceiro dia todos os membros devem entregar o planejamento.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/assignments/7177?module_item_id=8119'
  },
  {
    title: "4° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "11/11 - quinta-feira",
    content:
      "O quarto dia de projeto será focado na criação das features já planejadas do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "5° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "12/11 - sexta-feira",
    content: "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu na totalidade.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  // { 15/11 Feriado proclamação da República
  //   title: "6° dia do projeto",
  //   type: "Dia de código e gerenciamento",
  //   date: "15/11 - terça-feira",
  //   content:
  //     "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
  //   week: "Segunda semana",
  //   hasAssignment: false,
  // },
  {
    title: "6° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "16/11 - terça-feira",
    content:
      //"O sétimo dia será um dia para a finalização de features e ajustes finais no código",
      "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "7° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "17/11 - quarta-feira",
    content:
      "O sétimo dia é foco no código, lembrando sempre de seguir o planejamento, reportar dificuldades e focar no MVP.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "8° dia do projeto",
    type: "Dia de gerenciamento e entrega.",
    date: "18/11 - quinta-feira",
    content:
      "O nono dia é o dia final para a entrega do código, todos os Devs do grupo deverão enviar os links do repositório no Canvas contendo a solução proposta.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "9° dia do projeto",
    type: "Dia de código",
    date: "19/11 - sexta-feira",
    content:
      "O Décimo dia, será o final dos Devs trabalhando no Projeto, o grupo deverá realizar a última retrospectiva e se preparar para partir para um próximo desafio! 🚀",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/modules/items/8120'
  },
];

export default data;
