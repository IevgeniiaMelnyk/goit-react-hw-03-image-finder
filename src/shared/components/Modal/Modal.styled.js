import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90000;

  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.8);

  transition: opacity 250ms var(--time-function),
    visibility 250ms var(--time-function);
`;

export const ModalBox = styled.div`
  border-radius: 10px;
  background-color: #fff;
  max-height: 40%;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    max-height: 400px;
    max-width: 600px;
  }
  @media screen and (min-width: 120px) {
    max-height: 600px;
    max-width: 800px;
  } ;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(100, 100, 100, 0.3);
`;
