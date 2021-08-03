process.env.NODE_ENV = "test"

const request = require("supertest")

const app = require("../app")

let items = require('../fakeDB')

let item = { 
    name: "testitem",
    price: 100 
}

/// write a before each and after each

beforeEach(async () => {
    /// should push our test item to the array

    items.push(item)
})

afterEach(async () => {
    /// should reset the items array to nothing

    items = []
})

/// write a test for each route

describe("GET /items", async function(){
    test("Fetches list of items", async function(){
        const response = await request(app).get(`/items/${item.name}`)
        const { items } = response.body
        expect(response.statusCode).toBe(200)
        expect(response.body.item).toEqual(item)
    })
})