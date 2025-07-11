import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // Scroll to a specific position
  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / TimeLineData.length;
      scroll(carouselRef.current, i * itemWidth);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth / TimeLineData.length))
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    // Scroll to beginning on mount
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }

    // Scroll reset on resize
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Final-year B.Tech IT student with a strong foundation in full-stack development and problem-solving. Experienced in building web applications using technologies like React, Node.js, and MongoDB. Passionate about writing clean code, solving complex challenges, and continuously learning to grow as a software developer.
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index}>
            <CarouselItem
              index={index}
              active={activeItem}
              id={`carousel__item-${index}`}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>
                <span style={{ whiteSpace: 'nowrap' }}>{item.year}</span>
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0"
                      y1="0.5"
                      x2="208"
                      y2="0.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>

      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem === index} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
