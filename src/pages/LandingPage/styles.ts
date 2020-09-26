import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 80px;
  /* display: flex;
  flex-direction: column;
  place-content: center; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  /* padding: 30px 0; */
`;

export const Header = styled.div`
  h1 {
    font: 700 78px Roboto;
    color: #ffffff;
    line-height: 56px;
  }

  h2 {
    font: 700 28px Roboto;
    color: #ffffff;
    line-height: 56px;
  }

  p {
    /* width: 445px; */
    margin-top: 30px;
    font-size: 20px;
    text-align: justify;
    color: #6c6c6c;

    & + p {
      margin-top: 5px;
    }

    a {
      text-decoration: none;
      color: #5927e5;
    }
  }

  li {
    /* margin-top: 30px; */
    font-size: 20px;
    text-align: justify;
    color: #6c6c6c;
    list-style-type: none;
  }
`;

export const Projects = styled.div`
  flex: 1;
  margin: 20px 0;
  /* max-width: 900px; */
  h1 {
    font: 700 50px Roboto;
    color: #ffffff;
    line-height: 56px;
  }
  hr {
    border-top: 1px solid #fff;
    margin: 10px 0 20px 0;
  }
  a {
    background: #202022;
    border-radius: 30px;
    height: 229px;
    width: 100%;
    /* max-width: 600px; */
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 300px;
      /* height: 300px; */
    }

    div {
      margin: 0 50px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #ffffff;
      }

      p {
        font-size: 18px;
        color: #6c6c6c;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Footer = styled.div`
  /* flex: 1; */
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 500px; */

  a {
    margin: 0 20px;
    img {
      width: 80px;
      height: 80px;
    }

    & + a {
      margin-right: -5px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
