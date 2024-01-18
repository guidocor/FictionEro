// =========================================================================================
// Parameters
// =========================================================================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

var color_cues = shuffleArray(["red", "blue", "green"])
color_cues = { Reality: color_cues[0], Fiction: color_cues[1] }
// =========================================================================================
// Fiction
// =========================================================================================
var text_instructions1 =
    "<h1>Instructions</h1>" +
    // Left aligned text
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>In this study, we aim at validating our <b>new image-generation algorithm</b> (based on a new form of Generative Adversarial Network - GAN - technology) trained to produce high-quality erotic (but also non-erotic content).</p>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>In the following task, you will be presented with erotic and non-erotic images generated by our algorithm (preceded by the word '<b style='color:" +
    color_cues["Fiction"] +
    "'>AI-generated</b>'), intermixed with real photos (preceded by the word '<b style='color:" +
    color_cues["Reality"] +
    "'>Photograph</b>') taken from public picture databases.</p > " +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>After each image, you will have to rate the images on the following scales:</p>" +
    "<ul style='text-align: left; margin-left: 30%; margin-right: 30%;'>" +
    // Arousal: embodied
    "<li><b>Arousing</b>: How much do you find the image sexually arousing. This question is about your own <i>personal reaction</i> felt in your body when seeing the image.</li>" +
    // Appeal: "objective"
    "<li><b>Enticing</b>: How enticing and sexually appealing would you rate this image to be. Think of how much, in general, people similar to you in terms of gender and sexual orientation would like it.</li>" +
    // Emotional Valence
    "<li><b>Valence</b>: Did the image evoke a positive and pleasant (not necessarily sexual) feeling in you, or could it better characterized as negative and unpleasant? Think of how much you did enjoy (or not) looking at the image</li></ul>" +
    // Contrasting explanation
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>While the answers to these scales can sometimes be very similar, they can also be different depending on the person, the image, and the context. For example, we can sometimes find ourselves aroused to a picture that would probably not be considered universally appealing. Conversely, an enticing and \"objectively\" sexy image can, for one reason or another, not evoke any reaction in our body.</p>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'><b>Try to be attentive to what happens in your mind and body while watching the images to try to answer accurately based on your own feelings and reactions.</b></p>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>Also, as some images are non-erotic, it might seem odd to think of how arousing it is. Don't worry, it's normal. <b>There is no right or wrong answer</b>, just listen to your body and try to answer as best as you can based on what you feel.</p>"

var text_instructions2 =
    "<h1>Great!</h1>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>Thanks a lot. In the next phase, we would like to see if you found our <b>image generation algorithm convincing</b> and error-free.</p>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>We will briefly present you <b>all the images</b> one last time (the AI-generated ones, as well as the photos), and you will have to rate them on how <b>real</b> (how realistic, photography-like) the image is.</p>" +
    "<p style='text-align: left; margin-left: 30%; margin-right: 30%;'>We are interested in your overall impression and gut feeling of whether you felt that the image was AI-generated or not.</p>"

//-------------------------
var text_instructionsbutton = "Let's start!"

// -------------------------

var text_cue = { Reality: "Photograph", Fiction: "AI-generated" }

// -------------------------
var text_instructions_questionnaires =
    "<p><b>Thank you</b><br>Now please help us answer a few questions about yourself.</p>"

// Ratings ----------------------------------------------------------------
var text_ticks = ["Not at all", "Very much"]
var text_ticks_valence = ["Unpleasant", "Pleasant"]
var text_rating_appeal = "How <b>enticing</b> would you rate this image to be?"
var text_rating_arousal = "How much did you feel <b>sexually aroused</b>?"
var text_rating_valence = "The <b>feeling</b> evoked by the image was..."
var text_rating_realness = "How <b>realistic</b> was this image?"

// -------------------------
var text_feedback1 =
    "<h1>Thank you!</h1>" +
    "<p>Before we end, we wanted to know some of your thoughts on the experiment. Please tick all that apply:</p>"
var text_feedback1_items = [
    "I had fun",
    "It was boring",
    "I could tell which images were photos and which were AI-generated",
    "I didn't see any difference between photos and AI-generated images",
    "I felt like the AI-generated images were more arousing than the photos",
    "I felt like the AI-generated images were less arousing than the photos",
    "I felt like the labels ('Photograph' and 'AI-generated') were not always correct",
    "I felt like the labels were reversed (e.g., 'Photograph' for AI-generated images and vice versa)",
    "Some pictures were really arousing",
    "I didn't really feel anything when watching the images",
]

var text_feedback2 = "Do you have any other comments or feedback?"
var text_feedback2_placeholder = "Type here"

// -------------------------
var text_debriefing =
    "<h2>Debriefing</h2>" +
    "<p align='left'>The purpose of this study was actually to study the effect on sexual arousal of <i>believing</i> that the content is AI-generated. " +
    "Indeed, we want to test de hypothesis that believing that erotic images are fake would lead to a lower emotional arousal. " +
    "As we are primarily interested in your <i>beliefs</i> about reality, all images were in fact taken from an existing database of real images used in psychology research to study emotions. " +
    "We apologize for the necessary deception used in the instructions, and we hope that you understand its role in ensuring the validity of our experiment.</p>" +
    "<p align='left'><b>Thank you again!</b> Your participation in this study will be kept completely confidential. If you have any questions or concerns about the project, please contact D.Makowski@sussex.ac.uk.</p>" +
    "<p>To complete your participation in this study, click on 'Continue' and <b>wait until your responses have been successfully saved</b> before closing the tab.</p> "

var text_endscreen = function (
    link = "https://realitybending.github.io/FictionEro/experiment/english.html"
) {
    return (
        "<h1>Thank you for participating</h1>" +
        "<p>It means a lot to us. Don't hesitate to share the study by sending this link <i>(but please don't reveal the details of the experiment)</i>:</p>" +
        "<p><a href='" +
        link +
        "'>" +
        link +
        "<a/></p>" +
        "<p><b>You can safely close the tab now.</b></p>"
    )
}

// =========================================================================================
// Questionnaires
// =========================================================================================

var bait_instructions =
    "<h2>About AI...</h2>" +
    "<p>We are interested in your thoughts about Artificial Intelligence (AI).<br>" +
    "Please read the statements below carefully and indicate the extent to which you agree with each statement.</p>"

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
    "I am worried about future uses of Artificial Intelligence",
    // Pos7 (0.820, 0.878)
    "I am interested in using artificially intelligent systems in my daily life",
    // Pos12 (0.734, 0.554)
    "Artificial Intelligence is exciting",
    // Pos14 (0.516, 0.346) - Low loadings
    // "There are many beneficial applications of Artificial Intelligence",
    // Pos17 (0.836, 0.656) - Not used in FakeFace
    "Much of society will benefit from a future full of Artificial Intelligence",

    // New items (Beliefs about Artificial Images Technology - BAIT) ---------------------------
    // Revised from Makowski et al. (Fake Face study)
    // Changes from FakeFace: remove "I think"
    "Current Artificial Intelligence algorithms can generate very realistic images",
    "Images of faces or people generated by Artificial Intelligence always contain errors and artifacts",
    "Videos generated by Artificial Intelligence have obvious problems that make them easy to spot as fake",
    "Current Artificial Intelligence algorithms can generate very realistic videos",
    "Computer-Generated Images (CGI) are capable of perfectly imitating reality",
    "Technology allows the creation of environments that seem just as real as reality", // New
    "Artificial Intelligence assistants can write texts that are indistinguishable from those written by humans", // New
    "Documents and paragraphs written by Artificial Intelligence usually read differently compared to Human productions", // New
]

