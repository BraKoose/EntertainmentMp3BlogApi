const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        version: "1.0.0",
        title: "EntertainmentMp3 (video and News App) Api",
        description: "API for educational purposes Blog OpenSource to build an android app in my 100Days of Code by <b>Bra Koose's 404 Solutions </b> using NodeJs."

    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            "name": "Auth",
            "description": "Auth endpoints"
        },
        {
            "name": "Admin",
            "description": "Admin endpoints"
        },
        {
            "name": "Posts",
            "description": "Posts endpoints"
        },

        {
            "name": "Profile",
            "description": "User profile endpoints"
        },

    ],
    securityDefinitions: {
        Authorization: {
            type: "apikey",
            name: "Authorization",
            description: "Value Bearer",
            in: "header",
            scheme: "bearer",

        }

    },
    definitions: {
        LoginModel: {
            $email: "admin@entertainmentmp3.com",
            $password:
                "DoBetter$$$2022"
        },
        RegisterModel: {
            $name: "Bra Koose",
            $email: "yourmail@whatevermail.com",
            $password: "AnyPassword123YouWantButNotThis",
        },
        UpdateUserModel: {
            $name: " Bra Koose",
        },
        CategoryModel: {
            $title: "Technology"
        },
        StoryModel: {
            $category: "909000d0d90d0f9f0f9f0",
            $title: "Ghana Gets $1 Billion Pledge From Banks to Spur Finances",
            $body: `International banks have pledged to lend Ghana $1 billion for budget purposes and to boost central bank reserves as the country seeks to cut its fiscal deficit and stabilize the currency.

            The West African nation raised $750 million through syndicated loans with the participation of about eight African and European banks and $250 million from multilateral lenders, according to two people familiar with the transaction, who didn’t want to be identified because the deal is not yet public. Standard Bank Group Ltd., Standard Chartered Plc and Rand Merchant Bank Ltd. led the arrangements.  `
        },
        VideoModel: {
            $videoId: "wsNfPQ9lqcU",
            $title: "Ghana Tech Summit 2020 Recap Virtual",
        },
        CommentModel: {
            $story: "ppsoddpdpdppdodoppdoo990393",
            $body: "Welcome back Koose Blogs",
        },
        VerifyEmailModel: {
            $code: 909090
        },
        ChangePasswordModel: {
            $oldPassword: "YourPassword123",
            $newPassword: "NewPassword#9090"
        },
        ForgotPasswordModel: {
            $email: "koose@gmail.com"
        },
        ResetPasswordModel: {
            $email: "koose@gmail.com",
            $code: 9999999,
            $newPassword: "HeyPassword90@"
        }
    }
};


const outputFile = "./swagger_output.json"

const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
})