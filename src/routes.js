import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import LoginLayout from "src/layouts/LoginLayout";
import DashboardLayout from "src/layouts/DashboardLayout";

export const routes = [
  {
    exact: true,
    path: "/login",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/LogIn")),
  },
  {
    exact: true,
    path: "/signup",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/signup/signup")),
  },
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/index")),
  },
  {
    exact: true,
    path: "/dashboard-01",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dasboard/Index")),
  },
  {
    exact: true,
    path: "/dashboard-02",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dasboard/Index")),
  },
  {
    exact: true,
    path: "/dashboard-03",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dasboard/Index")),
  },
  {
    exact: true,
    path: "/dashboard-04",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dasboard/Index")),
  },
  {
    exact: true,
    path: "/dashboard-05",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dasboard/Index")),
  },
  {
    exact: true,
    path: "/about",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPages/AboutUs")),
  },
  {
    exact: true,
    path: "/policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPages/Policy")),
  },
  {
    exact: true,
    path: "/terms",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPages/Terms")),
  },

  {
    exact: true,
    path: "/contact-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPages/ContactUs")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
