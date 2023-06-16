import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '../../../backend/core/entry-points/api/server'

export default defineNuxtPlugin(() => {
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:2021/trpc',
      }),
    ],
  })

  return {
    provide: {
      client,
    },
  }
})