import Header from '@/components/header';
import PlayerZone from '@/components/player-zone';

function GameLayout() {
  return (
    <main className="flex flex-col h-full  bg-[#171717]">
      <Header />
      <div className=" flex-1 flex w-full px-1 gap-1 ">
        <PlayerZone />
        <PlayerZone />
      </div>
    </main>
  );
}

export default GameLayout;
