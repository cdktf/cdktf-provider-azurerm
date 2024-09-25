// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * developer_portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#developer_portal ApiManagementCustomDomain#developer_portal}
  */
  readonly developerPortal?: ApiManagementCustomDomainDeveloperPortal[] | cdktf.IResolvable;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#gateway ApiManagementCustomDomain#gateway}
  */
  readonly gateway?: ApiManagementCustomDomainGateway[] | cdktf.IResolvable;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#management ApiManagementCustomDomain#management}
  */
  readonly management?: ApiManagementCustomDomainManagement[] | cdktf.IResolvable;
  /**
  * portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#portal ApiManagementCustomDomain#portal}
  */
  readonly portal?: ApiManagementCustomDomainPortal[] | cdktf.IResolvable;
  /**
  * scm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#scm ApiManagementCustomDomain#scm}
  */
  readonly scm?: ApiManagementCustomDomainScm[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#timeouts ApiManagementCustomDomain#timeouts}
  */
  readonly timeouts?: ApiManagementCustomDomainTimeouts;
}
export interface ApiManagementCustomDomainDeveloperPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementCustomDomainDeveloperPortalToTerraform(struct?: ApiManagementCustomDomainDeveloperPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementCustomDomainDeveloperPortalToHclTerraform(struct?: ApiManagementCustomDomainDeveloperPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainDeveloperPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementCustomDomainDeveloperPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainDeveloperPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCustomDomainDeveloperPortalList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCustomDomainDeveloperPortal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementCustomDomainDeveloperPortalOutputReference {
    return new ApiManagementCustomDomainDeveloperPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCustomDomainGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}
  */
  readonly defaultSslBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementCustomDomainGatewayToTerraform(struct?: ApiManagementCustomDomainGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementCustomDomainGatewayToHclTerraform(struct?: ApiManagementCustomDomainGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ssl_binding: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSslBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementCustomDomainGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._defaultSslBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSslBinding = this._defaultSslBinding;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._defaultSslBinding = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._defaultSslBinding = value.defaultSslBinding;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // default_ssl_binding - computed: true, optional: true, required: false
  private _defaultSslBinding?: boolean | cdktf.IResolvable; 
  public get defaultSslBinding() {
    return this.getBooleanAttribute('default_ssl_binding');
  }
  public set defaultSslBinding(value: boolean | cdktf.IResolvable) {
    this._defaultSslBinding = value;
  }
  public resetDefaultSslBinding() {
    this._defaultSslBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSslBindingInput() {
    return this._defaultSslBinding;
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCustomDomainGatewayList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCustomDomainGateway[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementCustomDomainGatewayOutputReference {
    return new ApiManagementCustomDomainGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCustomDomainManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementCustomDomainManagementToTerraform(struct?: ApiManagementCustomDomainManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementCustomDomainManagementToHclTerraform(struct?: ApiManagementCustomDomainManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementCustomDomainManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCustomDomainManagementList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCustomDomainManagement[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementCustomDomainManagementOutputReference {
    return new ApiManagementCustomDomainManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCustomDomainPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementCustomDomainPortalToTerraform(struct?: ApiManagementCustomDomainPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementCustomDomainPortalToHclTerraform(struct?: ApiManagementCustomDomainPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementCustomDomainPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCustomDomainPortalList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCustomDomainPortal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementCustomDomainPortalOutputReference {
    return new ApiManagementCustomDomainPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCustomDomainScm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementCustomDomainScmToTerraform(struct?: ApiManagementCustomDomainScm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementCustomDomainScmToHclTerraform(struct?: ApiManagementCustomDomainScm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainScmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementCustomDomainScm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainScm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCustomDomainScmList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCustomDomainScm[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementCustomDomainScmOutputReference {
    return new ApiManagementCustomDomainScmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}
  */
  readonly update?: string;
}

export function apiManagementCustomDomainTimeoutsToTerraform(struct?: ApiManagementCustomDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apiManagementCustomDomainTimeoutsToHclTerraform(struct?: ApiManagementCustomDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementCustomDomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCustomDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain azurerm_api_management_custom_domain}
*/
export class ApiManagementCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementCustomDomain to import
  * @param importFromId The id of the existing ApiManagementCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_custom_domain azurerm_api_management_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiManagementId = config.apiManagementId;
    this._id = config.id;
    this._developerPortal.internalValue = config.developerPortal;
    this._gateway.internalValue = config.gateway;
    this._management.internalValue = config.management;
    this._portal.internalValue = config.portal;
    this._scm.internalValue = config.scm;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId?: string; 
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // developer_portal - computed: false, optional: true, required: false
  private _developerPortal = new ApiManagementCustomDomainDeveloperPortalList(this, "developer_portal", false);
  public get developerPortal() {
    return this._developerPortal;
  }
  public putDeveloperPortal(value: ApiManagementCustomDomainDeveloperPortal[] | cdktf.IResolvable) {
    this._developerPortal.internalValue = value;
  }
  public resetDeveloperPortal() {
    this._developerPortal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerPortalInput() {
    return this._developerPortal.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new ApiManagementCustomDomainGatewayList(this, "gateway", false);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: ApiManagementCustomDomainGateway[] | cdktf.IResolvable) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new ApiManagementCustomDomainManagementList(this, "management", false);
  public get management() {
    return this._management;
  }
  public putManagement(value: ApiManagementCustomDomainManagement[] | cdktf.IResolvable) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // portal - computed: false, optional: true, required: false
  private _portal = new ApiManagementCustomDomainPortalList(this, "portal", false);
  public get portal() {
    return this._portal;
  }
  public putPortal(value: ApiManagementCustomDomainPortal[] | cdktf.IResolvable) {
    this._portal.internalValue = value;
  }
  public resetPortal() {
    this._portal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal.internalValue;
  }

  // scm - computed: false, optional: true, required: false
  private _scm = new ApiManagementCustomDomainScmList(this, "scm", false);
  public get scm() {
    return this._scm;
  }
  public putScm(value: ApiManagementCustomDomainScm[] | cdktf.IResolvable) {
    this._scm.internalValue = value;
  }
  public resetScm() {
    this._scm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmInput() {
    return this._scm.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementCustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementCustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      id: cdktf.stringToTerraform(this._id),
      developer_portal: cdktf.listMapper(apiManagementCustomDomainDeveloperPortalToTerraform, true)(this._developerPortal.internalValue),
      gateway: cdktf.listMapper(apiManagementCustomDomainGatewayToTerraform, true)(this._gateway.internalValue),
      management: cdktf.listMapper(apiManagementCustomDomainManagementToTerraform, true)(this._management.internalValue),
      portal: cdktf.listMapper(apiManagementCustomDomainPortalToTerraform, true)(this._portal.internalValue),
      scm: cdktf.listMapper(apiManagementCustomDomainScmToTerraform, true)(this._scm.internalValue),
      timeouts: apiManagementCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_management_id: {
        value: cdktf.stringToHclTerraform(this._apiManagementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      developer_portal: {
        value: cdktf.listMapperHcl(apiManagementCustomDomainDeveloperPortalToHclTerraform, true)(this._developerPortal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCustomDomainDeveloperPortalList",
      },
      gateway: {
        value: cdktf.listMapperHcl(apiManagementCustomDomainGatewayToHclTerraform, true)(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCustomDomainGatewayList",
      },
      management: {
        value: cdktf.listMapperHcl(apiManagementCustomDomainManagementToHclTerraform, true)(this._management.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCustomDomainManagementList",
      },
      portal: {
        value: cdktf.listMapperHcl(apiManagementCustomDomainPortalToHclTerraform, true)(this._portal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCustomDomainPortalList",
      },
      scm: {
        value: cdktf.listMapperHcl(apiManagementCustomDomainScmToHclTerraform, true)(this._scm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCustomDomainScmList",
      },
      timeouts: {
        value: apiManagementCustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementCustomDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
