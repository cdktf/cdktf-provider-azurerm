// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnServerConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}
  */
  readonly vpnAuthenticationTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}
  */
  readonly vpnProtocols?: string[];
  /**
  * azure_active_directory_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}
  */
  readonly azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable;
  /**
  * client_revoked_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}
  */
  readonly clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable;
  /**
  * client_root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable;
  /**
  * ipsec_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnServerConfigurationIpsecPolicy;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#radius VpnServerConfiguration#radius}
  */
  readonly radius?: VpnServerConfigurationRadius;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}
  */
  readonly timeouts?: VpnServerConfigurationTimeouts;
}
export interface VpnServerConfigurationAzureActiveDirectoryAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}
  */
  readonly audience: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}
  */
  readonly tenant: string;
}

export function vpnServerConfigurationAzureActiveDirectoryAuthenticationToTerraform(struct?: VpnServerConfigurationAzureActiveDirectoryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function vpnServerConfigurationAzureActiveDirectoryAuthenticationToHclTerraform(struct?: VpnServerConfigurationAzureActiveDirectoryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationAzureActiveDirectoryAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationAzureActiveDirectoryAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._issuer = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._tenant = value.tenant;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VpnServerConfigurationAzureActiveDirectoryAuthenticationList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference {
    return new VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationClientRevokedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

export function vpnServerConfigurationClientRevokedCertificateToTerraform(struct?: VpnServerConfigurationClientRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function vpnServerConfigurationClientRevokedCertificateToHclTerraform(struct?: VpnServerConfigurationClientRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationClientRevokedCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationClientRevokedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationClientRevokedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._thumbprint = value.thumbprint;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

export class VpnServerConfigurationClientRevokedCertificateList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationClientRevokedCertificateOutputReference {
    return new VpnServerConfigurationClientRevokedCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

export function vpnServerConfigurationClientRootCertificateToTerraform(struct?: VpnServerConfigurationClientRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}


export function vpnServerConfigurationClientRootCertificateToHclTerraform(struct?: VpnServerConfigurationClientRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.publicCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationClientRootCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationClientRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicCertData = this._publicCertData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationClientRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicCertData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicCertData = value.publicCertData;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_cert_data - computed: false, optional: false, required: true
  private _publicCertData?: string; 
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
  public set publicCertData(value: string) {
    this._publicCertData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertDataInput() {
    return this._publicCertData;
  }
}

export class VpnServerConfigurationClientRootCertificateList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationClientRootCertificateOutputReference {
    return new VpnServerConfigurationClientRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}
  */
  readonly saDataSizeKilobytes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}
  */
  readonly saLifetimeSeconds: number;
}

export function vpnServerConfigurationIpsecPolicyToTerraform(struct?: VpnServerConfigurationIpsecPolicyOutputReference | VpnServerConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_integrity: cdktf.stringToTerraform(struct!.ikeIntegrity),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_integrity: cdktf.stringToTerraform(struct!.ipsecIntegrity),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_data_size_kilobytes: cdktf.numberToTerraform(struct!.saDataSizeKilobytes),
    sa_lifetime_seconds: cdktf.numberToTerraform(struct!.saLifetimeSeconds),
  }
}


export function vpnServerConfigurationIpsecPolicyToHclTerraform(struct?: VpnServerConfigurationIpsecPolicyOutputReference | VpnServerConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ikeIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfs_group: {
      value: cdktf.stringToHclTerraform(struct!.pfsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_data_size_kilobytes: {
      value: cdktf.numberToHclTerraform(struct!.saDataSizeKilobytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.saLifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnServerConfigurationIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrity = this._ikeIntegrity;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIntegrity = this._ipsecIntegrity;
    }
    if (this._pfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDataSizeKilobytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.saDataSizeKilobytes = this._saDataSizeKilobytes;
    }
    if (this._saLifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifetimeSeconds = this._saLifetimeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhGroup = undefined;
      this._ikeEncryption = undefined;
      this._ikeIntegrity = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecIntegrity = undefined;
      this._pfsGroup = undefined;
      this._saDataSizeKilobytes = undefined;
      this._saLifetimeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhGroup = value.dhGroup;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeIntegrity = value.ikeIntegrity;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecIntegrity = value.ipsecIntegrity;
      this._pfsGroup = value.pfsGroup;
      this._saDataSizeKilobytes = value.saDataSizeKilobytes;
      this._saLifetimeSeconds = value.saLifetimeSeconds;
    }
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // ike_encryption - computed: false, optional: false, required: true
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_integrity - computed: false, optional: false, required: true
  private _ikeIntegrity?: string; 
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }
  public set ikeIntegrity(value: string) {
    this._ikeIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityInput() {
    return this._ikeIntegrity;
  }

  // ipsec_encryption - computed: false, optional: false, required: true
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_integrity - computed: false, optional: false, required: true
  private _ipsecIntegrity?: string; 
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }
  public set ipsecIntegrity(value: string) {
    this._ipsecIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityInput() {
    return this._ipsecIntegrity;
  }

  // pfs_group - computed: false, optional: false, required: true
  private _pfsGroup?: string; 
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }
  public set pfsGroup(value: string) {
    this._pfsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsGroupInput() {
    return this._pfsGroup;
  }

  // sa_data_size_kilobytes - computed: false, optional: false, required: true
  private _saDataSizeKilobytes?: number; 
  public get saDataSizeKilobytes() {
    return this.getNumberAttribute('sa_data_size_kilobytes');
  }
  public set saDataSizeKilobytes(value: number) {
    this._saDataSizeKilobytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saDataSizeKilobytesInput() {
    return this._saDataSizeKilobytes;
  }

  // sa_lifetime_seconds - computed: false, optional: false, required: true
  private _saLifetimeSeconds?: number; 
  public get saLifetimeSeconds() {
    return this.getNumberAttribute('sa_lifetime_seconds');
  }
  public set saLifetimeSeconds(value: number) {
    this._saLifetimeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifetimeSecondsInput() {
    return this._saLifetimeSeconds;
  }
}
export interface VpnServerConfigurationRadiusClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

export function vpnServerConfigurationRadiusClientRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusClientRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function vpnServerConfigurationRadiusClientRootCertificateToHclTerraform(struct?: VpnServerConfigurationRadiusClientRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationRadiusClientRootCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationRadiusClientRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadiusClientRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._thumbprint = value.thumbprint;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

export class VpnServerConfigurationRadiusClientRootCertificateList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationRadiusClientRootCertificateOutputReference {
    return new VpnServerConfigurationRadiusClientRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationRadiusServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}
  */
  readonly score: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}
  */
  readonly secret: string;
}

export function vpnServerConfigurationRadiusServerToTerraform(struct?: VpnServerConfigurationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    score: cdktf.numberToTerraform(struct!.score),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function vpnServerConfigurationRadiusServerToHclTerraform(struct?: VpnServerConfigurationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationRadiusServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationRadiusServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadiusServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._score = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._score = value.score;
      this._secret = value.secret;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class VpnServerConfigurationRadiusServerList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationRadiusServer[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationRadiusServerOutputReference {
    return new VpnServerConfigurationRadiusServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationRadiusServerRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

export function vpnServerConfigurationRadiusServerRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}


export function vpnServerConfigurationRadiusServerRootCertificateToHclTerraform(struct?: VpnServerConfigurationRadiusServerRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.publicCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationRadiusServerRootCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnServerConfigurationRadiusServerRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicCertData = this._publicCertData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadiusServerRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicCertData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicCertData = value.publicCertData;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_cert_data - computed: false, optional: false, required: true
  private _publicCertData?: string; 
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
  public set publicCertData(value: string) {
    this._publicCertData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertDataInput() {
    return this._publicCertData;
  }
}

export class VpnServerConfigurationRadiusServerRootCertificateList extends cdktf.ComplexList {
  public internalValue? : VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable

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
  public get(index: number): VpnServerConfigurationRadiusServerRootCertificateOutputReference {
    return new VpnServerConfigurationRadiusServerRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnServerConfigurationRadius {
  /**
  * client_root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#server VpnServerConfiguration#server}
  */
  readonly server?: VpnServerConfigurationRadiusServer[] | cdktf.IResolvable;
  /**
  * server_root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}
  */
  readonly serverRootCertificate?: VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable;
}

export function vpnServerConfigurationRadiusToTerraform(struct?: VpnServerConfigurationRadiusOutputReference | VpnServerConfigurationRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusClientRootCertificateToTerraform, true)(struct!.clientRootCertificate),
    server: cdktf.listMapper(vpnServerConfigurationRadiusServerToTerraform, true)(struct!.server),
    server_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerRootCertificateToTerraform, true)(struct!.serverRootCertificate),
  }
}


export function vpnServerConfigurationRadiusToHclTerraform(struct?: VpnServerConfigurationRadiusOutputReference | VpnServerConfigurationRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_root_certificate: {
      value: cdktf.listMapperHcl(vpnServerConfigurationRadiusClientRootCertificateToHclTerraform, true)(struct!.clientRootCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VpnServerConfigurationRadiusClientRootCertificateList",
    },
    server: {
      value: cdktf.listMapperHcl(vpnServerConfigurationRadiusServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "VpnServerConfigurationRadiusServerList",
    },
    server_root_certificate: {
      value: cdktf.listMapperHcl(vpnServerConfigurationRadiusServerRootCertificateToHclTerraform, true)(struct!.serverRootCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VpnServerConfigurationRadiusServerRootCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnServerConfigurationRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnServerConfigurationRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRootCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRootCertificate = this._clientRootCertificate?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._serverRootCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCertificate = this._serverRootCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientRootCertificate.internalValue = undefined;
      this._server.internalValue = undefined;
      this._serverRootCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientRootCertificate.internalValue = value.clientRootCertificate;
      this._server.internalValue = value.server;
      this._serverRootCertificate.internalValue = value.serverRootCertificate;
    }
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate = new VpnServerConfigurationRadiusClientRootCertificateList(this, "client_root_certificate", true);
  public get clientRootCertificate() {
    return this._clientRootCertificate;
  }
  public putClientRootCertificate(value: VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable) {
    this._clientRootCertificate.internalValue = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new VpnServerConfigurationRadiusServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: VpnServerConfigurationRadiusServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // server_root_certificate - computed: false, optional: true, required: false
  private _serverRootCertificate = new VpnServerConfigurationRadiusServerRootCertificateList(this, "server_root_certificate", true);
  public get serverRootCertificate() {
    return this._serverRootCertificate;
  }
  public putServerRootCertificate(value: VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable) {
    this._serverRootCertificate.internalValue = value;
  }
  public resetServerRootCertificate() {
    this._serverRootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCertificateInput() {
    return this._serverRootCertificate.internalValue;
  }
}
export interface VpnServerConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}
  */
  readonly update?: string;
}

export function vpnServerConfigurationTimeoutsToTerraform(struct?: VpnServerConfigurationTimeouts | cdktf.IResolvable): any {
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


export function vpnServerConfigurationTimeoutsToHclTerraform(struct?: VpnServerConfigurationTimeouts | cdktf.IResolvable): any {
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

export class VpnServerConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnServerConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnServerConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration azurerm_vpn_server_configuration}
*/
export class VpnServerConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_server_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnServerConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnServerConfiguration to import
  * @param importFromId The id of the existing VpnServerConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnServerConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_vpn_server_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_server_configuration azurerm_vpn_server_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnServerConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: VpnServerConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_server_configuration',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._vpnAuthenticationTypes = config.vpnAuthenticationTypes;
    this._vpnProtocols = config.vpnProtocols;
    this._azureActiveDirectoryAuthentication.internalValue = config.azureActiveDirectoryAuthentication;
    this._clientRevokedCertificate.internalValue = config.clientRevokedCertificate;
    this._clientRootCertificate.internalValue = config.clientRootCertificate;
    this._ipsecPolicy.internalValue = config.ipsecPolicy;
    this._radius.internalValue = config.radius;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpn_authentication_types - computed: false, optional: false, required: true
  private _vpnAuthenticationTypes?: string[]; 
  public get vpnAuthenticationTypes() {
    return this.getListAttribute('vpn_authentication_types');
  }
  public set vpnAuthenticationTypes(value: string[]) {
    this._vpnAuthenticationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAuthenticationTypesInput() {
    return this._vpnAuthenticationTypes;
  }

  // vpn_protocols - computed: true, optional: true, required: false
  private _vpnProtocols?: string[]; 
  public get vpnProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_protocols'));
  }
  public set vpnProtocols(value: string[]) {
    this._vpnProtocols = value;
  }
  public resetVpnProtocols() {
    this._vpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnProtocolsInput() {
    return this._vpnProtocols;
  }

  // azure_active_directory_authentication - computed: false, optional: true, required: false
  private _azureActiveDirectoryAuthentication = new VpnServerConfigurationAzureActiveDirectoryAuthenticationList(this, "azure_active_directory_authentication", false);
  public get azureActiveDirectoryAuthentication() {
    return this._azureActiveDirectoryAuthentication;
  }
  public putAzureActiveDirectoryAuthentication(value: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable) {
    this._azureActiveDirectoryAuthentication.internalValue = value;
  }
  public resetAzureActiveDirectoryAuthentication() {
    this._azureActiveDirectoryAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryAuthenticationInput() {
    return this._azureActiveDirectoryAuthentication.internalValue;
  }

  // client_revoked_certificate - computed: false, optional: true, required: false
  private _clientRevokedCertificate = new VpnServerConfigurationClientRevokedCertificateList(this, "client_revoked_certificate", true);
  public get clientRevokedCertificate() {
    return this._clientRevokedCertificate;
  }
  public putClientRevokedCertificate(value: VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable) {
    this._clientRevokedCertificate.internalValue = value;
  }
  public resetClientRevokedCertificate() {
    this._clientRevokedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRevokedCertificateInput() {
    return this._clientRevokedCertificate.internalValue;
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate = new VpnServerConfigurationClientRootCertificateList(this, "client_root_certificate", true);
  public get clientRootCertificate() {
    return this._clientRootCertificate;
  }
  public putClientRootCertificate(value: VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable) {
    this._clientRootCertificate.internalValue = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate.internalValue;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VpnServerConfigurationIpsecPolicyOutputReference(this, "ipsec_policy");
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public putIpsecPolicy(value: VpnServerConfigurationIpsecPolicy) {
    this._ipsecPolicy.internalValue = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new VpnServerConfigurationRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: VpnServerConfigurationRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnServerConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnServerConfigurationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpn_authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnAuthenticationTypes),
      vpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnProtocols),
      azure_active_directory_authentication: cdktf.listMapper(vpnServerConfigurationAzureActiveDirectoryAuthenticationToTerraform, true)(this._azureActiveDirectoryAuthentication.internalValue),
      client_revoked_certificate: cdktf.listMapper(vpnServerConfigurationClientRevokedCertificateToTerraform, true)(this._clientRevokedCertificate.internalValue),
      client_root_certificate: cdktf.listMapper(vpnServerConfigurationClientRootCertificateToTerraform, true)(this._clientRootCertificate.internalValue),
      ipsec_policy: vpnServerConfigurationIpsecPolicyToTerraform(this._ipsecPolicy.internalValue),
      radius: vpnServerConfigurationRadiusToTerraform(this._radius.internalValue),
      timeouts: vpnServerConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn_authentication_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnAuthenticationTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpn_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_active_directory_authentication: {
        value: cdktf.listMapperHcl(vpnServerConfigurationAzureActiveDirectoryAuthenticationToHclTerraform, true)(this._azureActiveDirectoryAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnServerConfigurationAzureActiveDirectoryAuthenticationList",
      },
      client_revoked_certificate: {
        value: cdktf.listMapperHcl(vpnServerConfigurationClientRevokedCertificateToHclTerraform, true)(this._clientRevokedCertificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnServerConfigurationClientRevokedCertificateList",
      },
      client_root_certificate: {
        value: cdktf.listMapperHcl(vpnServerConfigurationClientRootCertificateToHclTerraform, true)(this._clientRootCertificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnServerConfigurationClientRootCertificateList",
      },
      ipsec_policy: {
        value: vpnServerConfigurationIpsecPolicyToHclTerraform(this._ipsecPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnServerConfigurationIpsecPolicyList",
      },
      radius: {
        value: vpnServerConfigurationRadiusToHclTerraform(this._radius.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnServerConfigurationRadiusList",
      },
      timeouts: {
        value: vpnServerConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnServerConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
