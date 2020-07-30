module.exports = {
    sideBar: {
        "Getting Started": ["getting-started/intro"]
    },

    installationGuide: {
        "Getting Started": 
    [
            "installation-guide/welcome",      
        {
            "Supported Platforms": [
                "installation-guide/supported-platforms/sys-req",
                "installation-guide/supported-platforms/browser-compatibility",
                "installation-guide/supported-platforms/db-web"],
        },
        "installation-guide/download-bihub",
        "installation-guide/install-pre"
    ],
           
        
        "Installation of BI Hub for Windows Platform": [ 
            "installation-guide/install-bihub-windows/install",
        
    
        {
            type: "category",
            label: "Server Installation",
            items: [ "installation-guide/install-bihub-windows/server/install",
            "installation-guide/install-bihub-windows/server/post-config",
            "installation-guide/install-bihub-windows/server/troubleshooting",
            ],
           
        },
        {
            type: "category",
            label: "Server Configuration",
            items: [
                "installation-guide/install-bihub-windows/server/config/config",
                "installation-guide/install-bihub-windows/server/config/config-tab",
                "installation-guide/install-bihub-windows/server/config/instances-tab"

            ]

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
                "installation-guide/install-bihub-windows/agents/config"]
        },
        {
            type: "category",
            label: "BI Platform Configuration",
            items: [
                "installation-guide/install-bihub-windows/agents/bi-platform-config/bobj",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/file-bi",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/looker",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/power-bi",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/qliksense",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/sac",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/sharepoint",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/ssrs",
                "installation-guide/install-bihub-windows/agents/bi-platform-config/tableau"]
        },
    
    ],
     
    },

    adminGuide: {
        "Welcome": ["admin-guide/getting-started/welcome"],
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

