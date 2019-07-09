const initialState = {
    reserves: [
        {
            id: "420nfi08",
            eventDate: "27.03.98",
            eventTime: "18.00",
            quantity: 1,
            visitors: [
                {
                    id: "4930u8rjt7u8i8fh3",
                    firstName: "Чалов",
                    lastName: "Даниил",
                }
            ],
            phone: 89518710640,
            email: "gimbarrkik2@gmail.com",
            status: "yes",
        }
    ],
    dishes:[
        {
            id: "4930u8rfh3",
            name: "Шаурма",
            smallDescription: "Вкусная и дешёвая шавуха",
            fullDescription: "Блюдо отлично утоляет голод. Очень вкусное, но вохножны отравления)",
            recipes: [
                {
                    id: "49gdh0u8rfh3",
                    ingredient: "лаваш",
                    amount: 1,
                    unit: "экземпляр",
                },
                {
                    id: "4930bgffdrfh3",
                    ingredient: "мясо курицы",
                    amount: 200,
                    unit: "грамм",
                }
            ],
            urlOfImage: "someString"
        }
    ]
}

export default initialState
