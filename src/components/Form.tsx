import { Label, TextInput } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function Form() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <TextInput id="base" type="date" sizing="md" />
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="small" value="Selecciona la ciudad" />
            </div>
            <Select id="countries" required>
              <option>Matamoros</option>
              <option>Valle</option>
            </Select>
          </div>
        </div>
        <div className="w1/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Precio Unitario" />
            </div>
            <TextInput id="large" type="number" sizing="md" value={'10'} disabled />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Ingresa la cantidad de boletos" />
            </div>
            <TextInput id="small" type="number" sizing="md" />
          </div>
        </div>
        <div className="w1/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Precio Total a pagar" />
            </div>
            <TextInput id="large" type="number" sizing="md" value={'0'} disabled />
          </div>
        </div>
      </div>
      <div className="mb-2 block">
        <Button className="bg-red-500">Comprar</Button>
      </div>
    </div>
  );
}
