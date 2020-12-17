import to from "await-to-js";
import * as React from "react";
import { AuthService } from "../../service/auth.service";
import { UserService } from "../../service/user.service";
import AuthButton from "../../components/UI/AuthButton/AuthButton";

export class Login extends React.Component<any> {
    public async login(provider: string) {
        const [err, dataAuth] = await to(AuthService(provider));
        if (!err) {
            const userService = new UserService();
            userService.getToken((dataAuth as any).token).then(() => {
                this.props.history.push("/account");
            });
        }
        console.log(dataAuth);
        // console.log(user);
    }
    public render() {
        return (
            <div style={{ textAlign: "center" }}>
                <AuthButton
                    btnType="Google"
                    clicked={() => this.login("google")}
                >
                    Login with Google
                </AuthButton>
                {/* ADD NEW PROVIDESRS */}
                {/* ... */}
            </div>
        );
    }
}

export default Login;
