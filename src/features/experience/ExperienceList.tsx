import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {H2Title} from '../../styles/typography';
import {selectExperienceList} from './experienceSlice';

const ExperienceList = () => {
  const exps = useSelector(selectExperienceList);

  const renderExps = () => {
    if (exps) {
      let mircorofTotalExp = 0;
      const mirocorfExps = exps.filter(
        (exp) => exp.acf.kokemuspiste_kohde.post_title === 'Mircorof' || !exp.acf.kokemuspiste_kohde,
      );

      mirocorfExps.map((exp) => {
        if (exp.acf.kokemuspiste_maara) {
          console.log('kokemuspisteitä', exp.acf.kokemuspiste_maara);
          mircorofTotalExp += parseInt(exp.acf.kokemuspiste_maara, 10);
        }

        return null;
      });

      return (
        <div>
          <h1>Mircoroff total exp</h1>
          <h2>Määrä: {mircorofTotalExp}</h2>
        </div>
      );
    }
    return null;
  };

  return (
    <BlogListContainer>
      <H2Title>Viimeisimmät expit</H2Title>
      {renderExps()}
    </BlogListContainer>
  );
};

const BlogListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export default ExperienceList;
