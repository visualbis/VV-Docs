module.exports = {
    sideBar: {
        "Getting Started": ["getting-started/intro"],
    },

    installationGuide: {
        "Getting Started": [
            "installation-guide/welcome",
            "installation-guide/changelog",
            "installation-guide/sys-req",
            "installation-guide/download-bihub",
            "installation-guide/install-pre",
        ],
        "Installation of BI Hub for Windows Platform": [{
                type: "category",
                label: "Server Installation",
                items: ["installation-guide/install-bihub-windows/server/install",
                    {
                        type: "category",
                        label: "Server Configuration",
                        items: [
                            "installation-guide/install-bihub-windows/server/config/config",
                            "installation-guide/install-bihub-windows/server/config/config-tab",
                            "installation-guide/install-bihub-windows/server/config/instances-tab",
                        ],
                    },
                    "installation-guide/install-bihub-windows/server/post-config",
                    "installation-guide/install-bihub-windows/server/troubleshooting",
                ],
            },

            {
                type: "category",
                label: "Web Installation",
                items: [
                    "installation-guide/install-bihub-windows/web/install",
                    "installation-guide/install-bihub-windows/web/config",
                    "installation-guide/install-bihub-windows/web/post-config",
                    "installation-guide/install-bihub-windows/web/troubleshooting"
                ]
            },
            {
                type: "category",
                label: "Agents Installation",
                items: [
                    "installation-guide/install-bihub-windows/agents/install",
                    "installation-guide/install-bihub-windows/agents/post-install",
                ]
            },
            /*    "installation-guide/install-bihub-windows/synch-bihub-platforms", */


            /*        {
                },
            */


        ],
 /*       "Advanced": [
            "installation-guide/advanced/ssl-config",
            "installation-guide/advanced/agent-config",
            "installation-guide/advanced/load-balance",
            "installation-guide/advanced/architecture",
            "installation-guide/advanced/backup-restore",
            "installation-guide/advanced/db-purge",
            "installation-guide/advanced/services-info",
            "installation-guide/advanced/server-restart-checklist",
        ], */
        "Upgrade Trial Version": [
            "installation-guide/upgrade-trial/upgrade-trial"
        ],

        "Moving BI Hub instance": ["installation-guide/move-instance/move-instance"],
        "Uninstall and Reinstall": ["installation-guide/uninstall-reinstall/uninstall-bihub", "installation-guide/uninstall-reinstall/reinstall-bihub"]


    },

    adminGuide: {
        "Welcome": ["admin-guide/getting-started/welcome",
            {
                type: "category",
                label: "Prerequisite",
                items: ["admin-guide/getting-started/prerequisite/prerequisite", "admin-guide/getting-started/prerequisite/add-new-agent",

                    {
                        type: "category",
                        label: "BI Platform Agent Configuration",
                        items: [
                            "admin-guide/getting-started/prerequisite/bi-platform-config/bobj",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/tableau",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/file-bi",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/ssrs",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/spotfire",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/sac",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/looker",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/onedrive",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/qlik-view",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/cognos",
                            "admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy",
                        ],
                    },
                ],
            },
            
        ],        
        "Getting Started": [
            "admin-guide/overview", 
            {
                type: "category",
                label: "Agent Manager",
                items: ["admin-guide/agent-manager/agent-manager",
            "admin-guide/agent-manager/logfiles-download",
            "admin-guide/agent-manager/delete-instance-cluster"
        ],
            },
            {
                type: "category",
                label: "User Manager",
                items: ["admin-guide/user-manager/user-manager",
                 "admin-guide/user-manager/add-reports-existing-user",
                "admin-guide/user-manager/add-users-bi-platform",
                "admin-guide/user-manager/edit-bihub-users",
                "admin-guide/user-manager/power-users",
                "admin-guide/user-manager/dashboard-admin",
                "admin-guide/user-manager/create-cluster",
            ],
            },
            {
                type: "category",
                label: "Authentication",
                items: [
                    "admin-guide/authenticate/authenticate",
                "admin-guide/authenticate/synch-ms-ad-bihub",
                "admin-guide/authenticate/add-ms-ad"
            ],
            },
            {
                type: "category",
                label: "Reports",
                items: [
                    "admin-guide/reports/reports",
                    "admin-guide/reports/hub-folders",
                    "admin-guide/reports/upload-metadata-csv",
                    "admin-guide/reports/report-details",
                    "admin-guide/reports/report-thumbnails",
                    "admin-guide/reports/reports-history",
                    "admin-guide/reports/custom-url",
                    "admin-guide/reports/synch-reports-users"
                ],

            },
            {
                type: "category",
                label: "Settings",
                items: [
                    "admin-guide/admin-functions/settings/settings",
                    "admin-guide/admin-functions/settings/general",
                    "admin-guide/admin-functions/settings/report",
                    "admin-guide/admin-functions/settings/theme",
                    "admin-guide/admin-functions/settings/user-dashboard",
                    "admin-guide/admin-functions/settings/email-template"
                ]
            },
            "admin-guide/request-access-reports-admin",
            "admin-guide/audit",
            
    ],
        "Admin Functions": [{
                type: "category",
                label: "Integrating BI Hub with BI Platforms",
                items: [
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/admin-functions",
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/integrate",
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/edit-agent-instance",
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/edit-msad-bihub",
                    "admin-guide/admin-functions/integrate-bihub-platform-msad/del-msad-bihub"
                ]
            },
            
            {
                type: "category",
                label: "Maintenance of BI Hub",
                items: [
                    "admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub",
                    "admin-guide/admin-functions/maintenance-bihub/edit-password-authenticated-user",
                    "admin-guide/admin-functions/maintenance-bihub/del-user",
                    "admin-guide/admin-functions/maintenance-bihub/configure-smart-search"
                ]
            },            
            
            {
                type: "category",
                label: "Multiple Instances of BI Hub",
                items: [
                    "admin-guide/admin-functions/multiple-instances/mult-instances",
                    
                    "admin-guide/admin-functions/multiple-instances/synch-users-reports",
                    "admin-guide/admin-functions/multiple-instances/modify-prim-instance",
       
                ]
            },
            "admin-guide/admin-functions/profile-settings"

        ], //End of Admin Functions

        "Backup and Recovery": [
            "admin-guide/backup-recovery/backup",
            "admin-guide/backup-recovery/recovery",
        ],

        "Log Levels": [
            "admin-guide/log-levels/log-levels"
        ],

        "Administrator Utilities": [
            "admin-guide/admin-utilities/admin-utilities",
            "admin-guide/admin-utilities/change-passwd",
            "admin-guide/admin-utilities/scheduled-synch-ad",
            "admin-guide/admin-utilities/scheduled-synch-bi",
            "admin-guide/admin-utilities/multiple-admin-acct"
        ],

        "License Details": [
            "admin-guide/license/license"
        ]

    },


    userGuide: {
        "Getting Started": [
            "user-guide/onboard-info",
        ],
        "Home Page": [

            "user-guide/home-page/home-page",
            "user-guide/home-page/user-dashboard",
            "user-guide/home-page/search-function",
            "user-guide/home-page/advanced-search",
            "user-guide/home-page/request-access-inaccessible",
            "user-guide/home-page/request-access-reports",


        ],
        "Profile Settings": [
            "user-guide/profile-settings"
        ],
        "Comments": [
            "user-guide/comments/comments",
            "user-guide/comments/notifications"
        ],
        "Favorites": [
            "user-guide/favorites/favorites"
        ],
        "My Folders": [
            "user-guide/my-folders/my-folders",
            "user-guide/my-folders/add-folder",
            "user-guide/my-folders/move-to-folder",
            "user-guide/my-folders/rename-folder",
            "user-guide/my-folders/del-folder",
            "user-guide/my-folders/custom-url"
        ],
        "Hub Folders": [
            "user-guide/hub-folder/hubfolders"
        ],
        "BI Platform": [
            "user-guide/bi-platform/bi-platform",
            "user-guide/bi-platform/tab",
            "user-guide/bi-platform/report-view",
            "user-guide/bi-platform/report-icon-actions",
            "user-guide/bi-platform/col-headers",
            "user-guide/bi-platform/col-filter",
        ],
        "History": [
            "user-guide/history/history"
        ]
    },
}
