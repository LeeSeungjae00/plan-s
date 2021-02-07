const baselineInput = [
    "platelet",
    "albumin",
    "total_bilirubin",
    "ALT",
    "HBV_DNA"
]


const baseline = [
    "age",
    "male",
    "race",
    "antivirals",
    "cirrhosis",
    "presence_of_HBeAg",
    ...baselineInput
]

const DNA_suppressionInput = [
    "platelet_dna",
    "albumin_dna",
    "total_bilirubin_dna",
    "HBV_DNA_dna",
    "ALT_DNA",
]

const DNA_suppression = [
    ...baseline,
    ...DNA_suppressionInput,
    "cirrhosis_dna",
    "presence_of_HBeAg_dna"
]



const madeAPIData = (tabValue, result) => {
    let restAPIData = {}
    let arrPicker;
    let nullCount = 0;
    if (tabValue === 0) {
        restAPIData.model = "baseline";
        arrPicker = baseline;
    } else if (tabValue === 1) {
        restAPIData.model = "DNA_suppression"
        arrPicker = DNA_suppression;
    }
    for (let arr of arrPicker) {
        if (result[arr] === undefined || result[arr] === "") {
            if ([...DNA_suppressionInput, ...baselineInput].indexOf(arr) !== -1) {
                result[arr] = null;
            } else {
                alert(`Please enter a more value`);
                return 0;
            }
        } else if (result[arr] === "RangeOut") {
            alert(`Please enter a valid range of values.`);
            return 0;
        }
        restAPIData[arr] = result[arr]
    }

    if (tabValue === 0) {
        if (nullCount > 2) {
            alert(`Please enter a more value`);
            return 0;
        }
    } else {
        if (nullCount > 4) {
            alert(`Please enter a more value`);
            return 0;
        }
    }
    return restAPIData;
}

export default madeAPIData;
