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
        "installation-guide/install-bihub-windows/server/config",
        "installation-guide/install-bihub-windows/server/config-tab",
        "installation-guide/install-bihub-windows/server/instances-tab",
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
                "admin-guide/admin-functions/integrate-bihub-platform-msad/logfiles-download"      
       
            ]
        },

        ],
        "Dashboard": ["admin-guide/dashboard/new"],
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
    
    },

    userGuide: {
        "Dashboard": ["user-guide/dashboard"]
    },

}

