let request = require("supertest")
let app = require("../server")

describe("GET /contacts", () => {
    it("เรียกดูลิสรายชื่อ", (done) => {
        request(app).get("/contacts")
            .expect(200)
            .then((res) => {
                let contacts = res.body
                expect(contacts).toHaveLength(12)
                let contact = contacts[0]
                expect(contact).toHaveProperty("id")
                expect(contact).toHaveProperty("name")
                expect(contact).toHaveProperty("email")
                expect(contact).toHaveProperty("phone")
                expect(contact).toHaveProperty("url")
                expect(contact).toHaveProperty("notes")
                done()


            })
    })
})