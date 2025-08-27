import React, { useState, useCallback } from "react";

// Defines the structure for a single setting item, which includes an ID and a display label.
interface SettingItem {
  id: string;
  label: string;
}

const PlatformSettings: React.FC<Record<string, never>> = () => {
  const [settings, setSettings] = useState<{ [key: string]: boolean }>({
    emailFollow: true,
    emailAnswer: false,
    emailMention: true,
    newLaunches: false,
    monthlyUpdates: false,
    newsletter: true,
    mailsWeekly: true,
  });

  const handleToggleChange = useCallback((id: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [id]: !prevSettings[id],
    }));
  }, []);

  const accountSettings: SettingItem[] = [
    { id: "emailFollow", label: "Email me when someone follows me" },
    { id: "emailAnswer", label: "Email me when someone answers to..." },
    { id: "emailMention", label: "Email me when someone mentions me" },
  ];

  const applicationSettings: SettingItem[] = [
    { id: "newLaunches", label: "New launches and projects" },
    { id: "monthlyUpdates", label: "Monthly product updates" },
    { id: "newsletter", label: "Subscribe to newsletter" },
    { id: "mailsWeekly", label: "Receive mails weekly" },
  ];

  const ToggleSwitch: React.FC<{
    item: SettingItem;
    onToggle: (id: string) => void;
    isChecked: boolean;
  }> = ({ item, onToggle, isChecked }) => (
    <div
      className="flex items-center justify-between md:py-[.4vw] py-1 md:px-[.75vw] px-2 rounded-md transition-all duration-150 ease-in-out cursor-pointer hover:bg-gray-700/50"
      onClick={() => onToggle(item.id)}
    >
      <label
        htmlFor={item.id}
        className="text-gray-300  md:text-[1vw] text-xs flex-grow"
      >
        {item.label}
      </label>
      <div
        className={`relative inline-flex items-center flex-shrink-0 md:h-[1vw] h-4 md:w-[2vw] w-8 border-2  border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:mr-[.75vw] mr-2 ${
          isChecked ? "bg-blue-600" : "bg-gray-600"
        }`}
        role="switch"
        aria-checked={isChecked}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block md:h-[.7vw] h-3 md:w-[.7vw] w-3 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
            isChecked ? "md:translate-x-[.9vw] translate-x-4" : "translate-x-0"
          }`}
        ></span>
      </div>
    </div>
  );

  return (
    <div className="md:col-span-1 col-span-4 rounded-2xl shadow-2xl md:p-[1.25vw] p-4 w-full bg-gradient-to-br from-[rgb(2,6,28)] via-transparent to-[rgba(8,12,32,0.74)] backdrop-blur-[120px] transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)]">
      <h2 className="lg:text-[1vw]  md:text-[1vw] text-xs text-white  font-semibold ">
        Platform Setting
      </h2>

      <section>
        <h3 className="font-medium lg:text-[.85vw] text-[12px] md:my-[.75vw] md:mt-[.75vw] mt-2 md:mb-[.4vw] mb-1 text-gray-400">
          Account
        </h3>
        <div>
          {accountSettings.map((item) => (
            <ToggleSwitch
              key={item.id}
              item={item}
              onToggle={handleToggleChange}
              isChecked={settings[item.id]}
            />
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:mt-[.4vw] mt-1 md:mb-[.4vw] mb-1 text-gray-400">
          Application
        </h3>
        <div>
          {applicationSettings.map((item) => (
            <ToggleSwitch
              key={item.id}
              item={item}
              onToggle={handleToggleChange}
              isChecked={settings[item.id]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlatformSettings;
