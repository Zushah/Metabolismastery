const pathways = {
    glycolysis: {
        name: "Glycolysis",
        step1: {
            reactant: "Glucose",
            product: "Glucose 6-phosphate",
            enzyme: "Hexokinase",
            substrate: "ATP",
            byproduct: "ADP",
            type: "Phosphoryl transfer",
            reversible: false
        },
        step2: {
            reactant: "Glucose 6-phosphate",
            product: "Fructose 6-phosphate",
            enzyme: "Phosphoglucose isomerase",
            type: "Isomerization",
            reversible: true
        },
        step3: {
            reactant: "Fructose 6-phosphate",
            product: "Fructose 1,6-bisphosphate",
            enzyme: "Phosphofructokinase-1",
            substrate: "ATP",
            byproduct: "ADP",
            type: "Phosphoryl transfer",
            reversible: false
        },
        step4: {
            reactant: "Fructose 1,6-bisphosphate",
            product: "Dihydroxyacetone phosphate and Glyceraldehyde 3-phosphate",
            enzyme: "Aldolase",
            type: "Aldol cleavage",
            reversible: true
        },
        step5: {
            reactant: "Dihydroxyacetone phosphate or Glyceraldehyde 3-phosphate",
            product: "Dihydroxyacetone phosphate or Glyceraldehyde 3-phosphate",
            enzyme: "Triose phosphate isomerase",
            type: "Isomerization",
            reversible: true
        },
        step6: {
            reactant: "Glyceraldehyde 3-phosphate",
            product: "1,3-Bisphosphoglycerate",
            enzyme: "Glyceraldehyde 3-phosphate dehydrogenase",
            substrate: "NAD+",
            byproduct: "NADH",
            type: "Oxidation",
            reversible: true
        },
        step7: {
            reactant: "1,3-Bisphosphoglycerate",
            product: "3-Phosphoglycerate",
            enzyme: "Phosphoglycerate kinase",
            substrate: "ADP",
            byproduct: "ATP",
            type: "Substrate-level phosphorylation",
            reversible: true
        },
        step8: {
            reactant: "3-Phosphoglycerate",
            product: "2-Phosphoglycerate",
            enzyme: "Phosphoglycerate mutase",
            type: "Phosphoryl shift",
            reversible: true
        },
        step9: {
            reactant: "2-Phosphoglycerate",
            product: "Phosphoenolpyruvate",
            enzyme: "Enolase",
            byproduct: "H2O",
            type: "Dehydration",
            reversible: true
        },
        step10: {
            reactant: "Phosphoenolpyruvate",
            product: "Pyruvate",
            enzyme: "Pyruvate kinase",
            substrate: "ADP",
            byproduct: "ATP",
            type: "Substrate-level phosphorylation",
            reversible: false
        }
    },
    citricAcidCycle: {
        name: "Citric Acid Cycle",
        step1: {
            reactant: "Oxaloacetate",
            product: "Citrate",
            enzyme: "Citrate synthase",
            substrate: "Acetyl-CoA",
            byproduct: "CoA",
            type: "Condensation",
            reversible: false
        },
        step2: {
            reactant: "Citrate",
            product: "Isocitrate",
            enzyme: "Aconitase",
            type: "Isomerization",
            reversible: true
        },
        step3: {
            reactant: "Isocitrate",
            product: "α-ketoglutarate",
            enzyme: "Isocitrate dehydrogenase",
            substrate: "NAD+",
            byproduct: "NADH and CO2",
            type: "Oxidation",
            reversible: false
        },
        step4: {
            reactant: "α-ketoglutarate",
            product: "Succinyl-CoA",
            enzyme: "α-ketoglutarate dehydrogenase",
            substrate: "NAD+ and CoA",
            byproduct: "NADH and CO2",
            type: "Oxidation",
            reversible: false
        },
        step5: {
            reactant: "Succinyl-CoA",
            product: "Succinate",
            enzyme: "Succinyl-CoA synthetase",
            substrate: "ADP",
            byproduct: "ATP and CoA",
            type: "Substrate-level phosphorylation",
            reversible: true
        },
        step6: {
            reactant: "Succinate",
            product: "Fumarate",
            enzyme: "Succinate dehydrogenase",
            substrate: "FAD",
            byproduct: "FADH2",
            type: "Oxidation",
            reversible: true
        },
        step7: {
            reactant: "Fumarate",
            product: "Malate",
            enzyme: "Fumarase",
            substrate: "H2O",
            type: "Hydration",
            reversible: true
        },
        step8: {
            reactant: "Malate",
            product: "Oxaloacetate",
            enzyme: "Malate dehydrogenase",
            substrate: "NAD+",
            byproduct: "NADH",
            type: "Oxidation",
            reversible: true
        }
    },
    gluconeogenesis: {
        name: "Gluconeogenesis",
        step1: {
            reactant: "Pyruvate",
            product: "Oxaloacetate",
            enzyme: "Pyruvate carboxylase",
            substrate: "ATP",
            byproduct: "ADP and CO2",
            type: "Carboxylation",
            reversible: false
        },
        step2: {
            reactant: "Oxaloacetate",
            product: "Phosphoenolpyruvate",
            enzyme: "Phosphoenolpyruvate carboxykinase",
            substrate: "GTP",
            byproduct: "GDP and CO2",
            type: "Decarboxylation and phosphorylation",
            reversible: false
        },
        step3: {
            reactant: "Phosphoenolpyruvate",
            product: "2-Phosphoglycerate",
            enzyme: "Phosphoglycerate mutase",
            type: "Phosphoryl shift",
            reversible: true
        },
        step4: {
            reactant: "2-Phosphoglycerate",
            product: "3-Phosphoglycerate",
            enzyme: "Phosphoglycerate kinase",
            substrate: "ATP",
            byproduct: "ADP",
            type: "Phosphoryl transfer",
            reversible: true
        },
        step5: {
            reactant: "3-Phosphoglycerate",
            product: "1,3-Bisphosphoglycerate",
            enzyme: "Glyceraldehyde 3-phosphate dehydrogenase",
            substrate: "NADH",
            byproduct: "NAD+",
            type: "Oxidation",
            reversible: true
        },
        step6: {
            reactant: "1,3-Bisphosphoglycerate",
            product: "Glyceraldehyde 3-phosphate",
            enzyme: "Triose phosphate isomerase",
            type: "Isomerization",
            reversible: true
        },
        step7: {
            reactant: "Glyceraldehyde 3-phosphate",
            product: "Fructose 1,6-bisphosphate",
            enzyme: "Aldolase",
            type: "Aldol condensation",
            reversible: true
        },
        step8: {
            reactant: "Fructose 1,6-bisphosphate",
            product: "Fructose 6-phosphate",
            enzyme: "Fructose 1,6-bisphosphatase",
            type: "Hydrolysis",
            reversible: false
        },
        step9: {
            reactant: "Fructose 6-phosphate",
            product: "Glucose 6-phosphate",
            enzyme: "Phosphoglucose isomerase",
            type: "Isomerization",
            reversible: true
        },
        step10: {
            reactant: "Glucose 6-phosphate",
            product: "Glucose",
            enzyme: "Glucose 6-phosphatase",
            type: "Hydrolysis",
            reversible: false
        }
    }
};
