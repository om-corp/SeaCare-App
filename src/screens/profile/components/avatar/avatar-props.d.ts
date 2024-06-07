import { UserProps } from "~/provider/user-provider";

export interface AvatarProps {
    username: UserProps['name'];
    email: UserProps['email'];
    phone: UserProps['phone'];
}