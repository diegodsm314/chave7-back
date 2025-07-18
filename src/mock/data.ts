export interface User {
    firstName: string;
    lastName: string;
    email?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  category: string;
  createdAt: string;
  endDate: string;
  user: User;
}

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Estudar GraphQL",
    description: "Ler documentação do Apollo Server",
    status: "PENDENTE",
    category: "EDUCACAO",
    createdAt: "2024-06-01T10:00:00Z",
    endDate: "2024-06-01T12:00:00Z",
    user: { firstName: "Ana", lastName: "Silva" },
  },
  {
    id: "2",
    title: "Enviar relatório mensal",
    status: "CONCLUIDO",
    category: "TRABALHO",
    createdAt: "2024-06-02T08:30:00Z",
    endDate: "2024-06-02T09:00:00Z",
    user: { firstName: "Carlos", lastName: "Oliveira" },
  },
  {
    id: "3",
    title: "Ir ao supermercado",
    description: "Comprar leite, ovos e pão",
    status: "PENDENTE",
    category: "COMPRAS",
    createdAt: "2024-06-03T09:00:00Z",
    endDate: "2024-06-03T10:00:00Z",
    user: { firstName: "Beatriz", lastName: "Souza", email: "bia@souza.com"},
  },
  {
    id: "4",
    title: "Revisar código",
    status: "PENDENTE",
    category: "TRABALHO",
    createdAt: "2024-06-04T14:15:00Z",
    endDate: "2024-06-04T15:00:00Z",
    user: { firstName: "Diego", lastName: "Simões" },
  },
  {
    id: "5",
    title: "Aula de inglês",
    status: "CONCLUIDO",
    category: "EDUCACAO",
    createdAt: "2024-06-05T12:00:00Z",
    endDate: "2024-06-05T13:00:00Z",
    user: { firstName: "Fernanda", lastName: "Lima" },
  },
  {
    id: "6",
    title: "Limpar apartamento",
    status: "PENDENTE",
    category: "OUTROS",
    createdAt: "2024-06-06T18:30:00Z",
    endDate: "2024-06-06T20:00:00Z",
    user: { firstName: "Gustavo", lastName: "Mendes" },
  },
  {
    id: "7",
    title: "Fazer backup dos arquivos",
    status: "CONCLUIDO",
    category: "TRABALHO",
    createdAt: "2024-06-07T11:45:00Z",
    endDate: "2024-06-07T12:30:00Z",
    user: { firstName: "Helena", lastName: "Rocha", email: "helena@rocha.com"},
  },
  {
    id: "8",
    title: "Estudar TypeScript",
    status: "PENDENTE",
    category: "EDUCACAO",
    createdAt: "2024-06-08T20:00:00Z",
    endDate: "2024-06-08T22:00:00Z",
    user: { firstName: "Igor", lastName: "Cunha" },
  },
  {
    id: "9",
    title: "Consulta médica",
    status: "PENDENTE",
    category: "SAUDE",
    createdAt: "2024-06-09T16:00:00Z",
    endDate: "2024-06-09T17:00:00Z",
    user: { firstName: "Joana", lastName: "Almeida" },
  },
  {
    id: "10",
    title: "Atualizar LinkedIn",
    status: "CONCLUIDO",
    category: "TRABALHO",
    createdAt: "2024-06-10T13:00:00Z",
    endDate: "2024-06-10T14:00:00Z",
    user: { firstName: "Lucas", lastName: "Pereira" },
  },
];