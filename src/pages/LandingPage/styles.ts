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
    font: 700 35px Roboto;
    color: #ffffff;
    /* line-height: 56px; */
  }
  h2 {
    font: 700 20px Roboto;
    color: #ffffff;
    /* line-height: 56px; */
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    text-align: justify;
    color: #6c6c6c;

    & + p {
      margin-top: 5px;
    }

    a {
      text-decoration: none;
      color: #6c6c6c;
    }
  }

  li {
    /* margin-top: 30px; */
    font-size: 16px;
    text-align: justify;
    color: #6c6c6c;
    list-style-type: none;
  }

  @media (min-width: 700px) {
    h1 {
      font: 700 78px Roboto;
      line-height: 56px;
    }
    h2 {
      font: 700 28px Roboto;
      line-height: 56px;
    }

    p {
      font-size: 20px;
    }

    li {
      font-size: 20px;
    }
  }
`;

export const Projects = styled.div`
  flex: 1;
  margin: 20px 0;

  h1 {
    font: 700 28px Roboto;
    color: #ffffff;
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
    padding: 14px;
    display: block;
    text-decoration: none;

    display: flex;
    /* align-items: center; */

    align-items: stretch;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 100%;
      /* max-width: 190px; */
      /* height: 300px; */
    }

    div {
      visibility: hidden;
    }

    svg {
      visibility: hidden;
    }
  }

  @media (min-width: 700px) {
    h1 {
      font: 700 50px Roboto;
      line-height: 56px;
    }

    a {
      padding: 24px;
      display: flex;
      align-items: center;
      transition: transform 0.2s;

      &:hover {
        transform: translateX(10px);
      }

      img {
        width: 300px;
        /* height: 300px; */
      }

      div {
        margin: 0 50px;
        flex: 1;
        visibility: visible;
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
        visibility: visible;
        margin-left: auto;
        color: #cbcbd6;
      }
    }
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px;
    img {
      width: 30px;
      height: 30px;
    }

    & + a {
      margin-right: 0px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media (min-width: 700px) {
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
  }
`;
