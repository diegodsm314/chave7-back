import { mockTasks } from "../mock/data";


export const resolvers = {
  Query: {
    tasks: (
      _: any,
      args: { category?: string; take?: number }
    ) => {
      let result = mockTasks;

      if (args.category && args.category !== "Todos") {
        result = result.filter(
          (task) => task.category.toLowerCase() === args.category?.toLowerCase()
        );
      }

      result = result.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      if (args.take) {
        result = result.slice(0, args.take);
      }

      return result;
    },
    task: (_: any, args: { id: string }) => {
      return mockTasks.find((task) => task.id === args.id) || null;
    },
    tasksByStatus: (_: any, args: { status: string }) => {
      return mockTasks.filter((task) => task.status.toLowerCase() === args.status.toLowerCase());
    },
    
  },

  Mutation: {
    updateTaskStatus: (_: any, args: { id: string; status: string }) => {
      const task = mockTasks.find((t) => t.id === args.id);
      if (!task) return null;
      task.status = args.status;
      return task;
    },
    createTask: (_: any, args: { title: string; description?: string; category: string; endDate: string; user: { firstName: string; lastName: string; email?: string } }) => {
      const newTask =  {
        id: (mockTasks.length + 1).toString(),
        title: args.title,
        description: args.description,
        status: "PENDENTE",
        category: args.category,
        createdAt: new Date().toISOString(),
        endDate: new Date(args.endDate).toISOString(),
        user: {
          firstName: args.user.firstName,
          lastName: args.user.lastName,
          email: args.user.email,
        },
      };
      mockTasks.push(newTask);
      return newTask;
    },
    removeTask: (_: any, args: { id: string }) => {
      const index = mockTasks.findIndex((task) => task.id === args.id);
      if (index === -1) return null;
      const removedTask = mockTasks.splice(index, 1)[0];
      return removedTask;
    },
  },
};