import React from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const t = useTranslations('header')
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => (window.location.href = `/en${pathname}`)} className="px-2 py-1">{t('lang.en')}</button>
      <button onClick={() => (window.location.href = `/ar${pathname}`)} className="px-2 py-1">{t('lang.ar')}</button>
    </div>
  )
}
  )
}
