// Options type of input in HTML4.0
type InputNameAutocompleteType = 'name' | 'given-name' | 'additional-name' | 'family-name';
type InputEmailAutocompleteType = 'email';
type InputAddressAutocompleteType =
  'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-level1'
  | 'address-level2'
  | 'postal-code'
  | 'country';
type InputPhoneAutocompleteType = 'tel';
type InputUsernameAutocompleteType = 'username';
type InputPasswordAutocompleteType = 'current-password' | 'new-password';


export type NzmInputAutocompleteType =
  InputNameAutocompleteType
  | InputEmailAutocompleteType
  | InputAddressAutocompleteType
  | InputPhoneAutocompleteType
  | InputUsernameAutocompleteType
  | InputPasswordAutocompleteType;
