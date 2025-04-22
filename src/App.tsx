//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import '@codingame/monaco-vscode-python-default-extension';
import { WrapperConfig, MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';

function App() {
  //const [count, setCount] = useState(0)


  const wrapperConfig: WrapperConfig = {
    $type: 'extended',
    htmlContainer: document.getElementById('monaco-editor-root')!,
    editorAppConfig: {
      codeResources: {
        modified: {
            uri: '/workspace/hello.py',
            text: 'print("Hello, World!")'
        }
      }
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

        <MonacoEditorReactComp
        wrapperConfig={wrapperConfig}
        style={{ 'height': '100%' }}
        onLoad={(_wrapper: MonacoEditorLanguageClientWrapper) => {
            // use the wrapper to get access to monaco-editor or the languageclient
        }}
        />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
