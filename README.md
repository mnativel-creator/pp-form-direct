# Provence Promotion — Site = Formulaire

## Principe
- Route `/` : **redirection** immédiate vers le Google Form public (le site EST le formulaire).
- Route `/embed` : **plein écran** dans une iframe (fallback si tu préfères rester sur ton domaine).

## Déploiement (sans terminal)
1. Pousse ce repo sur GitHub (ou “New → Import” dans Vercel).
2. Sur vercel.com → **Add New Project** → sélectionne le repo → **Deploy**.
3. La home `/` redirigera directement vers le Google Form.
4. Option : si tu veux l’iframe, utilise l’URL `https://tondomaine.vercel.app/embed`.

## Modifier l’URL du formulaire
- Change `FORM_URL` dans `app/page.tsx` et `app/embed/page.tsx`.


