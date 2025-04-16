const data = {
    aminoAcids: {
        name: "Amino Acids",
        alanine: {
            name: "Alanine",
            three: "Ala",
            one: "A",
            sideChain: "CH3",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        arginine: {
            name: "Arginine",
            three: "Arg",
            one: "R",
            sideChain: "CH2-CH2-CH2-NH-C(=NH)-NH2",
            polar: true,
            hydrophobic: false,
            charged: true,
            acidic: false
        },
        asparagine: {
            name: "Asparagine",
            three: "Asn",
            one: "N",
            sideChain: "CH2-C(=O)-NH2",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        aspartate: {
            name: "Aspartate",
            three: "Asp",
            one: "D",
            sideChain: "CH2-C(=O)-O",
            polar: false,
            hydrophobic: false,
            charged: true,
            acidic: true
        },
        cysteine: {
            name: "Cysteine",
            three: "Cys",
            one: "C",
            sideChain: "CH2-SH",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        glutamate: {
            name: "Glutamate",
            three: "Glu",
            one: "E",
            sideChain: "CH2-CH2-C(=O)-O",
            polar: false,
            hydrophobic: false,
            charged: true,
            acidic: true
        },
        glutamine: {
            name: "Glutamine",
            three: "Gln",
            one: "Q",
            sideChain: "CH2-CH2-C(=O)-NH2",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        glycine: {
            name: "Glycine",
            three: "Gly",
            one: "G",
            sideChain: "H",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        histidine: {
            name: "Histidine",
            three: "His",
            one: "H",
            sideChain: "CH2-C3H3N2",
            polar: true,
            hydrophobic: false,
            charged: true,
            acidic: false
        },
        isoleucine: {
            name: "Isoleucine",
            three: "Ile",
            one: "I",
            sideChain: "CH(CH3)-CH2-CH3",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        leucine: {
            name: "Leucine",
            three: "Leu",
            one: "L",
            sideChain: "CH2-CH(CH3)2",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        lysine: {
            name: "Lysine",
            three: "Lys",
            one: "K",
            sideChain: "CH2-CH2-CH2-CH2-NH2",
            polar: false,
            hydrophobic: false,
            charged: true,
            acidic: false
        },
        methionine: {
            name: "Methionine",
            three: "Met",
            one: "M",
            sideChain: "CH2-CH2-S-CH3",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        phenylalanine: {
            name: "Phenylalanine",
            three: "Phe",
            one: "F",
            sideChain: "CH2-C6H5",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        proline: {
            name: "Proline",
            three: "Pro",
            one: "P",
            sideChain: "CH2-CH2-CH2-N",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        serine: {
            name: "Serine",
            three: "Ser",
            one: "S",
            sideChain: "CH2-OH",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        threonine: {
            name: "Threonine",
            three: "Thr",
            one: "T",
            sideChain: "CH(OH)-CH3",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        tryptophan: {
            name: "Tryptophan",
            three: "Trp",
            one: "W",
            sideChain: "CH2-C8H6N",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
        },
        tyrosine: {
            name: "Tyrosine",
            three: "Tyr",
            one: "Y",
            sideChain: "CH2-C6H4OH",
            polar: true,
            hydrophobic: false,
            charged: false,
            acidic: false
        },
        valine: {
            name: "Valine",
            three: "Val",
            one: "V",
            sideChain: "CH(CH3)2",
            polar: false,
            hydrophobic: true,
            charged: false,
            acidic: false
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
    fattyAcidDegradation: {
        name: "Fatty Acid Degradation",
        step1: {
            reactant: "Fatty acid and CoA",
            product: "Fatty acyl-CoA",
            enzyme: "Fatty acyl-CoA synthetase",
            substrate: "ATP",
            byproduct: "AMP",
            type: "Condensation",
            reversible: false
        },
        step2: {
            reactant: "Fatty acyl-CoA",
            product: "Fatty acylcarnitine",
            enzyme: "Carnitine acyltransferase I",
            substrate: "Carnitine",
            byproduct: "CoA",
            type: "Transport",
            reversible: false
        },
        step3: {
            reactant: "Fatty acylcarnitine",
            product: "Fatty acyl-CoA",
            enzyme: "Carnitine acyltransferase II",
            substrate: "CoA",
            byproduct: "Carnitine",
            type: "Transport",
            reversible: false
        },
        step4: {
            reactant: "Fatty acyl-CoA",
            product: "Trans-Δ²-enoyl-CoA",
            enzyme: "Acyl-CoA dehydrogenase",
            substrate: "FAD",
            byproduct: "FADH2",
            type: "Oxidation",
            reversible: false
        },
        step5: {
            reactant: "Trans-Δ²-enoyl-CoA",
            product: "3-hydroxyacyl-CoA",
            enzyme: "Enoyl-CoA hydratase",
            substrate: "H2O",
            type: "Hydration",
            reversible: false
        },
        step6: {
            reactant: "3-hydroxyacyl-CoA",
            product: "β-ketoacyl-CoA",
            enzyme: "3-hydroxyacyl-CoA dehydrogenase",
            substrate: "NAD+",
            byproduct: "NADH",
            type: "Oxidation",
            reversible: false
        },
        step7: {
            reactant: "β-ketoacyl-CoA",
            product: "Fatty acyl-CoA and acetyl-CoA",
            enzyme: "β-ketothiolase",
            substrate: "CoA",
            type: "Thiolysis",
            reversible: false
        },
        step8: {
            reactant: "Fatty acyl-CoA",
            product: "Acetyl-CoA",
            enzyme: "Acyl-CoA dehydrogenase, enoyl-CoA hydratase, etc. (iterating steps 4-7)",
            substrate: "FAD, H2O, NAD+, CoA (for each iteration of steps 4-7)",
            byproduct: "FADH2, NADH (for each iteration of steps 4-7)",
            type: "Iterative degradation",
            reversible: false
        }
    },
    fattyAcidSynthesis: {
        name: "Fatty Acid Synthesis",
        step1: {
            reactant: "Citrate",
            product: "Acetyl-CoA",
            enzyme: "ATP-citrate lyase",
            substrate: "ATP and CoA",
            byproduct: "ADP and oxaloacetate",
            type: "Phosphoryl cleavage",
            reversible: false
        },
        step2: {
            reactant: "Acetyl-CoA",
            product: "Malonyl-CoA",
            enzyme: "Acetyl-CoA carboxylase",
            substrate: "ATP and HCO3-",
            byproduct: "ADP and CO2",
            type: "Carboxylation",
            reversible: false
        },
        step3: {
            reactant: "Acetyl-CoA and malonyl-CoA",
            product: "Acetyl-ACP and malonyl-ACP",
            enzyme: "Acetyl/malonyl-CoA:ACP transacylase",
            substrate: "ACP",
            byproduct: "CoA",
            type: "Acyl transfer",
            reversible: false
        },
        step4: {
            reactant: "Acetyl-ACP and malonyl-ACP",
            product: "Acetoacetyl-ACP",
            enzyme: "Fatty acid synthase",
            byproduct: "CO2",
            type: "Condensation",
            reversible: false
        },
        step5: {
            reactant: "Acetoacetyl-ACP",
            product: "3-hydroxybutyryl-ACP",
            enzyme: "Fatty acid synthase",
            substrate: "NADPH",
            byproduct: "NADP+",
            type: "Reduction",
            reversible: false
        },
        step6: {
            reactant: "3-hydroxybutyryl-ACP",
            product: "Crotonyl-ACP",
            enzyme: "Fatty acid synthase",
            byproduct: "H2O",
            type: "Dehydration",
            reversible: false
        },
        step7: {
            reactant: "Crotonyl-ACP",
            product: "Butyryl-ACP",
            enzyme: "Fatty acid synthase",
            substrate: "NADPH",
            byproduct: "NADP+",
            type: "Reduction",
            reversible: false
        },
        step8: {
            reactant: "Butyryl-ACP",
            product: "Fatty acyl-ACP",
            enzyme: "Fatty acid synthase (iterating steps 4-7)",
            substrate: "Malonyl-ACP (for each iteration of steps 4-7)",
            byproduct: "CO2, NADP+, H2O (for each iteration of steps 4-7)",
            type: "Iterative synthesis",
            reversible: false
        },
        step9: {
            reactant: "Fatty acyl-ACP",
            product: "Fatty acid",
            enzyme: "Fatty acid synthase",
            substrate: "H2O",
            type: "Hydrolysis",
            reversible: false
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
    },
    glycogenesis: {
        name: "Glycogenesis",
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
            product: "Glucose 1-phosphate",
            enzyme: "Phosphoglucomutase",
            type: "Phosphoryl shift",
            reversible: true
        },
        step3: {
            reactant: "Glucose 1-phosphate",
            product: "UDP-glucose",
            enzyme: "UDP-glucose pyrophosphorylase",
            substrate: "UTP",
            byproduct: "PPi",
            type: "Nucleotide transfer",
            reversible: false
        },
        step4: {
            reactant: "UDP-glucose",
            product: "Glycogen",
            enzyme: "Glycogen synthase",
            substrate: "Glycogenin",
            byproduct: "UDP",
            type: "Glycosyl transfer",
            reversible: false
        },
        step5: {
            reactant: "Glycogen",
            product: "Branched glycogen",
            enzyme: "Branching enzyme",
            type: "Glycosyl transfer",
            reversible: false
        }
    },
    glycogenolysis: {
        name: "Glycogenolysis",
        step1: {
            reactant: "Glycogen",
            product: "Glucose 1-phosphate",
            enzyme: "Glycogen phosphorylase",
            type: "Phosphoryl cleavage",
            reversible: false
        },
        step2: {
            reactant: "Branched glycogen",
            product: "Linear glycogen",
            enzyme: "Debranching enzyme (transferase activity)",
            type: "Glucosyl transfer",
            reversible: false
        },
        step3: {
            reactant: "Branch-point glucose",
            product: "Glucose",
            enzyme: "Debranching enzyme (glucosidase activity)",
            type: "Hydrolysis",
            reversible: false
        },
        step4: {
            reactant: "Glucose 1-phosphate",
            product: "Glucose 6-phosphate",
            enzyme: "Phosphoglucomutase",
            type: "Phosphoryl shift",
            reversible: true
        },
        step5: {
            reactant: "Glucose 6-phosphate",
            product: "Glucose",
            enzyme: "Glucose 6-phosphatase",
            type: "Hydrolysis",
            reversible: false
        }
    },
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
            product: "Dihydroxyacetone phosphate and glyceraldehyde 3-phosphate",
            enzyme: "Aldolase",
            type: "Aldol cleavage",
            reversible: true
        },
        step5: {
            reactant: "Dihydroxyacetone phosphate or glyceraldehyde 3-phosphate",
            product: "Dihydroxyacetone phosphate or glyceraldehyde 3-phosphate",
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
    pentosePhosphatePathway: {
        name: "Pentose Phosphate Pathway",
        step1: {
            reactant: "Glucose 6-phosphate",
            product: "6-Phosphoglucono-δ-lactone",
            enzyme: "Glucose 6-phosphate dehydrogenase",
            substrate: "NADP+",
            byproduct: "NADPH",
            type: "Oxidation",
            oxidativePhase: true,
            reversible: false
        },
        step2: {
            reactant: "6-Phosphoglucono-δ-lactone",
            product: "6-Phosphogluconate",
            enzyme: "Lactonase",
            substrate: "H2O",
            type: "Hydrolysis",
            oxidativePhase: true,
            reversible: true
        },
        step3: {
            reactant: "6-Phosphogluconate",
            product: "Ribulose 5-phosphate",
            enzyme: "6-Phosphogluconate dehydrogenase",
            substrate: "NADP+",
            byproduct: "NADPH and CO2",
            type: "Oxidation and decarboxylation",
            oxidativePhase: true,
            reversible: false
        },
        step4: {
            reactant: "Ribulose 5-phosphate",
            product: "Ribose 5-phosphate",
            enzyme: "Phosphopentose isomerase",
            type: "Isomerization",
            oxidativePhase: false,
            reversible: true
        },
        step5: {
            reactant: "Ribulose 5-phosphate",
            product: "Xylulose 5-phosphate",
            enzyme: "Phosphopentose epimerase",
            type: "Epimerization",
            oxidativePhase: false,
            reversible: true
        },
        step6: {
            reactant: "Ribose 5-phosphate and xylulose 5-phosphate",
            product: "Glyceraldehyde 3-phosphate and sedoheptulose 7-phosphate",
            enzyme: "Transketolase",
            substrate: "Thiamine pyrophosphate (TPP)",
            type: "Carbon transfer",
            oxidativePhase: false,
            reversible: true
        },
        step7: {
            reactant: "Sedoheptulose 7-phosphate and glyceraldehyde 3-phosphate",
            product: "Erythrose 4-phosphate and fructose 6-phosphate",
            enzyme: "Transaldolase",
            type: "Carbon transfer",
            oxidativePhase: false,
            reversible: true
        },
        step8: {
            reactant: "Erythrose 4-phosphate and xylulose 5-phosphate",
            product: "Glyceraldehyde 3-phosphate and fructose 6-phosphate",
            enzyme: "Transketolase",
            substrate: "Thiamine pyrophosphate",
            type: "Carbon transfer",
            oxidativePhase: false,
            reversible: true
        },
        mode1: {
            description: "The ribose 5-phosphate needs exceed the needs for NADPH",
            reactant: "Fructose 6-phosphate and glyceraldehyde 3-phosphate",
            product: "Ribose 5-phosphate",
            phase: "Nonoxidative",
            process: "Glycolysis to pentose phosphate pathway"
        },
        mode2: {
            description: "The NADPH and ribose 5-phosphate needs are balanced",
            reactant: "Glucose 6-phosphate",
            product: "NADPH and ribose 5-phosphate",
            phase: "Oxidative",
            process: "Pentose phosphate pathway"
        },
        mode3: {
            description: "More NADPH is needed than ribose 5-phosphate",
            reactant: "Glucose 6-phosphate",
            product: "NADPH and glycolytic intermediates",
            phase: "Oxidative and nonoxidative",
            process: "Pentose phosphate pathway to gluconeogenesis"
        },
        mode4: {
            description: "Both NADPH and ATP are required",
            reactant: "Glucose 6-phosphate",
            product: "NADPH, glycolytic intermediates, and ATP",
            phase: "Oxidative and nonoxidative",
            process: "Pentose phosphate pathway to glycolysis"
        }
    },
    ureaCycle: {
        name: "Urea Cycle",
        step1: {
            reactant: "Ammonia and bicarbonate",
            product: "Carbamoyl phosphate",
            enzyme: "Carbamoyl phosphate synthetase I",
            substrate: "2 ATP",
            byproduct: "2 ADP",
            type: "Condensation",
            reversible: false
        },
        step2: {
            reactant: "Orinthine and carbamoyl phosphate",
            product: "Citrulline",
            enzyme: "Ornithine transcarbamoylase",
            byproduct: "Pi",
            type: "Condensation",
            reversible: false
        },
        step3: {
            reactant: "Citrulline and aspartate",
            product: "Argininosuccinate",
            enzyme: "Argininosuccinate synthetase",
            substrate: "ATP",
            byproduct: "AMP",
            type: "Condensation",
            reversible: true
        },
        step4: {
            reactant: "Argininosuccinate",
            product: "Arginine and fumarate",
            enzyme: "Argininosuccinate lyase",
            substrate: "H2O",
            type: "Hydrolysis",
            reversible: true
        },
        step5: {
            reactant: "Arginine",
            product: "Ornithine and urea",
            enzyme: "Arginase",
            substrate: "H2O",
            type: "Hydrolysis",
            reversible: true
        }
    }
};
