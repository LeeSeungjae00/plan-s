import React from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';

export default function ResultArea_2({result}) {
    return (
        <>
        <InputComponent
          type="number"
          lable="Platelet, DNA suppression"
          adornment={<>x1000mm<sup className="mutip">3</sup></>}
          setInputVal={platelet_dna => result.platelet_dna = platelet_dna}
        ></InputComponent>
        <RadioComponent
          title="Cirrhosis, DNA suppression"
          lable1="yes"
          lable2="no"
          setRadioVal={cirrhosis_dna => result.cirrhosis_dna = cirrhosis_dna}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Albumin, DNA suppression"
          adornment="g/dL"
          setInputVal={albumin_dna => result.albumin_dna = albumin_dna}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="Total bilirubin, DNA suppression"
          adornment="mg/dL"
          setInputVal={total_bilirubin_dna => result.total_bilirubin_dna = total_bilirubin_dna}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="ALT, DNA suppression"
          adornment="U/L"
          setInputVal={ATL_dna => result.ATL_dna = ATL_dna}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="HBV DNA, DNA suppression"
          adornment="IU/mL"
          setInputVal={HBV_dna_dna => result.HBV_dna_dna = HBV_dna_dna}
        ></InputComponent>
        <RadioComponent
          title="Presence of HBeAg, DNA suppression"
          lable1="yes"
          lable2="no"
          setRadioVal={presence_of_HBeAg_dna => result.presence_of_HBeAg_dna = presence_of_HBeAg_dna}
        ></RadioComponent>
      </>
    )
}
