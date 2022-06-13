import styled from 'styled-components'

export const BtnConnection = styled.button`
    width: 15%;
    height: 5%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10px;
    animation: animateBtn 0.5s;
    background-color: black;
    border: none;
    color: white;

    :hover {
        opacity: 0.8;
        background-color: red;
        cursor: pointer;
    }

    @keyframes animateBtn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;