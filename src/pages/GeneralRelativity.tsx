import { GeneralRelativitySim } from '../Components'
import { gravitational_time_dilation_formula, satellite } from '../imeags'

const GeneralRelativity = () => {
  return (
    <main className='pt-6'>
        <h1 className="text-4xl font-dm_serif font-bold text-center mb-6">
            Method 2: Gravitational Time Dilation
        </h1>
        <section className="space-y-6 text-lg mx-auto max-w-4xl">
            <h2 className="text-2xl font-dm_serif">The Theory of General Relativity</h2>
            <p>
                General relativity is 'generalized' version of special relativity by involving gravity.
            </p>
            <p>
                It states that the presence of a massive object causes a bending of spacetime or <strong>spacetime curvature</strong>.
                Time passes slowly near a large mass because the mass curves spacetime, which increases the distance an object near the mass' gravitational field has to travel.
                It's basically the same idea as time dilation in special relativity (time should be dilated to cover longer distance). This phenomenon is called <strong>gravitational time dilation</strong>.
            </p>
            <p>
                By traveling near a massive object, or spending time in a strong gravitational field, you could experience time at a much slower rate than people who remain in weaker gravitational environments.
                When you return to a region of weaker gravity, you would find that much more time has passed for everyone else, but only a small amount of time would have passed for you. In essence, you would have "traveled" into the future.
            </p>
        </section>
        <section className="space-y-6 text-lg mx-auto max-w-4xl pt-6">
            <h2 className="text-2xl font-dm_serif">Real life example: GPS satellites</h2>
            <img src={satellite} alt='satellite imeage'/>
            <p>
                An example that is influenced by gravitational field is GPS satellites. Satellites orbit the Earth in a weaker gravitational field than we experience on the ground, as they locate at a longer distance from the Earth.
                As a result, satellites' clocks run slightly faster than those on Earth. Engineers must account for this effect to ensure the GPS system remains accurate. Otherwise, Google Maps would be wrong by about 10km a day!
            </p>
            <p>
                In more dramatic cases, such as near a supermassive black hole, time dilation would be very extreme and allow someone to travel forward in time by decades or even centuries, without experiencing the passage of time in the same way as someone on Earth.
                This is how general relativity enables a form of time travel—by manipulating the flow of time itself through the curvature of spacetime caused by gravity.
            </p>
        </section>
        <section className="space-y-6 text-lg mx-auto max-w-4xl pt-6">
            <h2 className="text-2xl font-dm_serif">Gravitational Time Dilation Formula</h2>
            <div className='flex gap-8'>
                <img src={gravitational_time_dilation_formula} alt='gravitational time dilation formula'/>
                <ul>
                    <li>G: Newton's universial gravitational constant </li>
                    <li>M: mass of the object</li>
                    <li>r: distance from the center of the object</li>
                    <li>t: original time interval</li>
                    <li>t': dilated time interval</li>
                </ul>
            </div>
        </section>
        <section className="space-y-6 text-lg mx-auto max-w-4xl pt-6">
            <h2 className="text-2xl font-dm_serif">Gravitational Time Dilation Simulation</h2>
            <p>Play with simulation and understand time dilation by gravity!</p>
            <GeneralRelativitySim />
        </section>
    </main>
  )
}

export default GeneralRelativity