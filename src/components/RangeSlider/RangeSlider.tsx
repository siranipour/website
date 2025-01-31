interface SliderProps {
  minValue: string | number;
  maxValue: string | number;
  initValue: string | number;
  onChange: React.Dispatch<React.SetStateAction<string | number>>;
  display: string;
}
const RangeSlider = ({
  minValue,
  maxValue,
  initValue,
  onChange,
  display,
}: SliderProps) => {
  return (
    <div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={initValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <p>
        {display}: {initValue}
      </p>
    </div>
  );
};

export default RangeSlider;
