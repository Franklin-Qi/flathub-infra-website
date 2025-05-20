### Criteria

`app/staticfiles/manual_verifications.json` contains a manually created
mapping of app-id and the corresponding domain which will be used for
website based verification.

Criteria to add app ids to this mapping: 

1. The app-id followed **all** rules listed in https://docs.flathub.org/docs/for-app-authors/requirements#application-id
at the time of submission and at the time of performing the verification.

2. The app developer provided a valid reason via a public issue on why
they cannot perform website based verification. 

3. The developer provided some definitive proof that they control
at least parts of the domain (eg. a subdomain) via a public issue.
