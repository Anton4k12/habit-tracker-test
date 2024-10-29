import { useState } from "react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const days = [
  {
    id: "monday",
    name: "Mon",
  },
  {
    id: "tuesday",
    name: "Tue",
  },
  {
    id: "wednesday",
    name: "Wed",
  },
  {
    id: "Thursday",
    name: "Thu",
  },
  {
    id: "friday",
    name: "Fri",
  },
  {
    id: "saturday",
    name: "Sat",
  },
  {
    id: "sunday",
    name: "Sun",
  },
];

const colors = [
  "#474B4E",
  "#015D52",
  "#826C34",
  "#CC0605",
  "#D0D0D0",
  "#6C6960",
  "#8F8F8F",
  "#A52019",
  "#A65E2E",
  "#343B29",
];

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAlert = () => {
    alert(inputValue);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-col items-center">
        <div>Habit title</div>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter habit title"
          className="w-1/2"
        ></Input>
      </div>

      <div className="py-2">
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="everyday" id="everyday" />
            <Label htmlFor="everyday">Everyday</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fewAWeek" id="fewAWeek" />
            <Label htmlFor="fewAWeek">Few a week</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex gap-2">
        {days.map((day) => {
          return (
            <div className="cursor-pointer rounded-full border p-2 hover:opacity-60">
              <div className="p-1">{day.name}</div>
            </div>
          );
        })}
      </div>

      <div className="py-2">
        <RadioGroup value={durationValue} onValueChange={setDurationValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="7Days" id="7Days" />
            <Label htmlFor="7Days">7 Days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="14Days" id="14Days" />
            <Label htmlFor="14Days">14 Days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="30Days" id="30Days" />
            <Label htmlFor="30Days">30 Days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="60Days" id="60Days" />
            <Label htmlFor="60Days">60 Days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" />
            <Label htmlFor="custom">Custom duration</Label>
          </div>
        </RadioGroup>
      </div>

      {durationValue === "custom" && <Input></Input>}

      <div className="grid grid-cols-5 gap-1">
        {colors.map((color) => {
          return (
            <div
              onClick={() => setSelectedColor(color)}
              style={{
                backgroundColor: color,
                border:
                  color === selectedColor ? "1px solid #84cc16" : undefined,
              }}
              className="cursor-pointer rounded-full border p-4 hover:opacity-85"
            ></div>
          );
        })}
      </div>

      <button
        onClick={handleAlert}
        className="w-1/3 rounded-lg border bg-lime-500 py-2 hover:opacity-90"
      >
        Save
      </button>
    </div>
  );
};
