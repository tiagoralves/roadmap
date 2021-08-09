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
    date: "09/08 - segunda-feira",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/assignments/7180?module_item_id=8120'
  },
  {
    title: "2° dia do projeto",
    type: "Dia de planejamento",
    date: "10/08 - terça-feira",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "3° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "11/08 - quarta-feira",
    content:
      "O terceiro dia será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa. No terceiro dia todos os membros devem entregar o planejamento.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/assignments/7180?module_item_id=8120'
  },
  {
    title: "4° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "12/08 - quinta-feira",
    content:
      "O quarto dia de projeto será focado na criação das features já planejadas do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "5° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "13/08 - sexta-feira",
    content: "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu na totalidade.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "6° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "16/08 - segunda-feira",
    content:
      "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "7° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "17/08 - terça-feira",
    content:
      "O sétimo dia será um dia para a finalização de features e ajustes finais no código",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "8° dia do projeto",
    type: "Dia de código e gerenciamento",
    date: "18/08 - quarta-feira",
    content:
      "O oitavo dia é mais um dia focado no código, lembrando sempre de seguir o planejamento, reportar dificuldades e focar no MVP.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "9° dia do projeto",
    type: "Dia de gerenciamento e entrega.",
    date: "19/08 - quinta-feira",
    content:
      "O nono dia é o dia final para a entrega do código, todos do grupo deverão enviar os links do repositório no Canvas contendo a solução proposta.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "10° dia do projeto",
    type: "Dia de código",
    date: "20/08 - sexta-feira",
    content:
      "O Décimo dia, será o dia final do grupo trabalhando no Hábitos, o grupo deverá realizar a última retrospectiva e se preparar para partir para um próximo desafio! 🚀",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/48/modules/items/8120'
  },
];

export default data;
