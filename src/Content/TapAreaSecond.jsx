import React from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';

export default function ResultAreaSecond({result, rangeFilter}) {
    return (
        <>
        <InputComponent
          type="number"
          lable="Platelet, DNA suppression"
          min= {rangeFilter?.platelet_dna?.min}
          max= {rangeFilter?.platelet_dna?.max}
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
          min= {rangeFilter?.albumin_dna?.min}
          max= {rangeFilter?.albumin_dna?.max}
          adornment="g/dL"
          setInputVal={albumin_dna => result.albumin_dna = albumin_dna}
        ></InputComponent>
        <RadioComponent
          title="Presence of HBeAg, DNA suppression"
          lable1="yes"
          lable2="no"
          setRadioVal={presence_of_HBeAg_dna => result.presence_of_HBeAg_dna = presence_of_HBeAg_dna}
        ></RadioComponent>
        <InputComponent
          type="number"
          lable="Total bilirubin, DNA suppression"
          min= {rangeFilter?.total_bilirubin_dna?.min}
          max= {rangeFilter?.total_bilirubin_dna?.max}
          adornment="mg/dL"
          setInputVal={total_bilirubin_dna => result.total_bilirubin_dna = total_bilirubin_dna}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="ALT, DNA suppression"
          min= {rangeFilter?.ATL_dna?.min}
          max= {rangeFilter?.ATL_dna?.max}
          adornment="U/L"
          setInputVal={ATL_dna => result.ATL_dna = ATL_dna}
        ></InputComponent>
        <InputComponent
          type="number"
          lable="HBV DNA, DNA suppression"
          min= {rangeFilter?.HBV_DNA_dna?.min}
          max= {rangeFilter?.HBV_DNA_dna?.max}
          adornment="IU/mL"
          setInputVal={HBV_dna_dna => result.HBV_DNA_dna = HBV_dna_dna}
        ></InputComponent>
        
      </>
    )
}
