// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `@Actor Modeler as "模型开发工程师"
PC as "PRJController"
PAS as "PRJAppService"
req as "creatingAutoMLProjectRequest"
PMS as "PRJManagingService"
DC as "DSClient"
PR as "PRJRepository"

// creatingAutoMLProjectRequest
PC.createAutoMLProject(req) {
  PAS.createAutoMLProject(req) {
    checkParams(req)
    project = req.toProject()
    PMS.createProject(project) {
      datasetPath = DC.getDataSetById(datasetId)
      project.setDatasetPath(datasetPath)
      PR.add(project)
    }
  }
}`
