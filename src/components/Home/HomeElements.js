import styled from "styled-components"

export const HomeContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const HomeGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`

export const HomeH1 = styled.h1`
  font-size: 56px;
  font-style: normal;
  font-weight: normal;
  margin-left: 20px;
  
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`

export const HomeButton = styled.button`
  width: 192px;
  height: 52px;
  border-radius: 6px;
  white-space: nowrap;
  color: #fff;
  background: #f5862e;
  outline: none;
  border: none;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 10px;
  }
`

export const HomeImg = styled.img`
  width: 840px;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
