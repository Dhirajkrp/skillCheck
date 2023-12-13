const persons = [
  {
    name: "dhiraj",
    age: 24,
  },
  {
    name: "yash",
    age: 222,
  },
];

if (
  !persons.includes({
    name: "dhiraj",
    age: 24,
  })
) {
  console.log("not present");
} else {
  console.log("present");
}
