export interface StudentInterface {
    
    id: number,
    studentFullName: string,
    address: string,
    indexNumber: number,
    dateOfBirth: string,
    grade: number,
    motherName: string,
    motherProfession: string,
    fatherName: string,
    fatherProfession: string,
    guardianName: string,
    guardianAddress: string,
    guardianContact: number,
    extraActivities: string,
}


export interface TeacherInterface{
    idTeacher:number,
    teacherName: string,
    teacherIndex: number,
    contactNumber: number,
    address: string,
    age: number,
    qualification: string,
    tic: string,

}
