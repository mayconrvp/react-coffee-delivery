import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90rem;
  min-height: 63.3125rem;
  margin: 0 auto;
  background: ${(props) => props.theme['white-back']};
  /* background-color: white; */
`
