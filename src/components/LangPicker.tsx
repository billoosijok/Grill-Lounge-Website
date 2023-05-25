import {Button, Dropdown} from "@nextui-org/react";
import data from "../data.json";
import React from "react";

export const LangPicker = ({lang, onChange}) => {
  return <Dropdown>
    <Dropdown.Trigger>
      <Button
        light
        size={'xs'}
        ripple={false}
        iconRight={<img aria-hidden width={10} src={require(`../img/arrow.png`)}/>}
        css={{minWidth: 0, maxWidth: 80}}
      >
        <img width={40} src={require(`../img/${data.langs[lang].icon}.png`)}/>
      </Button>
    </Dropdown.Trigger>
    <Dropdown.Menu selectedKeys={[lang]} onAction={onChange as any}>
      {Object.entries(data.langs).map(([lang, {label, icon}]) => (
        <Dropdown.Item
          key={lang}
          icon={<img height={30} src={require(`../img/${icon}.png`)}/>}
        >
          {label}
        </Dropdown.Item>
      )) as any}
    </Dropdown.Menu>
  </Dropdown>
}