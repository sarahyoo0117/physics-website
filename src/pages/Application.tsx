import { MathJax, MathJaxContext } from "better-react-mathjax"
import { travis_scott } from "../images"
import { math_jx_config } from "../configs"

const Application = () => {
  return (
    <div className='pt-6 font-open_sans flex flex-col gap-6'>
        <h1 className="text-4xl font-dm_serif text-center mb-6">
            Application: Travis Scott's Time Dilation 
        </h1>

        <section className="space-y-6 text-lg mx-auto max-w-4xl">
            <h2 className="text-2xl font-dm_serif">Travis Scott: Whom Has the Longest Flight Hours Among All Celebrities</h2>
            <img src={travis_scott} alt="travis scott and his private jet"/> 
            <p>
              Travis Scott, the famous singer, was ranked first for taking most flights in 2024.
              He spent most time on flights while we are spending time on ground.
              Don't you want to know how much Travis Scott's time was dilated? Let's find out with the concept of relativity theory!
            </p>
            <MathJaxContext version={3} config={math_jx_config}>
              <MathJax>Travis Scott's total flight time: 42 days 22 hours 57 minutes {'$= 3711420 s$'}</MathJax>
              <MathJax>Private jet model: Embraer Lineage 1000, cruising speed: {'$871 km/h \\div 3.6 = 242.5 m/s$'}</MathJax>
              <MathJax>Speed of light: {'$3 \\times 10^8 m/s$'}</MathJax>
              <MathJax>{"$t_\\text{dilated} = t_\\text{earth} \\times \\sqrt{1- \\frac{v^2}{c^2}}$"}</MathJax>
              <MathJax>{"$t_\\text{dilated} = (3711420 s) \\times \\sqrt{1- \\frac{(242.5 m/s)^2}{(3 \\times 10^8 m/s)^2}}$"}</MathJax>
              <MathJax>{'$t_\\text{dilated} = 3711419.9999987874 s$'}</MathJax>
              <MathJax>{"time difference = $t _\\text{dilated}-t_\\text{earth}= 1.21 \\times 10^-6 s$"}</MathJax>
              <MathJax>{'With total time flights of 3.7 million seconds (around 1031 hours), Travis Scott is living about $1.21 \\times 10^-6 s$ more slowly than us!'}</MathJax>
            </MathJaxContext> 
        </section>
    </div>
  )
}

export default Application