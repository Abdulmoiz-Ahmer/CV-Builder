export interface CV {
  id: number;
  firstName: string;
  lastName: string;
  position: {
    id: number;
    title: string;
  };
  seniorityLevel: string;
  citizenship: string;
  currentLocation: string;
  technicalExperienceSummery: string;
  softAndLeadershipSkills: string;
  readinessToBusinessTrips: string;
  workExperience: [
    {
      companyName: string;
      from: string;
      to: string;
      position: string;
      projects: [
        {
          name: string;
          clientName: string;
          position: string;
          from: string;
          to: string;
          descriptions: string;
          responsibilities: string;
          toolsAndTechnologies: string;
        }
      ];
      education: [
        {
          instituteName: string;
          degreeName: string;
          from: string;
          to: string;
        }
      ];
      responsibilities: string;
    }
  ];
}
