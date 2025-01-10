import { Application, Citations, GeneralRelativity, Introduction, SpecialRelativity, Wormholes } from './pages';

const MainCanvas = () => {
  return (
    <div>
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