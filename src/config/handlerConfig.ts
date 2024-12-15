import { HandlerInitializer } from "../models/handlerInitializer";
import { AutoUpdateFeedbackStatusHandler } from "../handlers/autoUpdateFeedbackStatusHandler";

export const handlerConfig: HandlerInitializer[] = [
  {
    workspaceIds: [
      "41d0fa32-3cf5-47db-9cb7-63a32518b2c3",
      "fd006797-96ee-44d6-9d60-b29dc4d805fd",
      "f2aae563-be8f-4580-baba-447f7ba51e5e",
      "18060ed7-5529-4b27-b7f9-ecf3dd112e42",
      "33599547-1e1e-473e-beda-f74ac8f4d390",
      "3a04592e-e401-4aaf-810f-fe2fcaf73f9f",
      "e6d63ebf-fe75-4a3f-a64b-ddee51f03702",
      "530a4321-9478-4cbd-b8fc-f2000c364019",
      "54302fcb-1d33-4029-ac15-ebf2bf9ab33c",
    ],
    createHandler: (workspaceId, apiClient) =>
      new AutoUpdateFeedbackStatusHandler(workspaceId, apiClient, {
        feedbackStatusMapping: {
          new: "Nouvelle demande",
          accepted: "Accepté - Backlog",
          exploration: "En cours d'étude",
          progress: "En cours de dev",
          completed: "Terminé",
        },
        feedbackInitiativeLinkingType: "insight",
      }),
  },
];
