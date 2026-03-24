# 📧 Setup Resend - Guide complet

Resend est utilisé pour envoyer les emails:

- Notification admin quand un message est reçu
- Email de bienvenue newsletter
- Réponses aux visiteurs

## Step 1: Créer un compte Resend

1. Aller à https://resend.com
2. Cliquer "Sign Up"
3. S'enregistrer avec Email
4. Vérifier l'email
5. Créer un mot de passe fort

## Step 2: Créer une API Key

1. Dashboard Resend → Aller à **API Keys** (ou Settings)
2. Cliquer **"Create API Key"**
3. Donner un nom: `manoutech-next` (ou ton choix)
4. ✅ Cliquer Create
5. **Copier la clé** (commence par `re_`)
6. ⚠️ Sauvegarder quelque part! (Tu ne pourras pas la voir après)

### ⚠️ Sécurité

- **NE JAMAIS** partager ta clé API
- **NE JAMAIS** la commit dans git
- La garder dans `.env.local` (pas versionnée)

## Step 3: Ajouter un domaine (optionnel mais recommandé)

Par défaut, Resend utilise `onboarding@resend.dev`.

Pour utiliser ton propre domaine:

1. Dashboard → **Domains**
2. Cliquer **"Add Domain"**
3. Entrer ton domaine (ex: `hello@manoutech.com`)
4. Suivre les instructions DNS
5. Une fois vérifié, tu peux l'utiliser

**Pour maintenant**, on utilise le domaine par défaut.

## Step 4: Configurer `.env.local`

Ajouter/mettre à jour:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com
```

**Remplacer:**

- `re_xxxxx` → ta clé API Resend
- `your-email@example.com` → ton email (reçoit les notifications)

Exemple:

```bash
RESEND_API_KEY=re_8Nx4z3qPp7kLmNvWxYaB
ADMIN_EMAIL=emmanuel@manoutech.com
```

## Step 5: Tester l'envoi d'email

Créer un test file:

```typescript
// lib/test-resend.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function testEmail() {
  try {
    const result = await resend.emails.send({
      // IMPORTANT: Utilise `onboarding@resend.dev` pour les tests si tu n'as pas encore vérifié ton domaine.
      // Une fois ton domaine vérifié, tu pourras utiliser une adresse comme `contact@manoutech.com`.
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL!,
      subject: "Test Email - Manoutech Admin",
      html: `
        <h2>Test Email</h2>
        <p>Si tu reçois ce message, Resend fonctionne! 🎉</p>
        <p>L'admin system est prêt à recevoir des notifications.</p>
      `,
    });

    console.log("✅ Email sent!", result);
    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return false;
  }
}
```

Puis en CLI:

```bash
node -r ts-node/register lib/test-resend.ts
```

Tu devrais recevoir un email à `ADMIN_EMAIL`.

## Step 6: Types d'emails utilisés

### 1. Notification Contact Form

Quand quelqu'un remplit le formulaire de contact:

```
FROM: contact@manoutech.com
TO: ADMIN_EMAIL
SUBJECT: Nouveau message de [Nom]

Contenu: Email du visiteur + lien vers admin panel
```

### 2. Newsletter Welcome

Quand quelqu'un s'abonne:

```
FROM: hello@manoutech.com
TO: email du visiteur
SUBJECT: Bienvenue sur Manoutech Newsletter

Contenu: Message de bienvenue
```

### 3. Admin Reply (Manuel)

L'admin peut répondre directement par email.

## ✅ Checklist

- [ ] Compte Resend créé
- [ ] API Key généré
- [ ] API Key copié dans `.env.local`
- [ ] `ADMIN_EMAIL` configuré
- [ ] Test email envoyé avec succès
- [ ] Email reçu dans ta boîte

## 💡 Notes importantes

### Email FROM

Par défaut, pour les tests et sans domaine vérifié, tu dois utiliser `onboarding@resend.dev`.

Une fois ton domaine vérifié (ex: `manoutech.com`), tu pourras utiliser des adresses personnalisées :

- `contact@manoutech.com` → Pour les notifications du formulaire de contact.
- `hello@manoutech.com` → Pour la newsletter.

### Quotas

- Plan gratuit: 100 emails/jour
- Plan pro: Emails illimitées
- Suffisant pour un portfolio!

### Alternatives à Resend

Si tu veux changer:

- SendGrid
- Mailgun
- AWS SES
- Brevo (ex-Sendinblue)

Mais Resend c'est le plus simple pour Next.js.

## 🔗 Liens utiles

- Docs Resend: https://resend.com/docs
- API Reference: https://resend.com/docs/api-reference/emails/send
- Pricing: https://resend.com/pricing

## 🆘 Troubleshooting

### Erreur: "Invalid API Key"

→ Vérifier que la clé est complète et correcte dans `.env.local`

### Erreur: "from must be a valid email"

→ Utiliser un email de ton domaine ou `onboarding@resend.dev`

### Email non reçu

→ Vérifier le dossier spam/junk
→ Vérifier que `ADMIN_EMAIL` est correct

### Quota dépassé

→ Upgrade plan gratuit vers pro
→ Ou réduire la fréquence d'emails

---

**Une fois configuré, on teste avec:**

1. `yarn dev`
2. Soumettre un message de contact
3. Vérifier que tu reçois l'email
4. Aller à `/admin/login`
