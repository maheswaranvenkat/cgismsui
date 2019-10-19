import * as React from "react";
import { Create, SimpleForm, TextInput, required, DateInput } from 'react-admin';
import {maxLength} from "ra-core";


const StudentRegistrationEdit = ({ onCancel, ...props}) => (
    <Create {...props} title="Edit: Student Registration">
        <SimpleForm>
            <TextInput autoFocus source="studentName" validate={[required(), maxLength(64)]} fullWidth />
            <TextInput autoFocus source="registrationNumber" validate={[required(), maxLength(64)]} fullWidth />
            <DateInput autoFocus source="dateOfBirth" options={ { format: 'DD/MM/YYYY', ampm: false, clearable: true}}
                       validate={required()} />
            <TextInput autoFocus source="address" validate={[required(), maxLength(64)]} fullWidth />
        </SimpleForm>

    </Create>
);

export default StudentRegistrationEdit;