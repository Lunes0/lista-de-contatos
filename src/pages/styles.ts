import styled from 'styled-components'
import { Button } from '../Global'

export const Card = styled.div`
  border-color: transparent;
  border-radius: 20px;
  box-shadow: 0 6px 12px ${({ theme }) => theme.shadow};
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    flex: 1;

    strong {
      font-size: 20px;
      margin-bottom: 6px;
      width: 100%;
    }

    .details {
      display: flex;
      gap: 16px;
    }

    h4 {
      font-size: 16px;
      margin: 0;
      margin-bottom: 2px;
    }
  }
`
export const LinkButton = styled.a`
  color: ${({ theme }) => theme.background};
  font-size: 14px;
  background-color: ${({ theme }) => theme.color};
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;

  &:hover {
    opacity: 0.85;
  }
`

export const ContactList = styled.div`
  padding: 0 40px;
  height: 90vh;
  overflow-y: scroll;
  margin-top: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  img {
    width: 58px;
    height: 58px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 6px 12px ${({ theme }) => theme.shadow};
  }
`

export const DeleteConfirm = styled.div`
  background: transparent;
  color: ${({ theme }) => theme.color};
  padding: '1em';
  border-radius: '8px';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  div {
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    padding: 2em;
    border-radius: 12px;
    min-width: 300px;
    box-shadow: 0 6px 12px ${({ theme }) => theme.shadow};
    text-align: center;
  }
`

export const ButtonsAction = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`

export const ButtonCard = styled(Button)`
  align-self: flex-end;
  float: right;
`

export const FormContct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  input {
    padding: 8px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
  }
`