var bait_ticks = ["Disagree", "Agree"] // In Schepman et al. (2022) they removed 'Strongly'

// --------------------------------------------------------------------------------
// Hatch, S. G., Esplin, C. R., Hatch, H. D., Halstead, A., Olsen, J., & Braithwaite, S. R. (2023). The consumption of pornography scale–general (COPS–G). Sexual and Relationship Therapy, 38(2), 194-218.
var cops_instructions =
    "<h2>About Pornography...</h2>" +
    "<p style='text-align: left;'>Given the nature of our study, we are interested in understanding your habits in terms of exposure to pornography. Please consider answering the questions below.</p>"

var cops_items = [
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
        name: "SexualActivity",
        required: false,
    },
    {
        prompt: "<b>How would you describe your sexual orientation?</b>",
        options: ["Heterosexual", "Bisexual", "Homosexual", "Other"],
        name: "SexualOrientation",
        required: false,
    },
]

// =========================================================================================
// Demographics
// =========================================================================================

var consent_text = // Logo and title
    "<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>" +
    "<h1>Informed Consent</h1>" +
    // Overview
    "<p align='left'><b>Invitation to Take Part</b><br>" +
    "You are being invited to take part in a research study to further our understanding of the impact of new technologies. Thank you for carefully reading this information sheet. This study is being conducted by Dr Dominique Makowski from the University of Sussex, who is happy to be contacted (D.Makowski@sussex.ac.uk) if you have any questions.</p>" +
    // Description
    "<p align='left'><b>Why have I been invited and what will I do?</b><br>" +
    "We are investigating how new technology can impact the habits and behaviours related to pornography. In this study, you will be shown <b>erotic images</b>, so please make sure you find yourself in an <b>private setting</b> for the whole duration of the experiment (~20min).</p>" +
    // Results and personal information
    "<p align='left'><b>What will happen to the results and my personal information?</b><br>" +
    "The results of this research may be written into a scientific publication. Your anonymity will be ensured in the way described in the consent information below. Please read this information carefully and then, if you wish to take part, please acknowledge that you have fully understood this sheet, and that you consent to take part in the study as it is described here.</p>" +
    "<p align='left'><b>Consent</b><br></p><ul>" +
    // Bullet points
    "<li align='left'>I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet</li>" +
    "<li align='left'>I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalised in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).</li>" +
    "<li align='left'>I understand that since the study is anonymous, it will be impossible to withdraw my data once I have completed and submitted the test/questionnaire.</li>" +
    "<li align='left'>I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.</li>" +
    "<li align='left'>I understand that my collected data will be stored in a de-identified way. De-identified data may be made publically available through secured scientific online data repositories.</li>" +
    // Ethical managements
    "<li align='left'>I understand that I will be shown potentially sensitive material (erotic images), and thus confirm that I am older than 18 years old.</li>" +
    "</ul></p>" +
    // "<p align='left'>Your participation in this research will be kept completely confidential. Your responses are entirely anonymous, and no IP address or any identifiers is collected.</p>" +
    // "<p align='left'><b>By participating, you agree to follow the instructions and provide honest answers.</b> If you do not wish to participate this survey, simply close your browser.</p>" +
    // "<p>Please note that various checks will be performed to ensure the validity of the data.<br>We reserve the right to return your participation or prorate reimbursement should we detect non-valid responses (e.g., random pattern of answers, instructions not read, ...).</p>"
    "<p align='left'>For further information about this research, or if you have any concerns, please contact Dr Dominique Makowski (D.Makowski@sussex.ac.uk). This research has been approved (ER/NR274/1) by the School of Psychology. The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.</p>"

var consent_button = "I am more than 18 years old, and I read, understood, and consent to the above"

var fullscreen_text =
    "<p>The experiment will switch to full screen mode when you press the button below</p>"
var fullscreen_button = "Continue"
