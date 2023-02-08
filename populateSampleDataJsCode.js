db.once('open', async () => {
    console.log('Mongoose connected successfully')

    const data = [
        user.create({ 
            name: "test1",
            email: "test1@mail.com"
        }),
        user.create({ 
            name: "test2",
            email: "test2@mail.com"
        }),
        user.create({ 
            name: "test3",
            email: "test3@mail.com"
        }),
        user.create({ 
            name: "test4",
            email: "test4@mail.com"
        }),
        user.create({ 
            name: "test5",
            email: "test5@mail.com"
        }),
        user.create({ 
            name: "test6",
            email: "test6@mail.com"
        }),
        user.create({ 
            name: "test7",
            email: "test7@mail.com"
        }),
        user.create({ 
            name: "test8",
            email: "test8@mail.com"
        }),
        user.create({ 
            name: "test9",
            email: "test9@mail.com"
        }),
        user.create({ 
            name: "test10",
            email: "test10@mail.com"
        }),
        user.create({ 
            name: "test11",
            email: "test11@mail.com"
        }),
        user.create({ 
            name: "test12",
            email: "test12@mail.com"
        }),
        user.create({ 
            name: "test13",
            email: "test13@mail.com"
        }),
        user.create({ 
            name: "test14",
            email: "test14@mail.com"
        }),
        user.create({ 
            name: "test15",
            email: "test15@mail.com"
        }),
        user.create({ 
            name: "test16",
            email: "test16@mail.com"
        }),
        user.create({ 
            name: "test17",
            email: "test17@mail.com"
        }),
        user.create({ 
            name: "test18",
            email: "test18@mail.com"
        })
    ]

    const data2 = await Promise.all(data)

    console.log(data2)
})
