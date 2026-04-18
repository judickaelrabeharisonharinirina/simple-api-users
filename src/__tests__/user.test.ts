import { describe } from "node:test"
import app from "../index"
import request from "supertest"

describe("API Users", ()=> {
// Test GET
it("GET /api/users", async() => {
    const res=await request(app).get("/api/users");
    expect(res.status).toBe(200);
    });
})