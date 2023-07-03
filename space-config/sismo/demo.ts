import { initAppDataSource } from "../../src/libs/user-store/postgres-user-store/initAppDataSource";
// add an images folder in your space folder if you would like Sismo to host your images
import { AuthType } from "@sismo-core/sismo-connect-server";
import { SpaceConfig } from "../types";

export const sismoConfigDemo: SpaceConfig = {
  metadata: {
    slug: "sismo",
    name: "Sismo",
    description:
      "Sismo enables users to selectively disclose personal data to apps with Sismo Connect (SSO) and ZK Badges (SBTs). Get the most of your data.",
    profileImage: "space_sismo_pfp_400x400.png",
    coverImage: "space_sismo_cover_1740x540.png",
    socialLinks: [
      {
        type: "link",
        link: "https://www.sismo.io/",
      },
      {
        type: "twitter",
        link: "https://twitter.com/Sismo_eth",
      },
      {
        type: "discord",
        link: "https://discord.com/invite/sismo",
      },
      {
        type: "github",
        link: "https://github.com/sismo-core",
      },
    ],
  },
  apps: [
    {
      type: "zkTelegramBot",
      metadata: {
        name: "Sismo Builders Group Invitation",
        slug: "telegram",
        description:
          "Join our private Telegram Group ‘Sismo Builders’ - available to all members of the Sismo Community.",
        image: "sismoapps_tg_zk_bot_1014x720.png",
        tags: ["Telegram"],
        ctaText: "Join our Telegram Group",
      },
      sismoConnectRequest: {
        appId: "0xd21d9ab6eaf8bcc16eff8d9a76764eab",
        claimRequests: [{ groupId: "0x1cde61966decb8600dfd0749bd371f12", value: 15 }],
        impersonateAddresses: ["telegram:dhadrien:1234", "dhadrien.eth"],
      },
      templateConfig: {
        telegramGroupId: "-1001658867707",
        telegramInviteLink: "https://t.me/+MJxmxpCwKg82M2I0",
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Newsletter",
        slug: "newsletter",
        description: "Register your email address to receive the Sismo newsletter - open to all.",
        image: "sismoapps_newletter_1014x720.png",
        ctaText: "Subscribe to the Newsletter",
        tags: ["Newsletter"],
      },
      sismoConnectRequest: {
        authRequests: [
          { authType: AuthType.VAULT },
          { authType: AuthType.TWITTER, isSelectableByUser: true },
          { authType: AuthType.GITHUB, isOptional: true },
        ],
        appId: "0xe083ec4268d2c75e41ec6e08b4373882",
      },
      templateConfig: {
        fields: [
          {
            type: "short-text",
            label: "Email",
            isRequired: true,
          },
        ],
        congratulationsMessage: {
          title: "Congratulations",
          description: "You will now receive our Sismo Newsletter 💜",
        },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1Z61ZMWOFhXhp8rt2T6ewpFRMR_CtF0XL6sBIUz4KeQQ",
          },
        },
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Space Feedback",
        slug: "space-feedback",
        description:
          "Provide feedback to help us improve your Sismo Space experience and become a Sismo Contributor Level 1 - open to Gitcoin Passport holders.",
        image: "sismoapps_feedback_1014x720.png",
        tags: ["Feedback"],
        ctaText: "Give Feedback",
      },
      sismoConnectRequest: {
        appId: "0xc429ae9dc0e1fea6591244cdc70ee626",
        authRequests: [
          { authType: AuthType.VAULT },
          { authType: AuthType.TWITTER, isSelectableByUser: true },
        ],
        claimRequests: [{ groupId: "0x1cde61966decb8600dfd0749bd371f12", isOptional: true }],
        impersonateAddresses: [
          "twitter:VitalikButerin:423423",
          "0x85ff01cff157199527528788ec4ea6336615c989",
        ],
      },
      templateConfig: {
        fields: [
          {
            type: "short-text",
            label: "What is your favourite app?",
            isRequired: true,
          },
          {
            type: "short-text",
            label: "Why is it your favourite app?",
            isRequired: true,
          },
          {
            type: "short-text",
            label: "Have you encountered any difficulties while using Spaces?",
            isRequired: true,
          },
          {
            type: "short-text",
            label: "What improvements would make your experience with Spaces even better?",
            isRequired: true,
          },
          // Need to implement the number input
          // {
          //   type: "number",
          //   label: "How easy was it to access this form?",
          //   isRequired: true,
          // },
        ],
        congratulationsMessage: {
          title: "Thank you",
          description: "Your feedback will help Sismo a lot 💜",
        },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1VBYLvo6x1R34kPhr9DVxYmNx6uzm_FtHczsbaDL-7dU",
          },
        },
      },
      options: {
        startDate: new Date("2023-05-12T18:00"),
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Alpha Tester",
        slug: "alpha-tester",
        description:
          "Register to become a Sismo Alpha Tester - open to Ethereum Power Users & ENS Domains Holders.",
        image: "sismoapps_alpha_tester_1014x720.png",
        tags: ["Alpha"],
        ctaText: "Become an Alpha Tester",
      },
      sismoConnectRequest: {
        appId: "0x7cef438f591d7b391a3eae11b2bd7868",
        authRequests: [
          { authType: AuthType.VAULT },
          { authType: AuthType.TWITTER, isSelectableByUser: true },
        ],
        claimRequests: [
          { groupId: "0x4ad1cfd0eb55f578e7690ecd06aa250b" },
          { groupId: "0x8b64c959a715c6b10aa8372100071ca7" },
        ],
        impersonateAddresses: [
          "twitter:VitalikButerin:423423",
          "0x74ce5c3cab7bea5fe742a6636101f42f66909475",
          "0xff9a11ceca9f3f96e661cc549962984d770b615c",
        ],
      },
      templateConfig: {
        fields: [
          {
            type: "short-text",
            label: "Email",
            isRequired: false,
          },
        ],
        congratulationsMessage: {
          title: "Thank you",
          description: "We hope to see you at our future testing session 💜",
        },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1WF3taIR9qy1mAFOKhwZRQKeIBMfoxib7uMlXa_zV3-s",
          },
        },
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Contributors' Anon Wall",
        slug: "anon-wall",
        description:
          "Write a public message on the Sismo Contributors' Anon Wall - open to Sismo Contributors.",
        tags: ["Feedback"],
        image: "sismoapps_anon_wall_1014x720.png",
        ctaText: "Publish on Contributors' Anon Wall",
      },
      sismoConnectRequest: {
        appId: "0x90db0519f15b523cd41bc3557f6d6b91",
        claimRequests: [
          { groupId: "0xe9ed316946d3d98dfcd829a53ec9822e", value: 1, isSelectableByUser: true },
        ],
        impersonateAddresses: [
          "twitter:VitalikButerin:423423",
          "0x0b5c7dc2181fa147ec439fd5a158e3012f9449ea",
        ],
      },
      templateConfig: {
        fields: [
          {
            type: "short-text",
            label: "What would you like to tell us?",
            isRequired: true,
          },
        ],
        congratulationsMessage: {
          title: "Thank you for your message",
          description: "It will be forever published on the Sismo Contributors' Anon Wall 💜",
        },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1-sb-qxoicB6OKF_ERE8HCYlEA8CQHBYU3M9dQNksML4",
          },
        },
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Events",
        slug: "event",
        description: "Pre-register to the future Sismo events - open to Sismo Contributors.",
        tags: ["Event"],
        image: "sismoapps_sismo_events_1014x720.png",
        ctaText: "Pre-register to Sismo events",
      },
      sismoConnectRequest: {
        appId: "0xb3a074e124ff04ee0d703b528bfd5f4d",
        authRequests: [{ authType: AuthType.VAULT }],
        claimRequests: [
          { groupId: "0xe9ed316946d3d98dfcd829a53ec9822e", value: 1, isSelectableByUser: true },
        ],
        impersonateAddresses: ["0x0b5c7dc2181fa147ec439fd5a158e3012f9449ea"],
      },
      templateConfig: {
        userSelection: { type: "FCFS", maxNumberOfUsers: 100 },
        fields: [
          {
            type: "short-text",
            label: "Email",
            isRequired: true,
          },
        ],
        congratulationsMessage: {
          title: "Congratulations",
          description: "We hope to see you at our future events 💜",
        },
        failedMessage: {
          title: "Sorry, too late this time 😕",
          description: "Stay in touch for the next one 💜",
        },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1XTLPEOM0RL8WpjMm1dXYNpkYq3Wk1G1K7Jk-RntqfjA",
          },
        },
      },
    },
    {
      type: "zkForm",
      metadata: {
        name: "Sismo Swag Lottery",
        slug: "swag",
        description:
          "Register to have a chance to be one of 10 lucky winners to get Sismo swag - open to Sismo GitHub Contributors.",
        tags: ["Swag"],
        image: "sismoapps_swag_lotery_1014x720.png",
        ctaText: "Participate in the Swag Lottery",
      },
      sismoConnectRequest: {
        appId: "0x4f7fef07fcdce0a81e8f2ea14e8ea6c0",
        authRequests: [{ authType: AuthType.VAULT }],
        claimRequests: [{ groupId: "0xd138c33e8a6a450336a6c5dda990cf95" }],
        impersonateAddresses: ["github:Baoufa"],
      },
      templateConfig: {
        fields: [
          {
            type: "short-text",
            label: "Email",
            isRequired: true,
          },
        ],
        congratulationsMessage: {
          title: "Fingers crossed!",
          description: "We hope to have you as a lucky winner 💜 ",
        },
        userSelection: { type: "Lottery", maxNumberOfEntries: null, numberOfWinners: 10 },
        output: {
          destination: {
            type: "google_sheet",
            spreadsheetId: "1GaSpQ3-SO_mWDreh97Nri2YSF5LeRYKUEuUjImF8Cxk",
          },
        },
      },
      options: {
        startDate: new Date("2023-05-12T18:00"),
      },
    },
  ],
};