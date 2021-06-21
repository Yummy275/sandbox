import styled from 'styled-components';
const OpacityGuy = styled.div`
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.visible ? '1' : '0')};
`;

export default OpacityGuy;
