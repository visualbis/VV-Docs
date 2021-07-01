module.exports = {
    sideBar: {
        "Getting Started": ["getting-started/intro"],
    },

    installationGuide: {
        "Getting Started": [
            "copyright",
            "installation-guide/welcome",
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

        ],
        "Advanced": [
            {
                type: "category",
                label: "SSL",
                items: ["installation-guide/advanced/ssl/ssl",
                    "installation-guide/advanced/ssl/ssl-server",
                    "installation-guide/advanced/ssl/ssl-web",
                    "installation-guide/advanced/ssl/ssl-agents",
                ]
            },
            "installation-guide/advanced/advanced",
/*            "installation-guide/advanced/load-balance",
            "installation-guide/advanced/architecture",
            "installation-guide/advanced/backup-restore",
            "installation-guide/advanced/db-purge",
            "installation-guide/advanced/services-info",
            "installation-guide/advanced/server-restart-checklist",
*/
        ],
        "Upgrade of BI Hub": [
            "installation-guide/upgrade/upgrade-bihub"
        ],

        "Uninstall BI Hub": ["installation-guide/uninstall-reinstall/uninstall-bihub"]


    },

    "Archived Versions": [ "archived/v2.3.1", "archived/v2.3.0", "archived/v2.2.3", "archived/v2.2.2", "archived/v2.2.1", "archived/v2.2.0", "archived/v2.1.1", "archived/v2.1.0", "archived/v2.0.1", "archived/v2.0.0", "archived/v1.5.5", "archived/v1.5.0", "archived/v1.4.0", "archived/v1.3.0" ],

    adminGuide: {
        "Welcome": ["admin-guide/getting-started/welcome",
            {
                type: "category",
                label: "Prerequisite",
                items: ["admin-guide/getting-started/prerequisite/prerequisite",
                    "admin-guide/getting-started/prerequisite/user-role" ,
                    "admin-guide/multiple-admin-acct",
                    "admin-guide/getting-started/prerequisite/add-new-agent",

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
            "admin-guide/overview", "admin-guide/getting-started/homepage", "admin-guide/getting-started/profile-settings", "admin-guide/getting-started/notifications", "admin-guide/getting-started/initial-setup"            
        ],
        "Agent Manager": [
            "admin-guide/agent-manager/agent-manager-main",
            {
                type: "category",
                label: "Agent Manager",
                items: [            
                    "admin-guide/agent-manager/agent/agent-management",
                    "admin-guide/agent-manager/agent/row-level-security",
                        ],
            },
            "admin-guide/agent-manager/cluster",            
        ],
        "User Manager": ["admin-guide/user-manager/user-manager-main",
            "admin-guide/user-manager/user-management",
            "admin-guide/user-manager/group-management",
        ],
        "Authentication": [
            "admin-guide/authenticate/manage-auth"
        ],
        "Reports": [
            "admin-guide/reports/platform-folder",
            "admin-guide/reports/hub-folder",
            "admin-guide/reports/custom-url",
        ],
        "Audit": ["admin-guide/audit"],
        "User Requests": ["admin-guide/user-requests"],

        "Settings": [
            "admin-guide/settings/settings",
            "admin-guide/settings/general",
            "admin-guide/settings/report",
            "admin-guide/settings/theme",
            "admin-guide/settings/user-dashboard",
            "admin-guide/settings/announcement",
            "admin-guide/settings/email-template",
        ],

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
            "admin-guide/admin-utilities/scheduled-sync-ad",
            "admin-guide/admin-utilities/scheduled-sync-bi",
            "admin-guide/admin-utilities/pre-sync",
            "admin-guide/admin-utilities/troubleshoot",
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
        ],
        "Settings": [
            "user-guide/settings",
        ]
    },
}
