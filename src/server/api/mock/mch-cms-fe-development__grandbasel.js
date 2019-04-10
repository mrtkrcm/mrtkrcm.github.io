/* eslint-disable quote-props, quotes, no-template-curly-in-string, max-len */
module.exports = {
  "endpoints":{
    "enabled":false
  },
  "hibernate":{
    "generate_statistics":false,
    "show_sql":false
  },
  "json":{
    "error":{
      "showallfields":true
    }
  },
  "liquibase":{
    "changeLog":"classpath:com/dminc/mch/config/liquiBaseChangeLog.xml",
    "enabled":false
  },
  "logging":{
    "level":{
      "com":{
        "dminc":"DEBUG",
        "zaxxer":"INFO"
      }
    },
    "pattern":{
      "console":"[%thread] %-5level %logger{36} - %msg%n"
    }
  },
  "management":{
    "add-application-context-header":false
  },
  "mch":{
    "cms":{
      "acceptedRoles":[
        "cmsUser"
      ],
      "sections":{
        "apps":{
          "description":"Edit the app's content",
          "disabled":true,
          "legacy":true,
          "position":2,
          "roles":[
            "cmsPagesAppEditor"
          ],
          "title":"Apps",
          "url":"/admin/showcontentsetting"
        },
        "catalog":{
          "description":"Manage galleries' artworks",
          "disabled":true,
          "legacy":true,
          "position":9,
          "roles":[
            "cmsCatalogEditor"
          ],
          "title":"Catalog",
          "url":"/admin/showmngr"
        },
        "events":{
          "description":"Manage events and add new ones",
          "legacy":true,
          "position":3,
          "roles":[
            "cmsEventsEditor"
          ],
          "title":"Event",
          "url":"/admin/events"
        },
        "gap":{
          "description":"Manage gallery applications",
          "disabled":true,
          "legacy":true,
          "position":10,
          "roles":[
            "cmsGapEditor"
          ],
          "title":"Gallery Applications",
          "url":"/admin/pages?type=GALLERY_APPLICATION"
        },
        "medak":{
          "description":"Manage press accreditations",
          "legacy":true,
          "position":13,
          "roles":[
            "cmsMedakEditor"
          ],
          "title":"Media accreditation",
          "url":"/arbs/"
        },
        "news":{
          "description":"Publish & manage news articles",
          "legacy":true,
          "position":8,
          "roles":[
            "cmsNewsEditor"
          ],
          "title":"News",
          "url":"/admin/news"
        },
        "onsiteTool":{
          "description":"Onsite tool",
          "legacy":true,
          "position":16,
          "roles":[
            "cmsOnsiteToolEditor"
          ],
          "title":"Onsite tool",
          "url":"/admin/html/admin/onSiteAdmin.html"
        },
        "pages":{
          "description":"Edit the website's content",
          "legacy":true,
          "position":1,
          "roles":[
            "cmsPagesEditor"
          ],
          "title":"Pages",
          "url":"/admin/pages?type=HOME_PAGE"
        },
        "press":{
          "description":"Update the latest press documents",
          "legacy":true,
          "position":4,
          "roles":[
            "cmsPressContentEditor"
          ],
          "title":"Press",
          "url":"/admin/adminpress?type=PRESS_RELEASE"
        },
        "recommendations":{
          "description":"Manage user recommendations",
          "disabled":true,
          "legacy":false,
          "position":12,
          "roles":[
            "cmsRecommendationsEditor"
          ],
          "title":"Recommendations",
          "url":"recommendations"
        },
        "settings":{
          "description":"Show administration and more",
          "legacy":true,
          "position":6,
          "roles":[
            "cmsSettingsEditor"
          ],
          "title":"Settings",
          "url":"/admin/languages"
        },
        "showkit":{
          "description":"Manage galeries' showkit",
          "disabled":true,
          "legacy":true,
          "position":7,
          "roles":[
            "cmsShowkitEditor"
          ],
          "title":"Showkit",
          "url":"/admin/showkitsetting"
        },
        "tools":{
          "description":"Global Modules, Short Links & more",
          "legacy":true,
          "position":5,
          "roles":[
            "cmsToolsEditor"
          ],
          "title":"Tools",
          "url":"/admin/global-modules"
        },
        "vipManager":{
          "description":"VIP Manager dashboard",
          "legacy":true,
          "position":15,
          "roles":[
            "cmsVipManager"
          ],
          "title":"VIP Manager",
          "url":"/admin/html/admin/vip.html"
        },
        "vipRep":{
          "description":"VIP representative dashboard",
          "legacy":true,
          "position":14,
          "roles":[
            "cmsVipRepresentativeManager"
          ],
          "title":"VIP representative",
          "url":"/admin/html/admin/vip.html"
        },
        "vipcards":{
          "description":"Create and manage digital VIP cards",
          "disabled":true,
          "legacy":true,
          "position":11,
          "roles":[
            "cmsVIPCardsEditor"
          ],
          "title":"Digital VIP Cards",
          "url":"/admin/vipcards"
        }
      },
      "theme":"gb"
    },
    "crm":{
      "connectTimeoutMs":360000,
      "crmProductId":"38e922f4-377c-e211-80f2-00155d350211",
      "readTimeoutMs":180000,
      "restDomain":"http://remote-services-proxy:1004",
      "soapDomain":"http://remote-services-proxy:1003",
      "soapEndpoint":"http://remote-services-proxy:1003/MCHCRMDataService.svc",
      "soapPath":"/MCHCRMDataService.svc"
    },
    "domains":{
      "emailBaseUrl":"https://mch-gb-site-test.dminc-intl.com/"
    },
    "fe":{
      "analytics":{
        "facebook-fbPixel":{
          "id":"209959356385624"
        },
        "google-gtm":{
          "id":"GTM-PSNSW2H"
        }
      },
      "cdn":{
        "disabled":false,
        "prefix":"https://d2y1behuj8ib47.cloudfront.net"
      },
      "cloudinary":{
        "apiKey":949933597977335,
        "name":"dqzqcuqf9"
      },
      "cms":{
        "showUnsupportedModules":false
      },
      "errorMessages":{
        "40x":"<h1>Page not found!</h1><p>We are sorry but the page you are looking for does not exist. You could return to the <a href=\"/\">homepage</a>.</p>",
        "50x":"<h1>Sorry, something went wrong.</h1><p>There was a technical problem. Please try again or go back to the <a href=\"/\">homepage</a>.</p>"
      },
      "fairName":"Grand Basel",
      "google":{
        "analytics_id":"UA-103600441-1",
        "maps_key":"AIzaSyAiocwLdHhCOS6Txb3ibfEbktAdwrecwM0"
      },
      "openGraph":{
        "image":"https://res.cloudinary.com/dqzqcuqf9/image/upload/v1546932194/gb-og-image.png"
      },
      "site":{
        "baseUrl":"https://mch-gb-site-test.dminc-intl.com/"
      },
      "theme":"grandbasel",
      "trackJs":{
        "application":"mchmfp-test",
        "token":"e46fb9563cd44dbab295d5a8fbe6ca48"
      },
      "twitter":{
        "access_token_key":"889516472246165505-fN0sB0wbons9bUd7JAPGefe4tm41hbY",
        "access_token_secret":"n9Estq3VuEwBVnACegoHt12CwrUd7iMnqeKsVMS3QdRcM",
        "consumer_key":"7RA4FsflliNReXLfuWE9ptz4F",
        "consumer_secret":"nm9EkSmPZ2VEOfnMEcwDJAMR1N6au2gSOWAwP7AEzK1vnDJc1I"
      },
      "verificationMetaTag":{
        "bing":{
          "id":"3AF1F7E2C44D14F2D9D9F080FB1C8F0B"
        },
        "facebook":{
          "id":"216293312656917"
        },
        "google":{
          "id":"q9PMx_bTe_BGLwtrrd3g0z11J9xNdqVshiVn51Xy3Vs"
        }
      }
    },
    "labels":{
      "Events":{
        "privateInvitation":{
          "defaultValue":"Private Invitation",
          "description":"Private Invitation Label"
        },
        "rsvpPopupKo":{
          "defaultValue":"Decline invitation",
          "description":"Label for the decline button in RSVP popup"
        },
        "rsvpPopupOk":{
          "defaultValue":"Accept invitation",
          "description":"Label for the accept button in RSVP popup"
        },
        "vip":{
          "defaultValue":"VIP",
          "description":"VIP Label"
        }
      },
      "Press":{
        "cancel":{
          "defaultValue":"Cancel",
          "description":"Cancel label"
        },
        "confirm":{
          "defaultValue":"Confirm",
          "description":"Confirm label"
        },
        "in":{
          "defaultValue":"in",
          "description":"In label"
        },
        "upgradeBrowser":{
          "defaultValue":"Notice: \"This website is not optimised for your browser, and some items may not display or perform properly. Please upgrade your browser for a full experience.\"",
          "description":"Upgrade browser label",
          "type":"html"
        }
      },
      "UserAccountMessages":{
        "checkConfirmationEmail":{
          "defaultValue":"Your email is not yet confirmed. Please check your inbox or resend the confirmation email.",
          "description":"Error Message Label"
        },
        "checkInboxConfirmation":{
          "defaultValue":"Please check your inbox in a few moments for the confirmation.",
          "description":"Check Your Inbox Confirmation Label"
        },
        "confirmationEmailResent":{
          "defaultValue":"Confirmation email resent",
          "description":"Confirmation Email Resend Label"
        },
        "resendConfirmationEmail":{
          "defaultValue":"Resend Confirmation Email",
          "description":"Resend Confirmation Action Label"
        }
      },
      "VIPRepresentative":{
        "defaultEmail":{
          "defaultValue":"vip@xxx.com",
          "description":"default email label"
        },
        "title":{
          "defaultValue":"VIP Representative",
          "description":"VIP Representative label"
        }
      }
    },
    "microservices":{
      "url":"http://gateway/grandbasel"
    },
    "service":{
      "news":{
        "url":"http://gateway/grandbasel/admin"
      },
      "pages":{
        "url":"http://gateway/grandbasel/admin"
      },
      "shows":{
        "url":"http://gateway/grandbasel/admin"
      }
    },
    "solr":{
      "host":"grandbasel-solr2"
    }
  },
  "requestDumperFilter":{
    "logger":{
      "enable":true
    }
  },
  "server":{
    "compression":{
      "enabled":true,
      "mime-types":"application/json,application/xml,text/html,text/xml,text/plain"
    },
    "port":8080
  },
  "spring":{
    "datasource":{
      "driver-class-name":"org.mariadb.jdbc.Driver",
      "hikari":{
        "cachePrepStmts":true,
        "maximum-pool-size":8,
        "prepStmtCacheSize":250,
        "prepStmtCacheSqlLimit":2048,
        "useServerPrepStmts":true
      },
      "host":"172.16.127.33",
      "password":"mch",
      "url":"jdbc:mysql://172.16.127.33:3306/${spring.datasource.service-schema}?useUnicode=true&characterEncoding=utf8&createDatabaseIfNotExist=true&verifyServerCertificate=false&useSSL=false&serverTimezone=UTC",
      "username":"mch"
    },
    "jackson":{
      "default-property-inclusion":"non-null",
      "deserialization":{
        "fail-on-unknown-properties":true
      }
    },
    "jmx":{
      "enabled":false
    }
  }
}
