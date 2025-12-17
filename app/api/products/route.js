import getClientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const q = url.searchParams.get("q") || ""
    const category = url.searchParams.get("category") || ""
    const sex = url.searchParams.get("sex") || ""
    const limit = Number(url.searchParams.get("limit") || 20)
    const client = await getClientPromise()
    const db = client.db()
    const query = {}
    if (q) query.name = { $regex: q, $options: "i" }
    if (category) query.category = category
    if (sex) query.sex = sex
    const items = await db.collection("products").find(query).limit(limit).toArray()
    return NextResponse.json(items)
  } catch (e) {
    return NextResponse.json({ error: "failed" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await getClientPromise()
    const db = client.db()
    const res = await db.collection("products").insertOne(body)
    return NextResponse.json({ insertedId: res.insertedId }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: "failed" }, { status: 500 })
  }
}
