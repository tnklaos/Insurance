import DashboardLayout from '@/pages/Layout/DashboardLayout.vue';

import Dashboard from '@/pages/Dashboard.vue';
import MyProfile from '@/pages/MyProfile.vue';
import Admins from '@/pages/Admins.vue';
import Agents from '@/pages/Agents.vue';
import Customers from '@/pages/Customers.vue';
import Policies from '@/pages/Policies.vue';
import CustomerPolicies from '@/pages/CustomerPolicies.vue';
import CustomerPoliciesCreate from '@/pages/CustomerPoliciesCreate.vue';
import CustomerPoliciesEdit from '@/pages/CustomerPoliciesEdit.vue';

import Reports from '@/pages/Reports.vue';
import ReportAdmin from '@/components/Reports/ReportAdmin.vue';
import ReportAgent from '@/components/Reports/ReportAgent.vue';
import ReportPolicy from '@/components/Reports/ReportPolicy.vue';
import ReportCustomer from '@/components/Reports/ReportCustomer.vue';

import Maps from '@/pages/Maps.vue';
import Changelog from '@/pages/Changelog.vue';
import Logs from '@/pages/Logs.vue';
import Login from '@/pages/Login.vue';
import Logout from '@/pages/Logout.vue';

const routes = [
	{
		path: '/',
		component: DashboardLayout,
		redirect: '/dashboard',
		children: [
			// ADMIN/AGENT LOGIN
			{
				path: '/dashboard',
				name: 'Dashboard',
				meta: {
					requiresAuth: true
				},
				component: Dashboard
			},
			{
				path: '/my-profile',
				name: 'My Profile',
				meta: {
					requiresAuth: true
				},
				component: MyProfile
			},
			{
				path: '/admins',
				name: 'Admins',
				meta: {
					requiresAuth: true
				},
				component: Admins
			},
			{
				path: '/agents',
				name: 'Agents',
				meta: {
					requiresAuth: true
				},
				component: Agents
			},
			{
				path: '/customers',
				name: 'Customers',
				meta: {
					requiresAuth: true
				},
				component: Customers
			},
			{
				path: '/policies',
				name: 'Policies',
				meta: {
					requiresAuth: true
				},
				component: Policies
			},
			{
				path: '/customer-policies',
				name: "Customer's Policies",
				meta: {
					requiresAuth: true
				},
				component: CustomerPolicies
			},
			{
				path: '/customer-policies-create',
				name: "Customer's Policies Create",
				meta: {
					requiresAuth: true
				},
				component: CustomerPoliciesCreate
			},
			{
				path: '/customer-policies-edit/:id',
				name: "Customer's Policies edit",
				meta: {
					requiresAuth: true
				},
				component: CustomerPoliciesEdit
			},
			{
				path: '/reports',
				name: 'Reports',
				meta: {
					requiresAuth: true
				},
				component: Reports,
				children: [
					{
						path: 'admin',
						name: 'Reports | Admins',
						component: ReportAdmin
					},
					{
						path: 'agent',
						name: 'Reports | Agents',
						component: ReportAgent
					},
					{
						path: 'policy',
						name: 'Reports | Policies',
						component: ReportPolicy
					},
					{
						path: 'customer',
						name: 'Reports | Customers',
						component: ReportCustomer
					}
				]
			},
			{
				path: '/maps',
				name: 'Maps',
				meta: {
					hideFooter: true,
					requiresAuth: true
				},
				component: Maps
			},

			// LOGIN / LOGOUT SECTION
			{
				path: '/login',
				name: 'Login',
				component: Login,
				meta: {
					hideNavigation: true,
					hideSidebar: true,
					hideFooter: true
				}
			},
			{
				path: '/logout',
				name: 'Logout',
				component: Logout,
				meta: {
					hideNavigation: true,
					hideSidebar: true,
					hideFooter: true
				}
			},

			// ADMINISTRATOR LOGIN ONLY
			// {
			// 	path: '/administrator',
			// 	name: 'Administrator Login',
			// 	component: LoginMaster,
			// 	meta: {
			// 		hideNavigation: true,
			// 		hideSidebar: true,
			// 		hideFooter: true
			// 	}
			// },

			// CHANGE LOGS ABOUT PROJECT
			{
				path: '/changelog',
				name: 'Change logs',
				meta: {
					requiresAuth: true
				},
				component: Changelog
			},
			{
				path: '/logs',
				name: 'Logs',
				meta: {
					requiresAuth: true
				},
				component: Logs
			}
		]
	}
];

export default routes;
