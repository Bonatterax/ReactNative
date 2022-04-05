import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #121212;
`;

export const Titulo = styled.Text`
color: ${props => props.cor}
fontSize: 25px;
`;

export const Nome = styled.Text`
color: #ffffff;
font-size: 20px;
`;