const baseline = [
    "age",
    "sex",
    "platelet",
    "antivirals",
    "albumin",
    "cirrhosis",
    "total_bilirubin",
    "presence_of_HBeAg",
    "ALT",
    "HBV_DNA"
]

const DNA_suppression = [
    ...baseline,
    "platelet_dna",
    "cirrhosis_dna",
    "albumin_dna",
    "total_bilirubin_dna",
    "ATL_dna",
    "HBV_dna_dna",
    "presence_of_HBeAg_dna"
]


const madeAPIData = (tabValue, result) => {
    let restAPIData = {}
    let arrPicker;
    if (tabValue === 0) {
        restAPIData.model = "baseline";
        arrPicker = baseline;
    } else if (tabValue === 1) {
        restAPIData.model = "DNA_suppression"
        arrPicker = DNA_suppression;
    }
    for (let arr of arrPicker) {
        if (!result[arr]) {
            alert(`insert data ${arr}`)
            return 0;
        }
        restAPIData[arr] = result[arr]
    }
    return restAPIData;
}

export default madeAPIData;
