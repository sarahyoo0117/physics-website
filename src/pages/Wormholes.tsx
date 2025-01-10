import { WormholeSim } from "../Components"

const Wormholes = () => {
  return (
    <main className="pt-6 font-open_sans">
        <h1 className="text-4xl font-dm_serif text-center mb-6">
            Extra: Wormhole Theory
        </h1>
        <section className="space-y-6 text-lg mx-auto max-w-4xl">
            <h2 className="text-2xl font-dm_serif">Possibility of Time Travel Through Wormholes</h2>
            <p>
                Wormholes are consistent with general relativity, but wheter they actually exist is unknown.
                General relativity predicts wormholes as solutions to Einstein's field equation, which describes how mass and energy curve spacetime. See the formula below.
                This equation tells us that the formation of wormhole is possible as a result of highly curved spacetime geometry in certain extreme cases: such as black holes.
            </p>
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
                The wormhole is prevented from collasping by exotic matter--a theoretical matter with negative energy density.
                This exotic matter causes repulsive gravity and makes the wormhole stably open.
            </p>
            <p>
                In theory, if one end of a traversable wormhole were moved at a significant fraction of the speed of light or placed in a strong gravitational field (near a massive object like a black hole), it could experience time dilation as explained in the general relativity section.
                This time dilation creates so-called, 'time traveling' effect.
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
    </main>
  )
}

export default Wormholes