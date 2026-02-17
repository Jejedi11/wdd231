import { displayGuideDetails } from "./modal.mjs";

class guide {
  constructor(name, description, link) {
    this.name = name;
    this.description = description;
    this.link = link;
  }
}

const fileGuide = new guide('File system', 'The Linux filesystem is where all of your programs and files will be stored, knowing what directories are for will help you to be able to navigate the system. There are several basic and more advanced tools that you have when navigating via the terminal.', 'https://ubuntu.com/tutorials/command-line-for-beginners#1-overview');
const packageGuide = new guide('Package Manager', 'Just like any computer, in order to do anything you will need software. Package managers are built into most linux distributions and contain the basic tools you will need to get your work done.', 'https://www.debian.org/doc/manuals/aptitude/pr01s02.en.html');
const permissionsGuide = new guide('Permissions', 'File permissions offer security helping to avoid running undesired code on your machine, you will need a basic understanding of this when using certain kinds of programs.', 'https://www.redhat.com/en/blog/linux-file-permissions-explained');

const file = document.querySelector('#file');
const packageManager = document.querySelector('#package-manager');
const permissions = document.querySelector('#permissions');

file.addEventListener('click', () => {
  displayGuideDetails(fileGuide);
});

packageManager.addEventListener('click', () => {
  displayGuideDetails(packageGuide);
});

permissions.addEventListener('click', () => {
  displayGuideDetails(permissionsGuide);
});
