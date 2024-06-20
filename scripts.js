document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInputField = document.getElementById('terminal-input-field');

    const commands = {
        'help': 'Available commands:\nabout - Introduction\nexperience - Work experience\nprojects - List of projects\neducation - Educational background\nlinks - Social and professional links',
        'about': "Hello world, I'm Sakshi Sangamwar, aspiring to become a good Security Engineer, and yes, I find blue teaming cool. Just a girl, trying to study as much security as possible by interning at startups and big tech and by taking one course of security and one of computer science at university. I love cryptography, but after writing a few algorithms on my own I realized that it's better for me and everyone to just use cryptographic libraries lol.",
        'experience': `Google
Sunnyvale, CA
May. 2024 - Present
Summer Internship | Security Engineering Intern
$ Team: Core, Enterprise Infrastructure Protection & Application Access Security
$ Project: LLM Powered ACL Change Summarizer
$ Toolkit: Golang, LLMs, Gemini AI and ACLs

Statewide California Earthquake Center, USC
Los Angeles, CA
Jan. 2024 - May. 2024
Student Worker | Software Developer
$ Implement website pages, application forms, and backend APIs for SCEC; crafting responsive web pages for enhanced user experience
$ Automate data population from Filemaker database for efficiency; developing scripts for seamless automatic data updates on multiple web pages

HACK-X Security
Pune, MH
Jan. 2023 - Jun. 2023
Summer Internship | Cyber Security R&D Intern
$ Collaboration with a team of 7 engineers to conduct research on tools and gather relevant information, in order to make a functional automated script for VAPT for the 'HACK-X Node' product; performed VAPT on 7 Client Side Projects
$ Alpha Testing and Selenium Testing on HACK-X Node User Acceptance Testing (UAT) environment, coordinating with 2 Developers to identify 23 bugs; reported UAT status, progress, risks and issues to Project Manager, leading to 98% defect resolution
$ Took part in weekly presentation meetings, demonstrated implementation and testing of vulnerability scripts categorized under Broken Access Control Vulnerabilities, such as path traversal, LFI, and WSDL`,
        'projects': `Designing a Secure Decentralized Audit System
$ A decentralized application for secure patient health data auditing using Web3, Truffle, MetaMask, and Ganache
$ Implemented SHA256, keccak256 for robust security
$ Designed for expansion with Ethereum Mainnet and planned enhancements like 2FA, reCAPTCHA, and real patient data integration

Implementation of Merkle Hash Tree with Proofs of Inclusion and Consistency
$ Created a Python program to generate a Merkle tree from a list of strings, utilizing SHA256 for hashing and producing a user-friendly output file displaying the tree structure
$ Wrote a Python script to verify if a specific string is included in the Merkle tree, providing proof in the form of corresponding hashes that demonstrate the path to the root
$ Developed a Python program to prove the consistency between two versions of a Merkle tree, ensuring that the new version includes all data from the old version in the same order with additional elements appended correctly

Advanced Social Distancing Detection using YOLO v5
$ Designed and Implemented custom data preprocessing techniques to optimize performance of the YOLO v5 model for social distancing detection; using a diverse dataset of images and videos to ensure robust detection across different environments and scenarios
$ Integrated telegram bot for alert generation and implement a user-friendly interface displaying real-time video feeds with bounding boxes indicating safe and unsafe distances between individuals; contributing to proactive enforcement of health guidelines
$ Conducted thorough testing and evaluation, achieving a high accuracy rate in detecting social distancing violations and providing valuable insights for decision-makers`,
        'education': `University of Southern California
Los Angeles, CA
Aug. 2023 - May. 2025
Viterbi School of Engineering | MS in Computer Science
$ Relevant Coursework: Analysis of Algorithms, Security Systems, Applied Cryptography, Database Systems, Internship in Engineering with Professional Writing and Communication (Summer 2024)
$ Graduate Member - USC Society of Women Engineers

Savitribai Phule Pune University
Pune, India
Jul. 2018 - Aug. 2022
Honors in Data Science | B.E. in Computer
$ Published a patent on ‘ISC-Storage: Intelligent way to share cloud storage from user-1 to user-n’
$ Pune university topper for 4 consecutive years
$ GPA: 4.0 / 4.0`,
        'links': `LinkedIn: <a href="https://www.linkedin.com/in/sakshiss" target="_blank">www.linkedin.com/in/sakshiss</a>
GitHub: <a href="https://github.com/sakshisangamwar" target="_blank">https://github.com/sakshisangamwar</a>`
    };

    terminalInputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const input = terminalInputField.value.trim().toLowerCase();
            terminalInputField.value = '';
            const commandOutput = commands[input] ? commands[input] : 'Command not found';
            const newLine = document.createElement('div');
            newLine.innerHTML = `&gt; ${input}<br>${commandOutput.replace(/\n/g, '<br>')}<br>`;
            terminalOutput.appendChild(newLine);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
});
