// Fisher-Yates Shuffle Implementation
const fisherYatesShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to check for mutual evaluation
const isMutualEvaluation = (project, evaluator, projectEvaluations) => {
  return projectEvaluations[evaluator]?.includes(project) || false;
};

// Example student data array
let students = [
  ["Nghi Pham", "Nghi.T.Pham@student.lut.fi"],
  ["Aqemur Himel", "Aqemur.Himel@student.lut.fi"],
  ["Rihards Gailis", "Rihards.Gailis@student.lut.fi"],
  ["Isuru Hollupathirage", "Isuru.Hollupathirage@student.lut.fi"],
  ["Elena Tishkovskaya", "Elena.Tishkovskaya@student.lut.fi"],
  ["Feroz Khan", "Feroz.Khan@student.lut.fi"],
  ["Fatima Akhtar", "Fatima.Akhtar@student.lut.fi"],
  ["Ella Viitasuo", "Ella.Viitasuo@student.lut.fi"],
  ["Dhivya Bharathi Radha Krishnan", "Dhivya.Bharathi.Radha.Krishnan@student.lut.fi"],
  ["Muhammad Ali", "Muhammad.M.Ali@student.lut.fi"],
  ["Zeeshan Rais", "Zeeshan.Rais@student.lut.fi"],
  ["Beenish Nazam", "Beenish.Nazam@student.lut.fi"],
  ["Miisa Suorsa", "Miisa.Suorsa@student.lut.fi"],
  ["Kushal Bhattarai", "Kushal.Bhattarai@student.lut.fi"],
  ["Naosad Hossen", "Naosad.Hossen@student.lut.fi"],
  ["Trieu Trieu", "Trieu.Huynh.Ba.Nguyen@student.lut.fi"],
  ["Umandi Weerasekara", "Umandi.Weerasekara@student.lut.fi"],
  ["Sheraz Anwar", "Sheraz.Anwar@student.lut.fi"],
  ["Mujtaba Hassan", "Mujtaba.Hassan@student.lut.fi"],
  ["Dung Pham", "Dung.Pham@student.lut.fi"],
  ["Zarak Iftikhar", "Zarak.Iftikhar@student.lut.fi"],
  ["Fatemeh Eshghi", "Fatemeh.Eshghi@student.lut.fi"],
  ["Iresha Himihami Mudiyanselage", "Iresha.Himihami.Mudiyanselage@student.lut.fi"],
  ["Mahesh Malladi", "Mahesh.Malladi@student.lut.fi"],
  ["Sumaiya Antara", "Sumaiya.Antara@student.lut.fi"],
  ["Taha Ahmed", "taha.ahmed@student.lut.fi"],
  ["Sindhuja Chandrasekaran", "sindhuja.chandrasekaran@student.lut.fi"]
]; // Add more students as needed

// Create an array of project indices
const numProjects = students.length;
let projects = Array.from({ length: numProjects }, (_, i) => i);

// Shuffle the array using Fisher-Yates
let shuffledProjects = fisherYatesShuffle(projects);

// Assign evaluators based on the shuffled array
let projectEvaluations = {};
for (let i = 0; i < numProjects; i++) {
  let evaluators = [
    shuffledProjects[(i + 1) % numProjects],
    shuffledProjects[(i + 2) % numProjects],
    shuffledProjects[(i + 3) % numProjects]
  ];
  projectEvaluations[shuffledProjects[i]] = evaluators;
}

console.log("Project Evaluations:", projectEvaluations);

// Generate output in the required format
let output = Object.entries(projectEvaluations).map(([project, evaluators]) => ({
  project: students[project][0],
  evaluators: evaluators.map(evaluator => students[evaluator][0] + " - " + students[evaluator][1])
}));

// Output the results
console.log("Assignments:", output);