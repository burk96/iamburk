import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem;
  flex: 1;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    font-weight: bold;
  }
  .window {
    width: 100%;
    min-height: 200px;
    flex-grow: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 960px) {
    flex-flow: row wrap;
    align-items: flex-start;
    .window {
      width: 480px;
      min-height: 200px;
      margin: 2rem;
    }
  }
`;
