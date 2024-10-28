import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import{QueryClient,QueryClientProvider} from "@tanstack/react-query";
import './index.css'
import "semantic-ui-css/semantic.min.css";
const queryClient=new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
