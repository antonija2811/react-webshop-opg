import styled from 'styled-components';
import '.././App.css';

export const ButtonContainer = styled.button`
   text-transform: capitalize;
   font-size: 1rem;
   background: transparent;
   border: 0.2rem solid var(--lightGreen);
   border-color: ${prop => 
      prop.cart ? "var(--mainOrange)" : "var(--lightGreen)"};
   color: ${prop => 
      prop.cart ? "var(--mainOrange)" : "var(--lightGreen)"};
   border-radius: .5rem;
   
   &:hover{
      background: ${prop => 
         prop.cart ? "var(--mainOrange)" : "var(--lightGreen)"};
      border: 0.3rem solid var(--mainOrange);
      color: var(--mainWhite);
   }

`

