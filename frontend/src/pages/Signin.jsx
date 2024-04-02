import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin=()=>{
    return <div className="bg-slate-300 h-screen flex justfy-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputBox placeholder="johndoe@gmail.com" label={"Email"}></InputBox>
                <InputBox placeholder="123456" label={"Password"}></InputBox>
                <div className="pt-4">
                    <Button label={"Sign in"}></Button>

                </div>
                <BottomWarning label={"Don't have an account?"}  buttonText={"Sign up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
    </div>
}