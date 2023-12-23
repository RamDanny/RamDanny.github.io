var prev_cmd = '';

// async sleep func
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// print 'text' in the 'id' element cascading
async function cascadingText(id, text) {
    const output = document.getElementById(id);
    output.innerText = '';
    for (let i = 0; i < text.length; i++) {
        output.innerText += text[i];
        await sleep(25);
    }
}

// print ascii art
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('terminal-title').innerHTML = `██████   █████  ███    ███ ██████  ██   ██  █████  ███    ██ ██    ██ ███████ ██   ██ 
██   ██ ██   ██ ████  ████ ██   ██ ██   ██ ██   ██ ████   ██ ██    ██ ██      ██   ██ 
██████  ███████ ██ ████ ██ ██   ██ ███████ ███████ ██ ██  ██ ██    ██ ███████ ███████ 
██   ██ ██   ██ ██  ██  ██ ██   ██ ██   ██ ██   ██ ██  ██ ██ ██    ██      ██ ██   ██ 
██   ██ ██   ██ ██      ██ ██████  ██   ██ ██   ██ ██   ████  ██████  ███████ ██   ██ 
                                                                                      `;
});


document.addEventListener('keydown', function (event) {
    // command event
    if (event.key === 'Enter') {
        const input = document.getElementById('terminal-input');
        handleCommand(input.value.trim());
        input.value = '';
    }
    // load prev command
    else if (event.key === 'ArrowUp') {
        document.getElementById('terminal-input').value = prev_cmd;
    }
});


// handle command
function handleCommand(command) {
    var output_text = '';
    prev_cmd = command;
    switch (command.toLowerCase()) {
        case 'help':
            output_text = `Available commands

help        List all commands

about       Bio

exp         Experience

skills      Programming langs, Frameworks

projects    Projects built

pubs        Publications

cert        Certifications`;
            break;
        case 'about':
            output_text = `I am Ramdhanush,

Software developer, Computer Science Undergrad

My interests: Cybersecurity, AI, Full Stack, and any programming :)`;
            break;
        case 'exp':
            output_text = `Citi -- Summer Analyst -- May 2023 - Jul 2023

MELSS -- Student Intern -- Jul 2023 - Aug 2023`;
            break;
        case 'skills':
            output_text = `Programming Languages: Python, C, Java, C++, SQL, JavaScript, HTML, CSS, Prolog

Libraries and APIs: SQLite, TensorFlow, OpenCV, Flask, OpenGL, Discord, Raylib

Frameworks: React, Android`;
            break;
        case 'projects':
            output_text = "Check out my projects on GitHub! http://github.com/RamDanny";
            break;
        case 'pubs':
            output_text = `Intended Sarcasm Detection using Transformer Models - SemEval 2022, NAACL

A Fusion Approach for Web Search Result Diversification Using Machine Learning Algorithms - ImageCLEF 2022

Recent Trends in IoT as Part of Digital India - AI, IoT, and Blockchain Breakthroughs in E-Governance, IGI Global`;
            break;
        case 'cert':
            output_text = `CS50x Intro to Programming - Harvard University

Ethical Hacking - NPTEL

Intro to Competitive Programming - NPTEL

Machine Learning Using Python - Apptronix Technologies`;
            break;
        case 'excelsior':
            output_text = "“If you have an idea that you genuinely think is good, don't let some idiot talk you out of it.” ― Stan Lee";
            break;
        case 'l':
            output_text = "“Sometimes, the questions are complicated - and the answers are simple.” - L Lawliet";
            break;
        case 'dattebayo':
            output_text = "“Just give up… on trying to make me give up!” - Naruto Uzumaki";
            break;
        default:
            output_text = "Command not found. Type 'help' for a list of commands.";
    }
    cascadingText("response", output_text);
}
