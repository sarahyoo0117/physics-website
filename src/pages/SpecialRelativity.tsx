import { TimeDilationSim, TwinParadoxSim } from '../Components'
import { scotty_kelly_and_his_twin, time_dilation_formula } from '../imeags'
import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { math_jx_config } from '../configs'

const SpecialRelativity = () => {
  return (
    <div className="max-w-4xl mx-auto pt-6 font-open_sans">
        <h1 className="text-4xl font-dm_serif text-center mb-6">
            Method 1: Time Traveling by Speeds
        </h1>

        <section className="space-y-6 text-lg">
            <h2 className="text-2xl font-dm_serif">The Theory of Special Relativity</h2>
            <div className='flex flex-col gap-4'>
                <p>
                    Special relativity states that the faster you move, the slower time passes for you. It explains the relationship between speed, time, and mass.
                </p>
 
                <p>Special relativity applies under the following two conditions: </p>
                <ol className="list-decimal list-inside pl-6 space-y-2">
                    <li>The laws of physics are the same for all observers moving at a constant speed and in a straight line.</li>
                    <li>The speed of light is the same for everyone, irrespective of their motion relative to the light source.</li>
                </ol>
                
                <p>So, how can we time-travel into the future using special relativity?</p>
                <p>Well, it's by dilating time! </p>
                <p>According to special relativity, our time passes slowly, proportional to how fastly we move. So, if we live at speed vary faster than others, our time is dilated, and we age more slowly than others.</p>
                <p>It's not like what we think of those time-traveling movies. Still, the results are the same: other people are living ahead of us!</p>

                <p>Let me introduce you the time dilation formula:</p> 
                <img src={time_dilation_formula} className='h-[300px] w-[500px]'/>
                <p>
                    The equation tells that dilated time is inversely proportional to velocity.
                </p>
                <p>
                    At a speed close to light, 1 second relative to the Earth is measured around 19.6 hours. So, after one hour of travel, 19.6h x 3600s = 70,560 hours have passed on the Earth. After 24 hours of travel, 70,560h x 24 = 1,693,440 hours have passed, which is around 193 years!
                </p>
                <p>Therefore, travelling at a speed close to light delays time significantly and creates a ‘time-travelling’ effect.</p>

                <p>Play with the simulation below!</p>
                <div className="p-6 rounded-lg shadow-sm">
                    {/* Add your simulation component here */}
                    <TimeDilationSim />
                </div>
            </div>
        </section>

        <section className="space-y-6 mt-12 text-lg">
            <h2 className="text-2xl font-dm_serif">Twin Paradox: Demonstration of Time Dilation</h2>
            <p>
                You don't need to understand how time dilation formula was derived to know the correlation between time and speed.
                Twin Paradox demonstrates time dilation visually and easily.
            </p>
            <TwinParadoxSim />
            <p>
                Suppose there are two astronauts A and B. Astronaut A is on a moving spaceship, while B is standing on the Earth.
                In this demonstration, A shots a light straight up, and the light moves vertically up and down. 
            </p>
            <p>
                From A's perspective, the light only goes up and down. But, from B's perspective, the light travels longer.
            </p>
            <p>
               Since A is moving at a constant speed and the light travels a longer distance from B's (or Earth) perspective, A's time becomes greater and dilated. 
            </p>
        </section>

        <section className="space-y-6 mt-12 text-lg">
            <h2 className="text-2xl font-dm_serif">Twin Paradox in Real Life: The Astronaut Scotty Kelly and His Brother</h2>
            <div className='flex flex-col gap-4'>
                <img src={scotty_kelly_and_his_twin} className='h-[560px]' alt='Scotty Kelly and His Twin Brother'/>
                <label className='text-gray-400'>^ Scotty Kelly and his twin brother (left)</label>
                <p>
                    Astronauts experience time dilation because they travel at high speeds in orbitals around the Earth. For example, former NASA astronaut Scotty Kelly completed historic one-year mission abroad the International Space Station (ISS), which was the longest spaceflight by an American astronaut. While in space, he aged more slowly than his twin brother, who stayed on the Earth.
                </p>
                <p>
                    Kelly travelled total 520 days in space at around 281690km/h.
                    Let's calculate how much Kelly's time was dilated by using time dilation formula!
                </p>
                <MathJaxContext version={3} config={math_jx_config}>
                    <MathJax>{"$t_\\text{earth} = 520 days \\times 24 h \\times \\ 3600 s = 44928000s$"}</MathJax>
                    <MathJax>{"$v = 28160km/h \\div 3.6 = 7822.22m/s$"}</MathJax>
                    <MathJax>{"$t_\\text{dilated} = t_\\text{earth} \\times \\sqrt{1- \\frac{v^2}{c^2}}$"}</MathJax>
                    <MathJax>{"$t_\\text{dilated}= (44928000s) \\times \\sqrt{1- \\frac{(7822.22 m/s)^2}{(3\\times10^2 m/s)^2}}$"}</MathJax>
                    <MathJax>{"$t_\\text{dilated}= 44927999.98 s$"}</MathJax>
                    <MathJax>{"time difference due to dilation: $t _\\text{dilated}-t_\\text{earth}= 0.015 s$"}</MathJax>
                </MathJaxContext>
                <p>Scotty Kelly aged 0.015 seconds slowerly than his twin brother Mark during the 520 days in orbit.</p>
            </div>
        </section>
    </div>
  )
}

export default SpecialRelativity