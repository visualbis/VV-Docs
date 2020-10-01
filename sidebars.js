module.exports = {
    sideBar: {
        "Getting Started": ["getting-started/intro"],
    },

    installationGuide: {
        "Getting Started": [
            "installation-guide/welcome",      
        {
            "Supported Platforms": [
                "installation-guide/supported-platforms/sys-req",
                "installation-guide/supported-platforms/browser-compatibility",
                "installation-guide/supported-platforms/db-web"],
        },
        "installation-guide/download-bihub",
        "installation-guide/install-pre",
    ],
    "Installation of BI Hub for Windows Platform": [ 
        "installation-guide/install-bihub-windows/install",
    {
        type: "category",
        label: "Server Installation",
        items: [ "installation-guide/install-bihub-windows/server/install",
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
            "installation-guide/install-bihub-windows/agents/port",
            "installation-guide/install-bihub-windows/agents/config",
            {
                type: "category",
                label: "BI Platform Agent Configuration",
                items: [
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/bobj",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/tableau",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/qliksense",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/power-bi",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/file-bi",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/ssrs",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/sac",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/sharepoint",
                    "installation-guide/install-bihub-windows/agents/bi-platform-config/looker",
                    ]        
            },
            "installation-guide/install-bihub-windows/agents/post-config",
        ]
    },
    "installation-guide/install-bihub-windows/synch-bihub-platforms",

    
/*        {
    },
*/


    ],
    "Upgrade Trial Version": [
        "installation-guide/upgrade-trial/upgrade-trial"
    ],

    "Moving BI Hub instance": ["installation-guide/move-instance/move-instance"],
    "Uninstall and Reinstall": ["installation-guide/uninstall-reinstall/uninstall-bihub","installation-guide/uninstall-reinstall/reinstall-bihub"]
    

    },

/*    platformConfig: {
        "BI Platform Agent Configuration": [
            "bi-platform-config/bobj", 
            "bi-platform-config/bobj-rest-bi", 
            "bi-platform-config/tableau",
            "bi-platform-config/qliksense",
            "bi-platform-config/power-bi",
            "bi-platform-config/file-bi",
            "bi-platform-config/ssrs",
            "bi-platform-config/microstrategy",
            "bi-platform-config/sac",
            "bi-platform-config/sharepoint",
            "bi-platform-config/looker"
        ]
    },
*/

    adminGuide: {
        "Welcome": ["admin-guide/getting-started/welcome", "admin-guide/getting-started/overview"],        
        "Admin Functions": [
        {    
            type: "category",
            label: "Integrating BI Hub with BI Platforms",
            items: [
                "admin-guide/admin-functions/integrate-bihub-platform-msad/admin-functions",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/integrate",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/add-new-agent",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/synch",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/add-users-bi-platform",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/add-ms-ad",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/edit-agent-instance",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/logfiles-download",              
                "admin-guide/admin-functions/integrate-bihub-platform-msad/edit-msad-bihub",
                "admin-guide/admin-functions/integrate-bihub-platform-msad/del-msad-bihub"     
            ]
        },
        {
            type: "category",
            label: "Maintenance of BI Hub",
            items: [
                "admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub",
                "admin-guide/admin-functions/maintenance-bihub/add-new-user",
                "admin-guide/admin-functions/maintenance-bihub/add-reports-existing-user",
                "admin-guide/admin-functions/maintenance-bihub/edit-bihub-users",
                "admin-guide/admin-functions/maintenance-bihub/edit-password-authenticated-user",
                "admin-guide/admin-functions/maintenance-bihub/del-user",
                "admin-guide/admin-functions/maintenance-bihub/configure-smart-search"
        ]
        },
        {
            type: "category",
            label: "Reports",
            items: [
                "admin-guide/admin-functions/reports/reports",
                "admin-guide/admin-functions/reports/hub-folders",
                "admin-guide/admin-functions/reports/upload-metadata-csv",
                "admin-guide/admin-functions/reports/report-details",
                "admin-guide/admin-functions/reports/report-thumbnails",
                "admin-guide/admin-functions/reports/reports-history",
            ],
    
        },
        "admin-guide/admin-functions/request-access-reports-admin",
        "admin-guide/admin-functions/custom-url",             
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
        "admin-guide/admin-functions/audit",   
        {
            type: "category",
            label: "Multiple Instances of BI Hub",
            items: [
                "admin-guide/admin-functions/multiple-instances/mult-instances",
                "admin-guide/admin-functions/multiple-instances/create-cluster",
                "admin-guide/admin-functions/multiple-instances/synch-users-reports",
                "admin-guide/admin-functions/multiple-instances/modify-prim-instance",
                "admin-guide/admin-functions/multiple-instances/delete-instance-cluster",
            ]
        }, 
        "admin-guide/admin-functions/profile-settings"

    ], //End of Admin Functions
    
    "Power Users": [
                "admin-guide/power-users/power-users",
                "admin-guide/power-users/dashboard-admin",

    ],

/*
        "Agent Manager": [
            {
                type: "category",
                label: "Add Agent",
                items: ["admin-guide/agent-manager/add-agent/bobj"]
            },
            {
                type: "category",
                label: "Agent Manager",
                items: [
                    "admin-guide/agent-manager/agent-manager/edit",
                    "admin-guide/agent-manager/agent-manager/delete",
                    "admin-guide/agent-manager/agent-manager/synch-users",
                    "admin-guide/agent-manager/agent-manager/synch-reports"
                                ],
            },
            {
                type: "category",
                label: "Cluster Management",
                items: [
                    "admin-guide/agent-manager/cluster-management/add-cluster",
                    "admin-guide/agent-manager/cluster-management/edit-cluster",
                    "admin-guide/agent-manager/cluster-management/del-cluster"
                ]
    
            }
        ], 
*/    
"Multiple Administrator Account": [
    "admin-guide/multiple-admin/multiple-admin-acct"
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
    "admin-guide/admin-utilities/scheduled-synch-ad",
    "admin-guide/admin-utilities/scheduled-synch-bi"
],

"License Details": [
    "admin-guide/license/license"
]

},

    userGuide: {
        "Getting Started": [
            "user-guide/onboard",
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

