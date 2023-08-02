'use client'

import React from 'react';
import {SectionHeader} from './utils'
import {Slide} from 'react-awesome-reveal'
import PropType from '@/types/props';

const Testimonial = (props:PropType) => {

  const outerClasses = `testimonial section ${props.className ?? ''}`

  const innerClasses = `testimonial-inner section-inner ${props.topDivider ? 'has-top-divider' : ''} ${props.bottomDivider ? 'has-bottom-divider':''}`

  const tilesClasses = 'tiles-wrap'

  const sectionHeader = {
    title: 'Customer Testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };
  const testimonials = [
    {
      name:'Trey Rigsby',
      location:'Machine Operator, Metal and Plastic',
      text:'Nonumy amet ut sea diam et, sit amet voluptua tempor takimata et dolore, sed et amet eirmod elitr invidunt. Et dolor stet kasd rebum ipsum.'
    },
    {
      name:'Brianna C. Kellner',
      location:'Human Resources',
      text:'MyCompany Sed rebum et accusam ut sadipscing eos lorem ipsum invidunt ea, takimata lorem sanctus est sed dolor. Et duo no amet diam..'
    },
    {
      name:'John H. Watson',
      location:'Building Cleaning Supervisor',
      text:'MyCompany Lorem lorem lorem dolores duo sit. Invidunt est elitr invidunt clita labore amet lorem sanctus amet, invidunt eos justo ipsum.'
    },
    {
      name:'Harry Wilkey',
      location:'Finance Control',
      text:'MyCompany Ea justo stet eirmod et duo et. Diam duo nonumy diam tempor, diam tempor sadipscing kasd takimata dolor duo lorem gubergren no. Et at.'
    },
    
  ]
  const DisplayTestimonial = ()=>{
    return (
      <div className={tilesClasses}>
        {testimonials.map((testimonial,index) => (
          <Slide key={testimonial.name} cascade direction={(index+1)%2 === 0 ?'right':'left'}>
           <div className="tiles-item square-shadow" data-reveal-delay="200">
           <div className="tiles-item-inner">
             <div className="testimonial-item-content">
               <p className="text-sm mb-0">{testimonial.text}</p>
             </div>
             <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
               <span className="testimonial-item-name text-color-high">{testimonial.name}</span>
               <span className="text-color-low"> / </span>
               <span className="testimonial-item-link">
                <span>{testimonial.location}</span>
               </span>
             </div>
           </div>
         </div>
         </Slide>
        ))}
      </div>
    )
  }
  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <DisplayTestimonial/>
         
        </div>
      </div>
    </section>
  );
}

export default Testimonial;