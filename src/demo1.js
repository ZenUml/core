// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `@Actor Modeler as "建模人员"
DM as "数据管理"
CS as "计算服务"
// RM as "资源管理"
SS as "存储服务"


@Starter(Modeler)
// 获取数据集剖析报告

if (DM.DSReportIsSaved(DatasetID) == true) {
  DM.getDSAnalysisReport(DatasetID) {
    // 获取剖析报告文件地址
    url = DM.getDSReportFileUrl(DatasetID)
    report = SS.readFile(url)
    return report
  }
} else {
  DM.submitDSAnalysisTask() {
    // publisher: 异步事件(MQ)
    DM -> CS: DSAnalysisTaskSubmittedEvent
  }
  // subscriber
  CS -> CS.eventHandler(event) {
    new Job() {
      data = SS.loadData()
      report = Job.analyzeData(data)
      return report
    }
  }

  // publisher: 异步事件(MQ)
  CS -> DM: DSAnalysisTaskCompletedEvent
  // subscriber
  report = DM -> DM.eventHandler(event)
  @return DM->Modeler: report
}`
