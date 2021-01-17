<template>
    <div>
        <Header />
        <div class="container-fluid">
            <h1 class="mt-5 course-page-title">آموزش تحلیل بورس با پایتون</h1>
            <Breadcrumb class="mt-3" :items="bItems" active="آموزش تحلیل بورس با پایتون" />
            <div class="row mt-5">
                <div class="col-lg-3">
                    <div class="side-card mb-3 course-info-lc">
                        <course-info :options="courseInfo" />
                    </div>
                    <div class="side-card">
                        <div class="head-side-card">
                            <div class="status">در حال تدریس</div>
                            <div class="status">مقدماتی تا پیشرفته</div>
                        </div>
                        <div class="padding">
                            <p class="mt-3 hint-reg-course">
                                برای عضویت در دوره، لازم است که در سایت ثبت نام کرده باشید. با کلیک بر اینجا ثبت نام کنید !
                            </p>
                            <ul class="mt-4 course-info">
                                <li><i class="fad fa-chalkboard-teacher"></i> مدرس دوره : امیرحسین فضلی</li>
                                <li><i class="fad fa-users"></i> تعداد دانشجویان دوره : 240 نفر</li>
                                <li><i class="fad fa-video"></i> تعداد ویدیو ها : 24 ویدیو</li>
                                <li><i class="fad fa-clock"></i> مدت زمان دوره : 28 ساعت</li>
                                <li><i class="fad fa-calendar-plus"></i> آخرین بروزرسانی : 1399/10/27</li>
                            </ul>
                            <div class="price-course">
                                <i class="fad fa-dollar-sign"></i>
                                قیمت دوره :
                                <span>
                                    <i>
                                        <del>500,000</del>
                                    </i>
                                </span>
                                <span>
                                    <i>
                                        300,000 <span>تومان</span>
                                    </i>
                                </span>
                            </div>

                            <btn-sccss class="reg-course-btn mt-4">ثبت نام در دوره</btn-sccss>
                        </div>
                    </div>
                    <div class="side-card mt-3">
                        <div class="padding">
                            <span class="teacher-name">مدرس دوره</span>
                            <div class="tbox">
                                <img class="teacher-avatar" src="../assets/img/Amir-developer-avatar.jpg" alt="Teacher Avatar">
                                <span>امیرحسین فضلی</span>
                                <p>
                                    امیرحسین فضلی هستم، عضو هیئت مدیره مجموعه ویرولرن و فعال در حوزه بلاکچین و برنامه نویسی وب.
                                </p>
                                <btn-prime class="mt-3">صفحه مدرس</btn-prime>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9"></div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    import Breadcrumb from "../components/sections/breadcrumb";
    import btnSccss from "../components/buttons/success/success";
    import btnPrime from "../components/buttons/primary/outline";
    import CourseInfo from "../components/sections/course-info";
    export default {
        name: "coursePage",
        components: {
            Header,
            Footer,
            Breadcrumb,
            btnSccss,
            btnPrime,
            CourseInfo,
        },
        data() {
            return {
                bItems: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                ],
                courseInfo: {
                    rating: 3,
                    liked: false,
                    likes: 553,
                    comments: 68,
                    time: 8,
                },
            };
        },
    };
</script>
