export const EmployeeInfo: Employee[] = [
  {
    name: "aniket",
    date_of_birth: "01-08-2002",
    emp_id: 1,
    productivity: [
      {
        day: "Monday",
        percentage: 87,
      },
      {
        day: "Tuesday",
        percentage: 80,
      },
      {
        day: "Wednesday",
        percentage: 56,
      },
      {
        day: "Thursday",
        percentage: 90,
      },
      {
        day: "Friday",
        percentage: 50,
      },
      {
        day: "Saturday",
        percentage: 80,
      },
    ],
    role: "Software engineeer",
  },
  {
    name: "vivek",
    date_of_birth: "05-08-2003",
    emp_id: 2,
    productivity: [
      {
        day: "Monday",
        percentage: 87,
      },
      {
        day: "Tuesday",
        percentage: 80,
      },
      {
        day: "Wednesday",
        percentage: 56,
      },
      {
        day: "Thursday",
        percentage: 90,
      },
      {
        day: "Friday",
        percentage: 50,
      },
      {
        day: "Saturday",
        percentage: 80,
      },
    ],
    role: "Cloud engineeer",
  },
];
interface Productivity {
  day: String;
  percentage: number;
}
export interface Employee {
  name: String;
  emp_id: number;
  date_of_birth: String;
  role: String;
  productivity: Productivity[];
}
