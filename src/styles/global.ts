import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
      a {
      text-decoration: none;
      color: inherit;
    }
    
    button,
    p {
      margin: 0;
    }
  
    button {
      cursor: pointer;
      padding: 0;
      border: none;
      border-radius: 0;
      background: none;
      
      &:focus {
        outline: none;
      }
    }
    
    html,
    body,
    #root {
      margin: 0;
    }
`
