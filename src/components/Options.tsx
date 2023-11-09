import { Slider } from '@mantine/core';
import { OptionsProps } from '../types';

export default function Options(props: OptionsProps) {
  const onChangeHandler = (id: string, value: number) => {
    props.setTunables(obj => ({
      ...obj,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="slider">
        <div className="slider__range teal">
          <p className="slider">No Dancing</p>
          <p>Dancing Queen</p>
        </div>
        <Slider
          value={+props.dance}
          onChange={val => onChangeHandler('dance', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>
      <div className="slider">
        <div className="slider__range teal">
          <p>No Energy</p>
          <p>High Energy</p>
        </div>
        <Slider
          value={+props.energy}
          onChange={val => onChangeHandler('energy', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>
      <div className="slider">
        <div className="slider__range teal">
          <p>So Sad</p>
          <p>So Happy!</p>
        </div>
        <Slider
          value={+props.valence}
          onChange={val => onChangeHandler('valence', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>{' '}
      <div className="slider">
        <div className="slider__range teal">
          <p>Plugged In</p>
          <p>Acoustic Only</p>
        </div>
        <Slider
          value={+props.acoustic}
          onChange={val => onChangeHandler('acoustic', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>
      <div className="slider">
        <div className="slider__range teal">
          <p>Lyrical</p>
          <p>No Vocals</p>
        </div>
        <Slider
          value={+props.instrumental}
          onChange={val => onChangeHandler('instrumental', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>
      <div className="slider">
        <div className="slider__range teal">
          <p>No Live</p>
          <p>All Live!</p>
        </div>
        <Slider
          value={+props.live}
          onChange={val => onChangeHandler('live', val)}
          min={0}
          max={10}
          color="grape.3"
        />
      </div>
    </>
  );
}
