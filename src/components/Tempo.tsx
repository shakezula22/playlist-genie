import { Checkbox, NumberInput } from '@mantine/core';
import { OptionsProps } from '../types';
export default function Tempo({
  setTunables,
  tempo,
  tempoEnabled,
}: OptionsProps) {
  const onChangeHandler = (id: string, value: number) => {
    setTunables(obj => ({
      ...obj,
      [id]: value,
    }));
  };
  return (
    <div className="tempo">
      <Checkbox
        className="teal"
        label="Do You Want to Set the Tempo?"
        defaultChecked={tempoEnabled}
        onChange={e =>
          setTunables(obj => ({ ...obj, tempoEnabled: e.target.checked }))
        }
      />
      {tempoEnabled && (
        <div className="tempo__input">
          <NumberInput
            placeholder="160 BPM"
            value={tempo}
            onChange={val => onChangeHandler('tempo', +val)}
          />
          <h2>BPM</h2>
        </div>
      )}
    </div>
  );
}
