const faker = require("faker");

console.log(faker.datatype.uuid());

console.log(faker.phone.phoneNumber());

const createUser = () =>{
    return {
        password: faker.password.password(),
        email: faker.email.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
};

const createCompany = ()=>({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const newCompany = createCompany();
    const query = {
    user: user,
    company: newCompany,
    };
    res.json(query);
});