import { Application, GeneralRelativity, Introduction, SpecialRelativity } from './pages';

const MainCanvas = () => {
  return (
    <div>
      <Introduction />
      <SpecialRelativity />
      <GeneralRelativity />
      <Application />
    </div>
  )
}

export default MainCanvas