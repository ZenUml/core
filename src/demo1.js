// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
@Starter(x)
// module has condition:
// !migration || (migration.required == true && migration.migrated == false)
AppModule.migrate() {
  // In the future, we can use this to migrate lite macro to full
  fullInstalled = Confluence.IsFullAppInstalled()
  hasMacro = Page.contains("zenuml-graph-macro")
  if (fullInstalled || !hasMacro) {
    // key: zenuml-graph-macro-migration
    Page.setContentProperty("migration", "required: false", lastUpdate)
  } else {
    // key: zenuml-graph-macro-migration
    Page.setContentProperty("migration", "required: true", lastUpdate)
    Page.replace("zenuml-graph-macro", "zenuml-graph-macro-lite")
    // key: zenuml-graph-macro-migration
    Page.setContentProperty("migration", "migrated: true", lastUpdate)
  }

}

`
