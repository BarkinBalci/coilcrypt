import { VaultCreateHero } from '@/components/ui/vaultCreateHero'
import { VaultUnlockHero } from '@/components/ui/vaultUnlockHero'
import { Metadata } from 'next'
import { authConfig } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import VaultComponent from '@/components/vault'

export const metadata: Metadata = {
  title: 'Vault',
  description: '',
}

export default async function VaultPage() {
  const session = await getServerSession(authConfig)
  if (!session) {
    redirect('/api/auth/signin')
  }
  return (
    <div>
      <VaultComponent />
    </div>
  )
}
