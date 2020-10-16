import styled from 'styled-components';
import '.././App.css';

export const ButtonContainer = styled.button`
   text-transform: capitalize;
   font-size: 0.9rem;
   color: var(--mainWhite);
   margin: 0 0.5rem;
   border: 0.2rem solid var(--lightGreen);
   border-color: ${prop => 
      prop.cart ? "var(--mainRed)" : "var(--lightGreen)"};
   background: ${prop => 
      prop.cart ? "var(--mainRed)" : "var(--lightGreen)"};
   border-radius: .25rem;
   padding: 0 0.75rem;
   


`

