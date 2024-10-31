import Header from '@/components/header';
import PlayerZone from '@/components/player-zone';

function GameLayout() {
  return (
    <main className="flex flex-col h-full w-full">
      <Header />
      <PlayerZone />
    </main>
  );
}

export default GameLayout;
