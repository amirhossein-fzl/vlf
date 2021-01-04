<template>
    <div class="login-body col-lg-6 mx-auto p-lg-4 mt-5">
        <h2>LOGO</h2>
        <div class="row">
            <div class="col-lg-6">
                <viro-input type="text" :required="true"><i class="fad fa-user-tie"></i> نام و نام خانوادگی</viro-input>
            </div>
            <div class="col-lg-6">
                <viro-input type="text" :required="true"><i class="fad fa-user"></i> نام کاربری</viro-input>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <viro-input type="email" :required="true"><i class="fad fa-at"></i> ایمیل</viro-input>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <viro-input type="password" :required="true"><i class="fad fa-lock"></i> کلمه عبور</viro-input>
            </div>
            <div class="col-lg-6">
                <viro-input type="password" :required="true"><i class="fad fa-lock"></i> تکرار کلمه عبور</viro-input>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <btn-prime><i class="fad fa-user-plus mt-1 ml-1"></i> تکمیل ثبت نام</btn-prime>
        </div>
    </div>
</template>

<script>
    import ViroInput from "../../components/input";
    import btnPrime from "../../components/buttons/primary/primary";
    export default {
        name: "register",
        data() {
            return {
                usernameHint: ["یک نام کاربری به دلخواه انتخاب کنید", "نوشتن نام کاربری الزامی است"],
                enabled: false,
            };
        },
        components: {
            ViroInput,
            btnPrime,
        },
        beforeCreate() {
            let promise = new Promise((res) => {
                let body = document.getElementsByTagName("body")[0];
                res(body);
            });
            promise.then((body) => {
                body.classList.add("auth-page");
            });
        },
    };
</script>
