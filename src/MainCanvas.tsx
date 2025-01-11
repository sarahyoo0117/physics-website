import { Application, Citations, GeneralRelativity, Introduction, SpecialRelativity, Wormholes } from './pages';

const MainCanvas = () => {
  return (
    <div className="p-6 flex flex-col gap-24">
      <Introduction />
      <SpecialRelativity />
      <GeneralRelativity />
      <Application />
      <Wormholes />
      <Citations />
    </div>
  )
}

export default MainCanvas