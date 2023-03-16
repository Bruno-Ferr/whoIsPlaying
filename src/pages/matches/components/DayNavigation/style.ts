import styled from "styled-components"

export const Container = styled.main`
    border-bottom: 1px solid #A89A9A;
`;

export const DayNav = styled.div`
  max-width: 1440px;
  height: 131px;
  padding: 0 1rem; 
  margin: 0 auto; 
  
  display: flex;
  align-items: center;
  justify-content: center;

  .Arrows {
    background: none;
    border: 0;
    margin: 0 8px;
  }
`

export const DayButton = styled.button`
    width: 171px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;

    border: ${(props) => props.disabled ?  '1px solid #FFEB38' : '0' }; 
    border-radius: 10px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;

    background: #313131; // #fefefe
    color: #f8f8f8;

    &:not(:disabled):Hover {
      border: 1px solid #cfcfcf; //#A89A9A
    }

    :disabled {
      opacity: 1;
      color: #8b8b8b;  
    }
`