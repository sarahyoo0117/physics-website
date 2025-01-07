import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainCanvas from './MainCanvas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainCanvas />
  </StrictMode>,
)
