export default function ProgressBar({ progress }: { progress: string }) {
  return (
    <div
      style={{ width: `${progress}%` }}
      className={`bg-[#36A546] my-2 h-[10px] border-[2px] rounded-full border-[#00FF2580] border-solid `}
    ></div>
  );
}
