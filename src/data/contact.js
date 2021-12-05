import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web'

export const contact = [
  {
    icon: <AlternateEmailIcon />,
    type: "text",
    id: "emailBox",
    label: "e-mail"
  },
  {
    icon: <AlternateEmailIcon />,
    type: "text",
    id: "emailConfirmBox",
    label: "e-mail (visible)"
  },
  {
    icon: <LockOpenIcon />,
    type: "password",
    id: "passwordBox",
    label: "Mot de passe"
  },
  {
    icon: <LockOpenIcon />,
    type: "password",
    id: "passwordConfirmBox",
    label: "Confirmation du Mot de passe"
  },
  {
    icon: <StorefrontIcon />,
    type: "text",
    id: "commerceBox",
    label: "Nom du commerce"
  },
  {
    icon: <AddLocationAltIcon />,
    type: "text",
    id: "adresseBox",
    label: "Adresse"
  },
  {
    icon: <AddLocationAltIcon />,
    type: "text",
    id: "adresseVisibleBox",
    label: "Adresse (visible)"
  },
  {
    icon: <PhoneIcon />,
    type: "number",
    id: "telBox",
    label: "Telephone"
  },
  {
    icon: <WebIcon />,
    type: "text",
    id: "webBox",
    label: "Web site"
  }
]