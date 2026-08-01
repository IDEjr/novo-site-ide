import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

let client: Promise<Payload> | null = null

export function getPayloadClient() {
  if (!client) {
    client = getPayload({ config })
  }
  return client
}
