

export const Mission = () => {
  return (
    <div className="p-20 flex items-center justify-center flex-col bg-[#fff]">
      <div className="mission p-16 flex justify-between w-full">
        <Box
          color={'rgb(135,10,129)'}
          title={'mission'}
          writeUp="is to empower businesses by creating revolutionary software and strong brands that drive digital growth and lasting impact"
          rotate="8.08deg"
        />
        <h1 className="title capitalize text-3xl font-semibold flex items-end text-black">our mission</h1>
      </div>

      <div className="vision p-16 flex justify-between w-full">
        <h1 className="title capitalize text-3xl font-semibold flex items-end text-black">our vision</h1>
        <Box
          color={`rgb(56,5,158)`}
          title={'vision'}
          writeUp=" is to be a leading force in shaping the digital future, helping businesses thrive through technology and creative brand solutions"
          rotate="-8.07deg"
        />

      </div>
    </div>
  )
}

interface BoxProps {
  color: string;
  writeUp: string;
  title: string;
  rotate: string;
}

const Box: React.FC<BoxProps> = ({ color, writeUp, title, rotate }) => {
  return (
    <div
      className={`write-up w-96 py-8 px-4 shadow-black border-black border-4 text-white `}
      style={{ boxShadow: '7px 7px 0px #000', backgroundColor: color, rotate: rotate }}
    >
      Our <strong className="uppercase">{title}</strong> {writeUp}
    </div>
  )
}