import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Master Quiz</title>
      </Head>

      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>O Master Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Este quiz foi feito para propor uma reflexão séria.
              Todas as perguntas devem ser respondidas com muita sinceridade.
            </p>

            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Qual o seu nome meu chapa?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>TESTE</h1>
            <p>dasjgdaghjdgasj</p>
          </Widget.Content>
        </Widget>

        <Footer />

        <GitHubCorner projectUrl="https://github.com/lmoreira256" />

      </QuizContainer>

    </QuizBackground>
  );
}
