"use client";

import { Button, Label, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
// import Forms from '../Forms/Forms';
import Input from "../Input/Input";

type Props = { 
    addText: string; 
    onAdd: (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) => void; 
    inputConfigs: InputConfig[],
    onCha: (e: React.ChangeEvent<HTMLInputElement>) => void
    adname: string
 };

type InputConfig = {
  label: string;
  type: string;
  placeholder: string;
};

const CrudTab = ({ addText, inputConfigs, onAdd, onCha, adname}: Props) => {
  //const tabsRef = useRef<TabsRef>(null);
  //const [activeTab, setActiveTab] = useState(0);

  


  return (
    <div className="flex flex-col gap-3">
      <Tabs
        //aria-label="Default tabs"
        
        //ref={tabsRef}
        //onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        <Tabs.Item active title="Add" icon={HiUserCircle}>
          Add{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            {addText}
          </span>
          to the database.
          {inputConfigs.map((config, index) => (
            <div className="py-5 px-2 flex flex-row justify-evenly ">
              <Label className="mt-2">{config.label}</Label>
              <Input
                key={index}
                label={config.label}
                type={config.type}
                placeholder={config.placeholder}
                onchange={onCha}
                addName={adname}
              />
            </div>
          ))}
          <Button color="gray" onClick={onAdd}>
            Add
          </Button>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
      {/* <div className="text-sm text-gray-500 dark:text-gray-400">Active tab: {activeTab}</div>
        <Button.Group>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
            Profile
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
            Dashboard
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
            Settings
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
            Contacts
          </Button>
        </Button.Group> */}
    </div>
  );
};

export default CrudTab;
