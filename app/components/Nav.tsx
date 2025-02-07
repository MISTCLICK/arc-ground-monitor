import { MaximizeIcon, MinusIcon, XIcon } from "lucide-react";

import Logo from "~/images/ARC_full_logo.png";

const statuses = [
  "Preflight",
  "Ascent",
  "Separation",
  "Parachute",
  "Descent",
  "Payload",
  "Postflight",
];

const Nav: React.FC = () => {
  return (
    <header className="h-20 bg-primary">
      <nav className="container font-multicolore text-white mx-auto h-full flex justify-between items-center">
        <img src={Logo} alt="The ARC logo" className="h-4/5" />
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="tracking-widest text-xl">Rocket Name</h1>
          <div
            id="progress"
            className="flex mx-auto relative gap-14 h-fit items-center"
          >
            <div className="bg-white h-1 w-[89.7%] left-10 absolute top-1.5" />
            {statuses.map((status, idx) => (
              <div key={idx} className="flex flex-col items-center gap-y-1">
                <div className="size-4 text-black text-xs z-20 rounded-full bg-white" />
                <div className="text-[60%] tracking-wider">{status}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="*:text-white space-x-6 *:transition-colors">
          <button className="hover:bg-black/25 rounded-full p-0.5">
            <MinusIcon />
          </button>
          <button className="hover:bg-black/25 rounded-full p-0.5">
            <MaximizeIcon className="scale-[80%]" />
          </button>
          <button className="hover:bg-black/25 rounded-full p-0.5">
            <XIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
