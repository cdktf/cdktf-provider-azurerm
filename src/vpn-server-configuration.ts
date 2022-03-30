// https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnServerConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#location VpnServerConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#tags VpnServerConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}
  */
  readonly vpnAuthenticationTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}
  */
  readonly vpnProtocols?: string[];
  /**
  * azure_active_directory_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}
  */
  readonly azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable;
  /**
  * client_revoked_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}
  */
  readonly clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable;
  /**
  * client_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable;
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnServerConfigurationIpsecPolicy;
  /**
  * radius block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#radius VpnServerConfiguration#radius}
  */
  readonly radius?: VpnServerConfigurationRadius;
  /**
  * radius_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#radius_server VpnServerConfiguration#radius_server}
  */
  readonly radiusServer?: VpnServerConfigurationRadiusServerA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}
  */
  readonly timeouts?: VpnServerConfigurationTimeouts;
}
export interface VpnServerConfigurationAzureActiveDirectoryAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#audience VpnServerConfiguration#audience}
  */
  readonly audience: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#issuer VpnServerConfiguration#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#tenant VpnServerConfiguration#tenant}
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

export interface VpnServerConfigurationClientRevokedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}
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

export interface VpnServerConfigurationClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}
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

export interface VpnServerConfigurationIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}
  */
  readonly saDataSizeKilobytes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}
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

export interface VpnServerConfigurationRadiusServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#address VpnServerConfiguration#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#score VpnServerConfiguration#score}
  */
  readonly score: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#secret VpnServerConfiguration#secret}
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

export interface VpnServerConfigurationRadiusServerRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}
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

export interface VpnServerConfigurationRadius {
  /**
  * client_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable;
  /**
  * server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#server VpnServerConfiguration#server}
  */
  readonly server?: VpnServerConfigurationRadiusServer[] | cdktf.IResolvable;
  /**
  * server_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}
  */
  readonly serverRootCertificate: VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable;
}

export function vpnServerConfigurationRadiusToTerraform(struct?: VpnServerConfigurationRadiusOutputReference | VpnServerConfigurationRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusClientRootCertificateToTerraform)(struct!.clientRootCertificate),
    server: cdktf.listMapper(vpnServerConfigurationRadiusServerToTerraform)(struct!.server),
    server_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerRootCertificateToTerraform)(struct!.serverRootCertificate),
  }
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
    if (this._clientRootCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRootCertificate = this._clientRootCertificate;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serverRootCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCertificate = this._serverRootCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientRootCertificate = undefined;
      this._server = undefined;
      this._serverRootCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientRootCertificate = value.clientRootCertificate;
      this._server = value.server;
      this._serverRootCertificate = value.serverRootCertificate;
    }
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('client_root_certificate')));
  }
  public set clientRootCertificate(value: VpnServerConfigurationRadiusClientRootCertificate[] | cdktf.IResolvable) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate;
  }

  // server - computed: false, optional: true, required: false
  private _server?: VpnServerConfigurationRadiusServer[] | cdktf.IResolvable; 
  public get server() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server');
  }
  public set server(value: VpnServerConfigurationRadiusServer[] | cdktf.IResolvable) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_root_certificate - computed: false, optional: false, required: true
  private _serverRootCertificate?: VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable; 
  public get serverRootCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('server_root_certificate')));
  }
  public set serverRootCertificate(value: VpnServerConfigurationRadiusServerRootCertificate[] | cdktf.IResolvable) {
    this._serverRootCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCertificateInput() {
    return this._serverRootCertificate;
  }
}
export interface VpnServerConfigurationRadiusServerClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

export function vpnServerConfigurationRadiusServerClientRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerClientRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface VpnServerConfigurationRadiusServerServerRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

export function vpnServerConfigurationRadiusServerServerRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerServerRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}

export interface VpnServerConfigurationRadiusServerA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#address VpnServerConfiguration#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#secret VpnServerConfiguration#secret}
  */
  readonly secret: string;
  /**
  * client_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[] | cdktf.IResolvable;
  /**
  * server_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}
  */
  readonly serverRootCertificate: VpnServerConfigurationRadiusServerServerRootCertificate[] | cdktf.IResolvable;
}

export function vpnServerConfigurationRadiusServerAToTerraform(struct?: VpnServerConfigurationRadiusServerAOutputReference | VpnServerConfigurationRadiusServerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    secret: cdktf.stringToTerraform(struct!.secret),
    client_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerClientRootCertificateToTerraform)(struct!.clientRootCertificate),
    server_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerServerRootCertificateToTerraform)(struct!.serverRootCertificate),
  }
}

export class VpnServerConfigurationRadiusServerAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnServerConfigurationRadiusServerA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._clientRootCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRootCertificate = this._clientRootCertificate;
    }
    if (this._serverRootCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCertificate = this._serverRootCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnServerConfigurationRadiusServerA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._secret = undefined;
      this._clientRootCertificate = undefined;
      this._serverRootCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._secret = value.secret;
      this._clientRootCertificate = value.clientRootCertificate;
      this._serverRootCertificate = value.serverRootCertificate;
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

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[] | cdktf.IResolvable; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('client_root_certificate')));
  }
  public set clientRootCertificate(value: VpnServerConfigurationRadiusServerClientRootCertificate[] | cdktf.IResolvable) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate;
  }

  // server_root_certificate - computed: false, optional: false, required: true
  private _serverRootCertificate?: VpnServerConfigurationRadiusServerServerRootCertificate[] | cdktf.IResolvable; 
  public get serverRootCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('server_root_certificate')));
  }
  public set serverRootCertificate(value: VpnServerConfigurationRadiusServerServerRootCertificate[] | cdktf.IResolvable) {
    this._serverRootCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCertificateInput() {
    return this._serverRootCertificate;
  }
}
export interface VpnServerConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#create VpnServerConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#delete VpnServerConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#read VpnServerConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration#update VpnServerConfiguration#update}
  */
  readonly update?: string;
}

export function vpnServerConfigurationTimeoutsToTerraform(struct?: VpnServerConfigurationTimeoutsOutputReference | VpnServerConfigurationTimeouts | cdktf.IResolvable): any {
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

export class VpnServerConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnServerConfigurationTimeouts | undefined {
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

  public set internalValue(value: VpnServerConfigurationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration azurerm_vpn_server_configuration}
*/
export class VpnServerConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_server_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration azurerm_vpn_server_configuration} Resource
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
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._vpnAuthenticationTypes = config.vpnAuthenticationTypes;
    this._vpnProtocols = config.vpnProtocols;
    this._azureActiveDirectoryAuthentication = config.azureActiveDirectoryAuthentication;
    this._clientRevokedCertificate = config.clientRevokedCertificate;
    this._clientRootCertificate = config.clientRootCertificate;
    this._ipsecPolicy.internalValue = config.ipsecPolicy;
    this._radius.internalValue = config.radius;
    this._radiusServer.internalValue = config.radiusServer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable; 
  public get azureActiveDirectoryAuthentication() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_active_directory_authentication');
  }
  public set azureActiveDirectoryAuthentication(value: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | cdktf.IResolvable) {
    this._azureActiveDirectoryAuthentication = value;
  }
  public resetAzureActiveDirectoryAuthentication() {
    this._azureActiveDirectoryAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryAuthenticationInput() {
    return this._azureActiveDirectoryAuthentication;
  }

  // client_revoked_certificate - computed: false, optional: true, required: false
  private _clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable; 
  public get clientRevokedCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('client_revoked_certificate')));
  }
  public set clientRevokedCertificate(value: VpnServerConfigurationClientRevokedCertificate[] | cdktf.IResolvable) {
    this._clientRevokedCertificate = value;
  }
  public resetClientRevokedCertificate() {
    this._clientRevokedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRevokedCertificateInput() {
    return this._clientRevokedCertificate;
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('client_root_certificate')));
  }
  public set clientRootCertificate(value: VpnServerConfigurationClientRootCertificate[] | cdktf.IResolvable) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate;
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

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer = new VpnServerConfigurationRadiusServerAOutputReference(this, "radius_server");
  public get radiusServer() {
    return this._radiusServer;
  }
  public putRadiusServer(value: VpnServerConfigurationRadiusServerA) {
    this._radiusServer.internalValue = value;
  }
  public resetRadiusServer() {
    this._radiusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer.internalValue;
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpn_authentication_types: cdktf.listMapper(cdktf.stringToTerraform)(this._vpnAuthenticationTypes),
      vpn_protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._vpnProtocols),
      azure_active_directory_authentication: cdktf.listMapper(vpnServerConfigurationAzureActiveDirectoryAuthenticationToTerraform)(this._azureActiveDirectoryAuthentication),
      client_revoked_certificate: cdktf.listMapper(vpnServerConfigurationClientRevokedCertificateToTerraform)(this._clientRevokedCertificate),
      client_root_certificate: cdktf.listMapper(vpnServerConfigurationClientRootCertificateToTerraform)(this._clientRootCertificate),
      ipsec_policy: vpnServerConfigurationIpsecPolicyToTerraform(this._ipsecPolicy.internalValue),
      radius: vpnServerConfigurationRadiusToTerraform(this._radius.internalValue),
      radius_server: vpnServerConfigurationRadiusServerAToTerraform(this._radiusServer.internalValue),
      timeouts: vpnServerConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
