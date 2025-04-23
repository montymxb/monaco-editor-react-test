import "./App.css";
import "@codingame/monaco-vscode-python-default-extension";
import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { LogLevel } from '@codingame/monaco-vscode-api';
import type { WrapperConfig } from "monaco-editor-wrapper";
//import { configureDefaultWorkerFactory } from "monaco-editor-wrapper/workers/workerLoaders";

function App() {
  const createDefaultWrapperConfig = (): WrapperConfig => {
    return {
      $type: "extended",
      logLevel: LogLevel.Debug,
      // vscodeApiConfig: {
      //   loadThemes: false,
      // },
      editorAppConfig: {
        codeResources: {
          modified: {
            text: 'print("Hello, World!")',
            uri: "/workspace/hello.py",
          },
        },
        //monacoWorkerFactory: configureDefaultWorkerFactory,
      },
    };
  };

  return (
    <>
      <h1>Monaco Example</h1>
      <MonacoEditorReactComp
        wrapperConfig={createDefaultWrapperConfig()}
        style={{ height: "100vh", width: "500px" }}
      />
    </>
  );
}

export default App;
