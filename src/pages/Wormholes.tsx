import { WormholeSim } from "../Components"
import { exotic_matter, field_equation, wormhole } from "../images"

const Wormholes = () => {
  return (
    <div className="pt-6 font-open_sans flex flex-col gap-6">
        <h1 className="text-4xl font-dm_serif text-center mb-6">
            Method 3: Time Travel Through Wormholes (Theoretical)
        </h1>

        <section className="space-y-6 mx-auto max-w-4xl">
            <img src={wormhole} alt="wormhole diagram"/>
            <h2 className="text-2xl font-dm_serif">General Relativity and Einstein Field Equations</h2>
            <p>
                Wormholes are consistent with general relativity, but wheter they actually exist is unknown.
                General relativity predicts wormholes as solutions to Einstein's field equation, which describes how mass and energy curve spacetime. See the formula below.
                This equation tells us that the formation of wormhole is possible as a result of highly curved spacetime geometry in certain extreme cases: such as black holes.
            </p>
            <img src={field_equation} alt='field equation'/>
            <ul className="list-disc text-[21px]">
                <li>Gμν is the Einstein tensor and represents the curvature of space.</li>
                <li>Λ is the cosmological constant: an amount of energy, positive or negative, that is inherent to the fabric of space itself.</li>
                <li>gμν is known as the metric, which mathematically encodes the properties of every point within spacetime.</li>
                <li>8πG/c4 is just a product of constants and is known as Einstein’s gravitational constant, the counterpart of Newton’s gravitational constant (G) that most of us are more familiar with.</li>
                <li>Tμν is the stress-energy tensor, which describes the local (in the nearby vicinity) energy, momentum, and stress within that spacetime.</li>
            </ul>
        </section>
        
        <section className="space-y-6 mx-auto max-w-4xl">
            <h2 className="text-2xl font-dm_serif">Structure of Wormhole and How It Works</h2>
            <p>
                A wormhole is a hypothetical, tunnel-like structure that connects two different points in space-time. 
                There are three types of wormholes: traversable, non-traversable, and one-way wormholes.
                Among these, it is traversable wormhole that allows for both space and time travels, theoretically.
            </p>
            <div>
                <WormholeSim />
                <label className="text-gray-400">^ Theoretical traversable wormhole model</label>
            </div>
            <p>
                A traversable wormhole consists of two regions of spacetime connected by a throat that remains open long enough to allow passage.
                The wormhole is prevented from collasping by exotic matter—a theoretical matter with negative energy density.
                This exotic matter causes repulsive gravity and makes the wormhole stably open.
            </p>
            <p>
                In theory, if one end of a traversable wormhole were moved at a significant fraction of the speed of light or placed in a strong gravitational field (near a massive object like a black hole), it could experience time dilation as explained in the general relativity section.
                This time dilation creates so-called, 'time traveling' effect.
            </p>
        </section>
        
        <section className="space-y-6 mx-auto max-w-4xl">
            <h2 className="text-2xl font-dm_serif">Exotic Matter and Conservation of Energy</h2>
            <img src={exotic_matter}/>
            <p>
                The energy conservation principle implies that this exotic matter must come from somewhere, and its total energy must be accounted for in the system's energy balance.
            </p>
            <p>
                Traveling through a wormhole could involve significant energy transfer. As an object enters a wormhole, it would need to overcome the gravitational forces at the entrance, requiring energy. Similarly, exiting the wormhole would involve an energy change due to the differing gravitational potentials at the two ends.
            </p>
            <p>
                These energy transfers must obey the conservation of energy (as it is a fundamental principle). The total energy of the system, including the energy of the object, the wormhole, and the exotic matter, must remain constant.
            </p>
            <p>
                So, the exotic matter is what makes the wormhole theory unpredictable. Its negative energy density implies that it can create regions where the total energy appears to be less than zero, which is conterintuitive with the conservation of energy law. 
            </p>

            <p>
                Physicists, including Stephen Hawking, assume that wormholes constantly pop in and out of existence at the quantum scale, far smaller than atoms. 
                However, there is no evidence for the existence of wormholes, even if evidence of black holes is substantial. The theory hasn’t been proved due to the incompatibility of general relativity with quantum mechanics.
            </p>
            <p>Watch video below for more information about wormhole theory.</p>
            <div className="flex justify-center">
                <iframe 
                    width="800"
                    height="500"
                    title="Wormholes Explained"
                    src="https://www.youtube.com/embed/9P6rdqiybaw" 
                    allowFullScreen
                />
            </div>
        </section>
        
        <section className="space-y-6 mx-auto max-w-4xl mt-8">
            <h2 className="text-2xl font-dm_serif">Conclusion + Is It Possible to Time-Travel Into the Past?</h2>
            <p>
                The relativity theories say it is possible to time travel into the future. It can be done by travelling at speeds close to the speed of light or spending time in an intense gravitational field. However, travelling into the past is either wildly difficult or absolutely impossible.
            </p>
            <p>
                One specific reason of this is going back to the past requires universal to decrease in enthrophy, which is a measure of the disorder of a system. This violates the second law of thermodynamics stating that entropy or randomness must always increase.
                This means time naturally progresses from a state of order to disorder, making reversing time contrary to the laws of physics. Additionally, it introduces paradoxes like the "grandfather paradox" that violate causality, where the cause must precede the effect.
            </p>
            <p>
                Furthermore, while general relativity permits theoretical constructs like closed timelike curves and wormholes, stabilizing these would require exotic matter, which is speculative and unobserved. Also theories like Stephen Hawking's chronology protection conjecture suggest that physical laws inherently prevent such time travel to maintain the consistency of historical events. 
            </p>
            <p>
                Therefore, while traveling to the future is feasible with high-speed travel or intense gravitational fields, the hurdles for traveling to the past are insurmountable with our current understanding and technology.
            </p>
        </section>
    </div>
  )
}

export default Wormholes