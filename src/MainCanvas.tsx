import { Application, GeneralRelativity, Introduction, SpecialRelativity, Wormholes } from './pages';

const MainCanvas = () => {
  return (
    <div>
      <Introduction />
      <SpecialRelativity />
      <GeneralRelativity />
      <Application />
      <Wormholes />
    </div>
  )
}

export default MainCanvas