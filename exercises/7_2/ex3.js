const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//ex1
const newKey = (obj, key, val) => {
  obj[key] = val;
}
//ex2
const listKeys = (obj) => {
  Object.keys(obj);
}
//ex3
const sizeObj = (obj) => Object.keys(obj).length;
//ex4
const valObj = (obj) => Object.values(obj);
//ex5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//ex6
