import crypto from "crypto"

const SECRET = process.env.SIGNATURE_SECRET

function sign(value) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(value)
    .digest("hex")
}

export function createSessionCookie(userId) {
  const signature = sign(userId)
  return `${userId}.${signature}`
}