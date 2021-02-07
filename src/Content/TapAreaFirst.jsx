import React from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';

export default function ResultAreaFirst({result, rangeFilter}) {
  return (
        <>
        <InputComponent
          type="number"
          min= {rangeFilter?.age?.min}
          max= {rangeFilter?.age?.max}
          lable="Age"
          adornment="Years"
          setInputVal={age => result.age = age}
        ></InputComponent>
        <RadioComponent
          title="Sex"
          value1={"true"}
          value2={"false"}
          lable1="male"
          lable2="female"
          setRadioVal={male => result.male = male}
        ></RadioComponent>
        <RadioComponent
          title="Antivirals agent"
          value1={"entecavir"}
          value2={"tenofovir"}
          lable1="entecavir"
          lable2="tenofovir"
          setRadioVal={antivirals => result.antivirals = antivirals}
        ></RadioComponent>
        <RadioComponent
          title="Race"
          value1={"Asian"}
          value2={"Caucasian"}
          lable1="Asian"
          lable2="Caucasian"
          setRadioVal={race => result.race = race}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Platelet, baseline"
          min= {rangeFilter?.platelet?.min}
          max= {rangeFilter?.platelet?.max}
          adornment={<>x1000mm<sup className="mutip">3</sup></>}
          setInputVal={platelet => result.platelet = platelet}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="Albumin, baseline"
          min= {rangeFilter?.albumin?.min}
          max= {rangeFilter?.albumin?.max}
          adornment="g/dL"
          setInputVal={albumin => result.albumin = albumin}
        ></InputComponent>
        
        <InputComponent
          type="number"
          lable="Total bilirubin, baseline"
          min= {rangeFilter?.total_bilirubin?.min}
          max= {rangeFilter?.total_bilirubin?.max}
          adornment="mg/dL"
          setInputVal={total_bilirubin => result.total_bilirubin = total_bilirubin}
        ></InputComponent>
        <RadioComponent
          title="Cirrhosis, baseline"
          value1={"true"}
          value2={"false"}
          lable1="yes"
          lable2="no"
          setRadioVal={cirrhosis => result.cirrhosis = cirrhosis}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="ALT, baseline"
          min= {rangeFilter?.ALT?.min}
          max= {rangeFilter?.ALT?.max}
          adornment="U/L"
          setInputVal={ALT => result.ALT = ALT}
        ></InputComponent>
        <RadioComponent
          title="Presence of HBeAg, baseline"
          value1={"true"}
          value2={"false"}
          lable1="yes"
          lable2="no"
          setRadioVal={presence_of_HBeAg => result.presence_of_HBeAg = presence_of_HBeAg}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="HBV DNA, baseline"
          min= {rangeFilter?.HBV_DNA?.min}
          max= {rangeFilter?.HBV_DNA?.max}
          adornment="IU/mL"
          setInputVal={HBV_DNA => result.HBV_DNA = HBV_DNA}
        ></InputComponent>
      </>
    )
}
