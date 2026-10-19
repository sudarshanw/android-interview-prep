// ADD NEW QUESTIONS HERE. Copy one block, change the fields, keep the comma.
// "points" and "intro" accept simple HTML such as <code>@Inject</code>.
const QUESTIONS = [
  {
    id: "hilt-internals",
    category: "Dependency Injection",
    question: "How does Hilt work internally? How does it create dependencies and manage their lifecycle?",
    intro: "Hilt is a dependency injection library built on top of Dagger that generates the code required to create and provide dependencies automatically.",
    sections: [
      {
        title: "How does Hilt work?",
        points: [
          "<code>@HiltAndroidApp</code> initialises the application's dependency injection setup.",
          "<code>@Inject</code> tells Hilt which constructor or field needs dependency injection.",
          "<code>@Module</code>, <code>@Provides</code>, and <code>@Binds</code> define how dependencies are provided.",
          "Hilt generates the dependency graph at compile time."
        ]
      },
      {
        title: "How are objects created?",
        text: "When a class requests a dependency, Hilt follows the generated dependency graph, creates the required objects, and supplies them automatically."
      },
      {
        title: "How does Hilt manage lifecycle?",
        text: "Hilt uses components and scopes to control how long dependency instances are retained.",
        points: [
          "<code>@Singleton</code>: one instance per <code>SingletonComponent</code> instance, typically the application.",
          "<code>@ActivityScoped</code>: one instance per Activity component.",
          "<code>@ViewModelScoped</code>: one instance within a given ViewModel component."
        ]
      }
    ],
    keyPoint: "Hilt generates dependency injection code at compile time, while component scopes determine instance reuse and lifetime."
  }
];
