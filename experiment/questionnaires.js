// Items =================================================
// General Attitudes towards Artificial Intelligence Scale (GAAIS; Schepman et al., 2020, 2022)
// We used the most loaded items from Schepman et al. (2023) - loadings from the 2 CFAs are in parentheses
// We adedd items specifically about CGI and artificial media (BAIT)
var bait_items = [
    // Neg3 (0.406, 0.405) - Low loadings
    // "Organisations use Artificial Intelligence unethically",
    // Neg9 (0.726, 0.717) - Not used in FakeFace
    "Artificial Intelligence might take control of people",
    // Neg10 (0.850, 0.848) - Modified: removed "I think"
    "Artificial Intelligence is dangerous",
    // Neg15 (1.014, 0.884) - Not used in FakeFace. Modified: replaced "I shiver with discomfort when I think about" by "I am worried about"
    "I am worried about future uses of Artificial Intelligence<br>",
    // Pos7 (0.820, 0.878)
    "I am interested in using artificially intelligent systems in my daily life",
    // Pos12 (0.734, 0.554)
    "Artificial Intelligence is exciting",
    // Pos14 (0.516, 0.346) - Low loadings
    // "There are many beneficial applications of Artificial Intelligence",
    // Pos17 (0.836, 0.656) - Not used in FakeFace
    "Much of society will benefit from a future full of Artificial Intelligence<br>",

    // New items (Beliefs about Artificial Images Technology - BAIT) ---------------------------
    // Revised from Makowski et al. (Fake Face study)
    // Changes from FakeFace: remove "I think"
    "Current Artificial Intelligence algorithms can generate very realistic images",
    "Images of faces or people generated by Artificial Intelligence always contain errors and artifacts",
    "Videos generated by Artificial Intelligence have obvious problems that make them easy to spot as fake",
    "Current Artificial Intelligence algorithms can generate very realistic videos",
    "Computer-Generated Images (CGI) are capable of perfectly imitating reality",
    "Technology allows the creation of environments that seem just as real as reality", // New
]

var bait_dimensions = [
    "GAAIS_Negative_9",
    "GAAIS_Negative_10",
    "GAAIS_Negative_15",
    "GAAIS_Positive_7",
    "GAAIS_Positive_12",
    "GAAIS_Positive_17",
    "BAIT_1_ImagesRealistic",
    "BAIT_2_ImagesIssues",
    "BAIT_3_VideosRealistic",
    "BAIT_4_VideosIssues",
    "BAIT_5_ImitatingReality",
    "BAIT_6_EnvironmentReal",
]

var bait_instructions =
    "<h2>About AI...</h2>" +
    "<p>We are interested in your thoughts about Artificial Intelligence (AI).<br>" +
    "Please read the statements below carefully and indicate the extent to which you agree with each statement.</p>"

// Questionnaires =================================================

function format_questions_analog(
    items,
    dimensions,
    ticks = ["Inaccurate", "Accurate"]
) {
    var questions = []
    for (const [index, element] of items.entries()) {
        questions.push({
            prompt: "<b>" + element + "</b>",
            name: dimensions[index],
            ticks: ticks,
            required: false,
            min: 0,
            max: 1,
            step: 0.01,
            slider_start: 0.5,
        })
    }
    return questions
}

// BAIT 2.0
var questionnaire_bait = {
    type: jsPsychMultipleSlider,
    questions: format_questions_analog(
        bait_items,
        bait_dimensions,
        // In Schepman et al. (2022) they removed 'Strongly'
        (ticks = ["Disagree", "Agree"])
    ),
    randomize_question_order: true,
    preamble: bait_instructions,
    require_movement: false,
    slider_width: 600,
    data: {
        screen: "questionnaire_bait",
    },
}

// COPS ========================================================================
// Consumption of Pornography Scale – General (COPS – G)
// Hatchet al. (2023)
var questionnaire_cops = {
    type: jsPsychSurveyMultiChoice,
    css_classes: ["narrow-text"],
    preamble:
        "<h2>About Pornography...</h2>" +
        "<p style='text-align: left;'>Given the nature of our study, we are interested in understanding your habits in terms of exposure to pornography. Please consider answering the questions below.</p>",
    questions: [
        // {
        //     prompt: "<b>1. How often have you viewed pornography in the past year?</b>",
        //     options: [
        //         "0. I haven't viewed pornography in the past year",
        //         "1. I viewed pornography once in the past year",
        //         "2. I viewed pornography about once every six months",
        //         "3. I viewed pornography about monthly",
        //         "4. I viewed pornography weekly",
        //         "5. I viewed pornography multiple times a week",
        //         "6. I viewed pornography daily",
        //     ],
        //     name: "COPS_Frequency_1",
        //     required: false,
        // },
        {
            prompt: "<b>How often have you viewed pornography in the past 30 days?</b>",
            options: [
                "0. I haven't viewed pornography in the past 30 days",
                "1. I viewed pornography once in the past 30 days",
                "2. I viewed pornography twice in the past 30 days",
                "3. I viewed pornography weekly",
                "4. I viewed pornography multiple times a week",
                "5. I viewed pornography daily",
                "6. I viewed pornography multiple times a day",
            ],
            name: "COPS_Frequency_2",
            required: false,
        },
        // {
        //     prompt: "<b>3. How often have you viewed pornography in the past 7 days?</b>",
        //     options: [
        //         "0. I haven't viewed pornography in the past 7 days",
        //         "1. I viewed pornography once in the past 7 days",
        //         "2. I viewed pornography twice in the past 7 days",
        //         "3. I viewed pornography every day of the past 7 days",
        //         "4. I viewed pornography multiple times a day in the past 7 days",
        //     ],
        //     name: "COPS_Frequency_3",
        //     required: false,
        // },
        {
            prompt: "<b>4. When I view pornography, I view it for...</b>",
            options: [
                "1. Less than 5 minutes",
                "2. 6-15 minutes",
                "3. 16-25 minutes",
                "4. 26-35 minutes",
                "5. 36-45 minutes",
                "6. 46+ minutes",
            ],
            name: "COPS_Duration_1",
            required: false,
        },
        // {
        //     prompt: "<b>When I visit a pornographic website, I visit for...</b>",
        //     options: [
        //         "1. Less than 5 minutes",
        //         "2. 6-15 minutes",
        //         "3. 16-25 minutes",
        //         "4. 26-35 minutes",
        //         "5. 36-45 minutes",
        //         "6. 46+ minutes",
        //     ],
        //     name: "COPS_Duration_2",
        //     required: false,
        // },
        // {
        //     prompt: "<b>6. The last time I viewed pornography, I viewed it for...</b>",
        //     options: [
        //         "1. Less than 5 minutes",
        //         "2. 6-15 minutes",
        //         "3. 16-25 minutes",
        //         "4. 26-35 minutes",
        //         "5. 36-45 minutes",
        //         "6. 46+ minutes",
        //     ],
        //     name: "COPS_Duration_3",
        //     required: false,
        // },
        // Extra questions ------------------------------------------
        {
            prompt: "<b>When was the last time you engaged in any kind of sexual activity (intercourse or masturbation)?</b>",
            options: [
                "1. Less than 24h ago",
                "2. Within the last 3 days",
                "3. within the last week",
                "4. Within the last month",
                "5. Within the last year",
                "6. More than a year ago",
            ],
            name: "COPS_Horniness_1",
            required: false,
        },
        {
            prompt: "<b>How would you describe your sexual orientation?</b>",
            options: ["Heterosexual", "Bisexual", "Homosexual", "Other"],
            name: "SexualOrientation",
            required: false,
        },
    ],
}
