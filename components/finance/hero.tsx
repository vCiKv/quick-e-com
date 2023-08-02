import PropType from '@/types/props'
import Link from 'next/link'
import { Slide } from "react-awesome-reveal"
// import { TextLoop } from 'react-text-loop-next'

const Hero = (props:PropType) => {
  const outerClasses = `hero section center-content mt-64 ${props.className}`

const words=['tech','AI','social media']
  return (
    <section
      className={outerClasses}
    >
      <div className="container-sm">
        <div className="hero-inner section-inner">
          {/* <Fade duration={1500}> */}
            <div className="hero-content">
                <Slide direction="down" delay={250}>
                  <h1 className="mt-0 mb-16 full-stop">        
                    Do more with <br/>
                    <span style={{marginLeft:'8px'}}className="text-color-primary">Us</span>

                    {/* <TextLoop delay={300}>
                      {words.map(word=>(
                        <span key={word} style={{marginLeft:'8px'}}className="text-color-primary">{word}</span>
                      ))}
                    </TextLoop>   */}
                  </h1>
                </Slide>
              <div className="container-xs">
                <Slide direction="down" cascade delay={400} damping={0.2}>
                  <p className="m-0 mb-32">
                    create a <span className="text-color-primary">futureDiam</span> ousSed eirmod et erat dolores voluptua dolores. <span className="text-color-primary">futureDiam.</span> forAliquyam ipsum. <span className="text-color-primary">futureDiam</span> Erat sed eos diam.
                  </p>
                  <div>
                    <div className="button-group">
                      <Link href="/signup"><button className="button button-primary button-wide-mobile">
                        Get started
                      </button></Link>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    </section>
  );
}


export default Hero;
