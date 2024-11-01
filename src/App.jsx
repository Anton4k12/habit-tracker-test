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
  { id: "Squirrel grey", color: "#78858B" },
  { id: "Signal blue", color: "#1E2460" },
  { id: "Pale green", color: "#89AC76" },
  { id: "Umbra grey", color: "#332F2C" },
  { id: "Silk grey", color: "#CAC4B0" },
  { id: "Beige red", color: "#C1876B" },
  { id: "Purple violet", color: "#4A192C" },
  { id: "Leaf green", color: "#2D572C" },
  { id: "Red violet", color: "#922B3E" },
  { id: "Curry", color: "#9D9101" },
];

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [timesValue, setTimesValue] = useState("");

  const allInfo =
    inputValue + timesValue + selectedDay + durationValue + selectedColor;

  const handleAlert = () => {
    alert(allInfo);
  };

  const handleChosenDay = (day) => {
    setSelectedDay(day);
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
        <RadioGroup value={timesValue} onValueChange={setTimesValue}>
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
            <div
              style={{
                border:
                  day.id === selectedDay ? "1px solid #84cc16" : undefined,
              }}
              onClick={() => handleChosenDay(day.id)}
              className="cursor-pointer rounded-full border p-2 hover:opacity-60"
            >
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
              onClick={() => setSelectedColor(color.id)}
              style={{
                backgroundColor: color.color,
                border:
                  color.id === selectedColor ? "1px solid #84cc16" : undefined,
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
