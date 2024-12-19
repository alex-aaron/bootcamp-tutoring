const students = [
    {
        name: 'Stephanie Cooper',
        age: 37,
        location: 'New Orleans, LA',
        timeZone: 'CST',
        hotSpotAvailability: true,
        transportation: true,
        newsLetterSubscription: false,
        courses: [
            {
                courseName: 'Prep',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '10/28/2024',
                observations: [
                    {
                        author: {
                            name: 'Patricia West',
                            role: 'Instructor'
                        },
                        text: "Stephanie was absent from class due to her powering being out.",
                        dateObserved: '11/06/2024'
                    }
                ]
            }
        ]
    },
    {
        name: 'Bethany Joseph',
        age: 35,
        location: 'New Orleans, LA',
        timeZone: 'CST',
        hotSpotAvailability: true,
        transportation: false,
        newsLetterSubscription: true,
        courses: [
            {
                courseName: 'Prep',
                status: 'Passed',
                attempts: 2,
                dateOfLastAttempt: '08/15/2023',
                observations: [
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Bethany has improved greatly this session!',
                        dateObserved: '08/01/2023'
                    }
                   
                ]
            },
            {
                courseName: 'Bootcamp',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '09/15/2024',
                observations: [
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Bethany is up to date with her WIOA requirements.',
                        dateObserved: '08/21/2024'
                    }
                ]
            }
        ]
    },
    {
        name: 'Nathan Coen',
        age: 36,
        location: 'Atlanta, GA',
        timeZone: 'EST',
        hotSpotAvailability: true,
        transportation: true,
        newsLetterSubscription: true,
        courses: [
            {
                courseName: 'Prep',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '08/15/2023',
                observations: [
                    {
                        author: {
                            name: 'Patricia West',
                            role: 'Instructor'
                        },
                        text: 'He would benefit from asking more questions in class.',
                        dateObserved: '08/03/2023'
                    }
                ]
            },
            {
                courseName: 'Bootcamp',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '09/15/2023',
                observations: [
                    {
                        author: {
                            name: 'Alex Aaron',
                            role: 'Instructor',
                        },
                        text: 'Nathan has increased his question volume in class.',
                        dateObserved: '09/19/2023'
                    },
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Nathan requested has met his midpoint requirements.',
                        dateObserved: '10/05/2023'
                    }
                ]
            }
        ]
    },
    {
        name: 'Kyle Bradley',
        age: 41,
        location: 'Baltimore, MD',
        timeZone: 'EST',
        hotSpotAvailability: true,
        transportation: true,
        newsLetterSubscription: false,
        courses: [
            {
                courseName: 'Prep',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '06/24/2022',
                observations: [
                    {
                        author: {
                            name: 'Patricia West',
                            role: 'Instructor'
                        },
                        text: 'Had to reschedule interview.',
                        dateObserved: '08/02/2022'
                    },
                ]
            },
            {
                courseName: 'Bootcamp',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '08/09/2022',
                observations: [
                    {
                        author: {
                            name: 'Alex Aaron',
                            role: 'Instructor'
                        },
                        text: "Completed work early and requested additional practice.",
                        dateObserved: '09/16/2022'
                    },
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: "Requested to take exam early to accomodate personal matter."
                    }
                ]
            },
            {
                courseName: 'Precourse',
                status: 'Passed',
                attempts: 1,
                dateOfLastAttempt: '09/23/2022',
                observations: [
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Requested OpSpark lapstop for the precourse.'
                    }
                ]
            }
        ]
    }
];

