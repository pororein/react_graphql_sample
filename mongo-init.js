conn = new Mongo();
db = conn.getDB("review_system");

db.createUser({
    user: "review_system_admin",
    pwd: "rsa",
    roles: [{
        role: "readWrite",
        db: "review_system"
    }]
});

db.createCollection("users");
db.createCollection("projects");
db.createCollection("check_lists");
db.createCollection("review_lists");
db.createCollection("pointouts");

db.users.insert([{
        eMailAddress: "admin@example.com",
        password: "test",
        firstName: "test",
        lastName: "admin",
        role: 0
    },
    {
        eMailAddress: "test@example.com",
        password: "test",
        firstName: "test",
        lastName: "user",
        role: 1
    }
]);

db.projects.insert({
    name: "testProject",
    members: [
        {
            id: 1,
            role: 0
        },
        {
            id: 2,
            role: 1
        }
    ],
    reviewList: [
        1
    ],
    scope: 0
});

db.check_lists.insert({
    title: "testCheckList",
    items: [
        {
            title: "スペルミスチェック",
            detail: "誤字脱字がないか確認すること",
            performed: false
        },
        {
            title: "項目チェック",
            detail: "ドキュメントに記載されている項目に漏れがないこと",
            performed: true
        }
    ]
});

db.pointouts.insert([
    {
        title: "スペルミス",
        targetPosition: "10行目",
        detail: "aじゃなくてe",
        expand: false
    },
    {
        title: "項目漏れ",
        targetPosition: "10行目",
        detail: "必須項目が足りていない",
        expand: true
    }
]);

db.review_lists.insert({
    title: "testReview",
    documentPath: "http://hogehoge.hugahuga.com/design.xlsx",
    tags: [
        "test",
        "testProject"
    ],
    checkListIds: [
    ],
    pointOutList: [],
    reviewerList: [],
    revieweeList: [],
    participantList: [],
    status: 0,
    scope: 0,
    creator: ''
});