"use client";

export interface SwitchProps {
  item: {
    changeMode: () => void;
    darkMode: boolean;
  };
}

const SwitchMode = ({ item }: SwitchProps) => {
  const handleChangeMode = () => {
    item.changeMode();
  };

  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        checked={item.darkMode}
        onChange={handleChangeMode}
      />
      {/* <Component item={item} /> */}
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default SwitchMode;
