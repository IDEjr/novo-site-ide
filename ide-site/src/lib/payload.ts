import config from '@payload-config'
import { getPayload, type Payload } from 'payload'

const globalForPayload = globalThis as typeof globalThis & {
  payload?: Payload
  payloadPromise?: Promise<Payload>
}

export async function getPayloadClient(): Promise<Payload> {
  if (globalForPayload.payload) {
    return globalForPayload.payload
  }

  globalForPayload.payloadPromise ??= getPayload({ config })
  globalForPayload.payload = await globalForPayload.payloadPromise

  return globalForPayload.payload
}
