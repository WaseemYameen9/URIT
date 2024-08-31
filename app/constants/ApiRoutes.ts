const baseURL = 'http://157.175.52.228/api/'

export const routes = {
  login: baseURL + 'v1/login',
  projects: baseURL + `v1/projects?pageNumber=${0}&pageSize=${20}`,
  projectsWithId: (userId: number) => baseURL + `v1/projects?userId=${userId}&pageNumber=${0}&pageSize=${20}`,
  skills: baseURL + 'v1/commons/skills'
}
