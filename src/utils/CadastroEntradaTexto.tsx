const sessions = [
    {
        id: 1,
        title: 'Insira alguns dados básicos',
        inputText: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email'
            },
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira uma senha'
            },
            {
                id: 4,
                label: 'Repita a senha',
                placeholder: 'Insira uma senha'
            }
        ]
    },
    {
        id: 2,
        title: 'Agora, mais alguns dados sobre você:',
        inputText: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Insira seu endereço'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira seu número'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira seu complemento'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '(00) 00000-0000'
            }
        ]
    },
    {
        id: 3,
        title: 'Para finalizar, quais são seus planos?',
        inputText: [],
        checkBox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ]
    }
]

export { sessions }