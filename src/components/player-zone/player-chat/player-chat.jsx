function PlayerChat() {
  return (
    <div className="flex-1 w-full bg-[#313131] rounded-t-lg border-[1px] border-[#454545]  overflow-clip">
      <div className="flex flex-col ">
        <div className="w-full  flex-1  rounded-l-lg gap-3 p-2 bg-[#222222]">
          <span>I</span>
          <span>Playerx</span>
        </div>
        <div className=" flex-1 grid grid-cols-1 gap-2 p-3">
          <div>message1</div>
          <div className="justify-self-end">message2</div>
          <div>message3</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerChat;
