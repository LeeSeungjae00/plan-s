import React from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';

export default function ResultAreaFirst({result}) {
    return (
        <>
        <InputComponent
          type="number"
          min="0"
          lable="Age"
          adornment="Years"
          setInputVal={age => result.age = age}
        ></InputComponent>
        <RadioComponent
          title="Sex"
          lable1="male"
          lable2="female"
          setRadioVal={sex => result.sex = sex}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Platelet, baseline"
          adornment={<>x1000mm<sup className="mutip">3</sup></>}
          setInputVal={platelet => result.platelet = platelet}
        ></InputComponent>
        <RadioComponent
          title="Antivirals agent"
          lable1="entecavir"
          lable2="tenofovir"
          setRadioVal={antivirals => result.antivirals = antivirals}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Albumin, baseline"
          adornment="g/dL"
          setInputVal={albumin => result.albumin = albumin}
        ></InputComponent>
        <RadioComponent
          title="Cirrhosis, baseline"
          lable1="yes"
          lable2="no"
          setRadioVal={cirrhosis => result.cirrhosis = cirrhosis}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Total bilirubin, baseline"
          adornment="mg/dL"
          setInputVal={total_bilirubin => result.total_bilirubin = total_bilirubin}
        ></InputComponent>
        <RadioComponent
          title="Presence of HBeAg, baseline"
          lable1="yes"
          lable2="no"
          setRadioVal={presence_of_HBeAg => result.presence_of_HBeAg = presence_of_HBeAg}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="ALT, baseline"
          adornment="U/L"
          setInputVal={ALT => result.ALT = ALT}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="HBV DNA, baseline"
          adornment="IU/mL"
          setInputVal={HBV_DNA => result.HBV_DNA = HBV_DNA}
        ></InputComponent>
      </>
    )
}
