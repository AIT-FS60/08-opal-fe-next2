// routes.ts
export const API = {
  AUTH: {
    LOGIN: "/v1/auth/login",
    LOGOUT: "/v1/auth/logout",
    REFRESH: "/v1/auth/refresh-token",
  },
  USERS: {
    REGISTER: "/v1/users/register",
    CONFIRM: (code: string) => `/v1/users/confirm/${code}`,
    ALL: "/v1/users/all",
  },
  PROJECTS: {
    ALL: "/v1/projects",
    CREATE: "/v1/projects",
    BY_ID: (id: number | string) => `/v1/projects/${id}`,
    DELETE: (id: number | string) => `/v1/projects/${id}`,
  },
  TASKS: {
    CREATE: "/v1/tasks",
    BY_ID: (id: number | string) => `/v1/tasks/${id}`,
    DELETE: (id: number | string) => `/v1/tasks/${id}`,
    BY_PROJECT: (projectId: number | string) => `/v1/tasks/project/${projectId}`,
  },
  TEST_AUTH: {
    ROLE_USER: "/v1/test/auth/role/user",
    ROLE_ANY: "/v1/test/auth/role/any",
    ROLE_ADMIN: "/v1/test/auth/role/admin",
    PERMIT_ALL: "/v1/test/auth/permit-all",
    NOT_ANNOTATED: "/v1/test/auth/not-annotated",
  },
};
