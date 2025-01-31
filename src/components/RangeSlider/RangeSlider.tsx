import * as Slider from "@radix-ui/react-slider";
import style from "./RangeSlider.module.css";

const RangeSlider = ({
  displayText,
  defaultValue,
  min,
  max,
  onValueChange,
}) => (
  <div className={style["slider-container"]}>
    {displayText}: {defaultValue}
    <Slider.Root
      className={style["SliderRoot"]}
      defaultValue={[defaultValue]}
      min={min}
      max={max}
      step={1}
      onValueChange={onValueChange}
    >
      <Slider.Track className={style["SliderTrack"]}>
        <Slider.Range className={style["SliderRange"]} />
      </Slider.Track>
      <Slider.Thumb className={style["SliderThumb"]} aria-label="Volume" />
    </Slider.Root>
  </div>
);

export default RangeSlider;
