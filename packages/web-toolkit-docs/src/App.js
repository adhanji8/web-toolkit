import React from 'react'
import {
  Box,
  Button,
  Input,
  Paned,
} from 'web-toolkit'
import 'web-toolkit/lib/index.css'
import './App.css'

function App() {
  return (
    <div className='App background Box vertical compact'>
      Header
      <Paned defaultSize={200} fill border='handle'>
        Sidebar
        <Box fill>
          <Button>Click Me</Button>
          <Input />
        </Box>
      </Paned>
    </div>
  )
}

export default App
