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

export interface AnnouncementInterface{
    idMessage :number,
    title: string,
    msgDescription: string,
    content: string,
}

export interface UserInterface{
    idUser: number,
    userName: string,
    password: string,
    role: string,
}
export interface StaffInterface{
    idStaff: number,
    empName: string,
    empPosition: string,
    empContacts: number,
    empAdddress: string,
    empAge: number,
}
