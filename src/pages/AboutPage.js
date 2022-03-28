import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title={'about'}/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt=''/>
      <article>
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'/>
        </div>
        <p>
          Est ex irure qui velit esse pariatur reprehenderit fugiat. Amet laboris ex elit quis ad quis. Sunt velit amet ex consectetur ea duis adipisicing id amet. Ipsum ut voluptate anim veniam veniam et nostrud. Laborum sunt velit non pariatur sint.

Ut ex dolore culpa esse culpa voluptate consequat cillum culpa occaecat amet fugiat. Tempor ad est laboris adipisicing non incididunt nulla aliqua minim eiusmod do deserunt voluptate. Officia non sint labore laborum. Dolor eu commodo eu elit do voluptate dolor aliqua cillum mollit quis.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
