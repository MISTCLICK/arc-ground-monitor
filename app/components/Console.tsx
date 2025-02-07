import { useState } from "react";

const Console: React.FC = () => {
  const [console, setConsole] = useState(["[LOG] System Initialised"]);

  return (
    <div className="bg-secondary text-white font-mono h-4/5 rounded flex-1 flex flex-col space-y-2 justify-between py-2 px-3">
      <div className="overflow-y-auto">
        {console.map((log, idx) => (
          <p key={idx}>{log}</p>
        ))}
      </div>
      <form
        className="flex gap-x-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const command = formData.get("console") as string;

          setConsole((v) => [...v, command]);
          e.currentTarget.reset();
        }}
      >
        <p>{">"}</p>
        <input
          maxLength={80}
          name="console"
          type="text"
          className="bg-transparent focus-visible:outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Console;
