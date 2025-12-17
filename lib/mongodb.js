import { MongoClient } from "mongodb"

let cachedClientPromise = null

function getClientPromise() {
  if (cachedClientPromise) {
    return cachedClientPromise
  }

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("MONGODB_URI is not set")
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    cachedClientPromise = global._mongoClientPromise
  } else {
    const client = new MongoClient(uri)
    cachedClientPromise = client.connect()
  }

  return cachedClientPromise
}

export default getClientPromise
