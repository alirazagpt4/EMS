
const employees = [
  {
    id: 1,
    firstName: "Alice",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Generate the weekly sales report for region A.",
        date: "2025-05-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Call clients from last week's list and gather feedback.",
        date: "2025-05-15",
        category: "Client Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Timesheet",
        description: "Timesheet for the last month was not submitted on time.",
        date: "2025-05-01",
        category: "Administration"
      }
    ]
  },
  {
    id: 2,
    firstName: "Bob",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Inventory Check",
        description: "Complete inventory review for warehouse 2.",
        date: "2025-05-22",
        category: "Operations"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Safety Training",
        description: "Complete the mandatory safety training module.",
        date: "2025-05-23",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend and present weekly update in team meeting.",
        date: "2025-05-17",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "System Audit",
        description: "Failed to perform monthly system audit.",
        date: "2025-05-10",
        category: "IT"
      }
    ]
  },
  {
    id: 3,
    firstName: "Charlie",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Marketing Strategy",
        description: "Draft marketing strategy for Q3 campaign.",
        date: "2025-05-25",
        category: "Marketing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Newsletter Content",
        description: "Write content for the upcoming company newsletter.",
        date: "2025-05-26",
        category: "Content"
      }
    ]
  },
  {
    id: 4,
    firstName: "Diana",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Survey",
        description: "Prepare questions for the customer satisfaction survey.",
        date: "2025-05-20",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Data Cleanup",
        description: "Remove duplicate entries from the client database.",
        date: "2025-05-19",
        category: "Data Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Documentation",
        description: "Failed to submit updated documentation for API changes.",
        date: "2025-05-10",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ethan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Feature Testing",
        description: "Test new features in staging environment.",
        date: "2025-05-21",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Bug Fixes",
        description: "Fix bugs reported in the last sprint.",
        date: "2025-05-19",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Reviewed and approved pull requests.",
        date: "2025-05-17",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Update",
        description: "Failed to deploy last update on schedule.",
        date: "2025-05-15",
        category: "DevOps"
      }
    ]
  }
];

      



const admin = [
    {
            "id": 1,
            "firstName": "Admin Ali Raza",
            "email": "admin@example.com",
            "password": "123"
          }
];


export const setLocalStorage = ()=>{
      // console.log("hello Set local storage.")
      localStorage.setItem('employees' , JSON.stringify(employees));
      localStorage.setItem('admin' , JSON.stringify(admin));

}


export const getLocalStorage = ()=>{
  const employees =  JSON.parse(localStorage.getItem('employees'));
  const admin =  JSON.parse(localStorage.getItem('admin'));
  

  return {employees , admin};
  

}




