import * as React from "react";
import {
    List,
    Datagrid,
    TextField,

} from 'react-admin';


const StudentRegistrationList = ({...props}) => (
    <>
        <List
            {...props}
            sort={{field: 'registrationNumber'}}
            perPage={10}
            title="Summary: Student Registration Number">

            <Datagrid rowClick="edit">
                <TextField source="studentName"/>
                <TextField source="registrationNumber"/>
                <TextField source="dateOfBirth"/>
                <TextField source="address"/>
            </Datagrid>
        </List>
    </>
);

export default StudentRegistrationList;