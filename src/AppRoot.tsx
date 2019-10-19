import * as React from "react";
import {
    Admin,
    Resource

} from 'react-admin';
import {dataProvider} from "./helpers/data-provider";
import StudentRegistrationList from "./resources/StudentRegistration/StudentRegistrationList";
import StudentRegistrationCreate from "./resources/StudentRegistration/StudentRegistrationCreate";
import StudentRegistrationEdit from "./resources/StudentRegistration/StudentRegistrationEdit";
const AppRoot: React.FunctionComponent<{}> = () => {
    return(
        <Admin
            dataProvider={dataProvider}
            title="SMS">

            <Resource
                options={{label: 'Student Registration'}}
                name="student-registration"
                list={StudentRegistrationList}
                create={StudentRegistrationCreate}
                edit={StudentRegistrationEdit}
            />

        </Admin>

    );
};

export default AppRoot;