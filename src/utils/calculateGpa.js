function calculateGpa(grades) {
    // grades = [{ credits: 3, grade: 'A' }, { credits: 1, grade: 'B' }]
    const gradePoints = {
        O: 10,
        'A+': 9,
        A: 8,
        'B+': 7,
        B: 6,
        C: 5,
        W: 0,
        F: 0,
        Ab: 0,
    };

    const totalCreditPoints = grades.reduce(
        (total, { credits, grade }) => total + gradePoints[grade] * credits,
        0
    );

    const totalCredits = grades.reduce((total, { credits }) => total + credits, 0);

    // Handle division by zero
    if (totalCredits === 0) return 0;

    // Round to 2 decimal places
    return Math.round((totalCreditPoints / totalCredits) * 100) / 100;
}

export default calculateGpa;
