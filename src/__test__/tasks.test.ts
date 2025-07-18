import { createTestServer } from "./test";
import gql from "graphql-tag";

const server = createTestServer();

describe("GraphQL API", () => {
  it("should list tasks filtered by category", async () => {
    const res = await server.executeOperation({
      query: gql`
        query GetTasks($category: String, $take: Int) {
          tasks(category: $category, take: $take) {
            id
            title
            category
          }
        }
      `,
      variables: {
        category: "TRABALHO",
        take: 5,
      },
    });

    expect(res.errors).toBeUndefined();
    expect(res.data?.tasks.length).toBeGreaterThan(0);
    expect(res.data?.tasks.every((t: any) => t.category === "TRABALHO")).toBe(true);
  });

  it("should find a task by ID", async () => {
    const res = await server.executeOperation({
      query: gql`
        query GetTask($id: String!) {
          task(id: $id) {
            id
            title
          }
        }
      `,
      variables: { id: "4" },
    });

    expect(res.errors).toBeUndefined();
    expect(res.data?.task).toBeDefined();
    expect(res.data?.task.id).toBe("4");
  });

  it("should be update a task", async () => {
    const res = await server.executeOperation({
      query: gql`
        mutation UpdateTaskStatus($id: String!, $status: String!) {
          updateTaskStatus(id: $id, status: $status) {
            id
            status
          }
        }
      `,
      variables: {
        id: "3",
        status: "CONCLUÍDO",
      },
    });

    expect(res.errors).toBeUndefined();
    expect(res.data?.updateTaskStatus.id).toBe("3");
    expect(res.data?.updateTaskStatus.status).toBe("CONCLUÍDO");
  });

  it("should create a new task", async () => {
    const res = await server.executeOperation({
      query: gql`
        mutation CreateTask($title: String!, $description: String, $category: String!, $endDate: String!, $user: UserInput!) {
          createTask(title: $title, description: $description, category: $category, endDate: $endDate, user: $user) {
            id
            title
            status
            endDate
            user {
              firstName
              lastName
              email
              }
          }
        }
      `,
      variables: {
        title: "Nova Tarefa",
        description: "Descrição da nova tarefa",
        category: "TRABALHO",
        endDate: "12/02/2024 10:00:00",
        user: { firstName: "Marilia", lastName: "Pereira"}
        },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data?.createTask).toBeDefined();
    expect(res.data?.createTask.title).toBe("Nova Tarefa");
    expect(res.data?.createTask.status).toBe("PENDENTE");
    expect(res.data?.createTask.user.firstName).toBe("Marilia");
    expect(res.data?.createTask.id).toBeDefined();
    expect(res.data?.createTask.endDate).toBe("2024-12-02T13:00:00.000Z");
  });
});