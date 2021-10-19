// https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnServerConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#location VpnServerConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#resource_group_name VpnServerConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#tags VpnServerConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}
  */
  readonly vpnAuthenticationTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#vpn_protocols VpnServerConfiguration#vpn_protocols}
  */
  readonly vpnProtocols?: string[];
  /**
  * azure_active_directory_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}
  */
  readonly azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[];
  /**
  * client_revoked_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}
  */
  readonly clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[];
  /**
  * client_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationClientRootCertificate[];
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#ipsec_policy VpnServerConfiguration#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnServerConfigurationIpsecPolicy;
  /**
  * radius block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#radius VpnServerConfiguration#radius}
  */
  readonly radius?: VpnServerConfigurationRadius;
  /**
  * radius_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#radius_server VpnServerConfiguration#radius_server}
  */
  readonly radiusServer?: VpnServerConfigurationRadiusServerA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#timeouts VpnServerConfiguration#timeouts}
  */
  readonly timeouts?: VpnServerConfigurationTimeouts;
}
export interface VpnServerConfigurationAzureActiveDirectoryAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#audience VpnServerConfiguration#audience}
  */
  readonly audience: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#issuer VpnServerConfiguration#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#tenant VpnServerConfiguration#tenant}
  */
  readonly tenant: string;
}

function vpnServerConfigurationAzureActiveDirectoryAuthenticationToTerraform(struct?: VpnServerConfigurationAzureActiveDirectoryAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

function vpnServerConfigurationClientRevokedCertificateToTerraform(struct?: VpnServerConfigurationClientRevokedCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

function vpnServerConfigurationClientRootCertificateToTerraform(struct?: VpnServerConfigurationClientRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#dh_group VpnServerConfiguration#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#ike_encryption VpnServerConfiguration#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#ike_integrity VpnServerConfiguration#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#ipsec_encryption VpnServerConfiguration#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#ipsec_integrity VpnServerConfiguration#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#pfs_group VpnServerConfiguration#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}
  */
  readonly saDataSizeKilobytes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}
  */
  readonly saLifetimeSeconds: number;
}

function vpnServerConfigurationIpsecPolicyToTerraform(struct?: VpnServerConfigurationIpsecPolicyOutputReference | VpnServerConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._dhGroup
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
    return this._ikeEncryption
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
    return this._ikeIntegrity
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
    return this._ipsecEncryption
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
    return this._ipsecIntegrity
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
    return this._pfsGroup
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
    return this._saDataSizeKilobytes
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
    return this._saLifetimeSeconds
  }
}
export interface VpnServerConfigurationRadiusClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

function vpnServerConfigurationRadiusClientRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusClientRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#address VpnServerConfiguration#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#score VpnServerConfiguration#score}
  */
  readonly score: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#secret VpnServerConfiguration#secret}
  */
  readonly secret: string;
}

function vpnServerConfigurationRadiusServerToTerraform(struct?: VpnServerConfigurationRadiusServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

function vpnServerConfigurationRadiusServerRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[];
  /**
  * server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#server VpnServerConfiguration#server}
  */
  readonly server?: VpnServerConfigurationRadiusServer[];
  /**
  * server_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#server_root_certificate VpnServerConfiguration#server_root_certificate}
  */
  readonly serverRootCertificate: VpnServerConfigurationRadiusServerRootCertificate[];
}

function vpnServerConfigurationRadiusToTerraform(struct?: VpnServerConfigurationRadiusOutputReference | VpnServerConfigurationRadius): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[] | undefined; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_root_certificate') as any;
  }
  public set clientRootCertificate(value: VpnServerConfigurationRadiusClientRootCertificate[] | undefined) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate
  }

  // server - computed: false, optional: true, required: false
  private _server?: VpnServerConfigurationRadiusServer[] | undefined; 
  public get server() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server') as any;
  }
  public set server(value: VpnServerConfigurationRadiusServer[] | undefined) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // server_root_certificate - computed: false, optional: false, required: true
  private _serverRootCertificate?: VpnServerConfigurationRadiusServerRootCertificate[]; 
  public get serverRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server_root_certificate') as any;
  }
  public set serverRootCertificate(value: VpnServerConfigurationRadiusServerRootCertificate[]) {
    this._serverRootCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCertificateInput() {
    return this._serverRootCertificate
  }
}
export interface VpnServerConfigurationRadiusServerClientRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#thumbprint VpnServerConfiguration#thumbprint}
  */
  readonly thumbprint: string;
}

function vpnServerConfigurationRadiusServerClientRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerClientRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#name VpnServerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#public_cert_data VpnServerConfiguration#public_cert_data}
  */
  readonly publicCertData: string;
}

function vpnServerConfigurationRadiusServerServerRootCertificateToTerraform(struct?: VpnServerConfigurationRadiusServerServerRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#address VpnServerConfiguration#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#secret VpnServerConfiguration#secret}
  */
  readonly secret: string;
  /**
  * client_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#client_root_certificate VpnServerConfiguration#client_root_certificate}
  */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[];
  /**
  * server_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#server_root_certificate VpnServerConfiguration#server_root_certificate}
  */
  readonly serverRootCertificate: VpnServerConfigurationRadiusServerServerRootCertificate[];
}

function vpnServerConfigurationRadiusServerAToTerraform(struct?: VpnServerConfigurationRadiusServerAOutputReference | VpnServerConfigurationRadiusServerA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._address
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
    return this._secret
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[] | undefined; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_root_certificate') as any;
  }
  public set clientRootCertificate(value: VpnServerConfigurationRadiusServerClientRootCertificate[] | undefined) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate
  }

  // server_root_certificate - computed: false, optional: false, required: true
  private _serverRootCertificate?: VpnServerConfigurationRadiusServerServerRootCertificate[]; 
  public get serverRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server_root_certificate') as any;
  }
  public set serverRootCertificate(value: VpnServerConfigurationRadiusServerServerRootCertificate[]) {
    this._serverRootCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCertificateInput() {
    return this._serverRootCertificate
  }
}
export interface VpnServerConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#create VpnServerConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#delete VpnServerConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#read VpnServerConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#update VpnServerConfiguration#update}
  */
  readonly update?: string;
}

function vpnServerConfigurationTimeoutsToTerraform(struct?: VpnServerConfigurationTimeoutsOutputReference | VpnServerConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html azurerm_vpn_server_configuration}
*/
export class VpnServerConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vpn_server_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html azurerm_vpn_server_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnServerConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: VpnServerConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_server_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
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
    this._ipsecPolicy = config.ipsecPolicy;
    this._radius = config.radius;
    this._radiusServer = config.radiusServer;
    this._timeouts = config.timeouts;
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
    return this._location
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
    return this._name
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
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
    return this._vpnAuthenticationTypes
  }

  // vpn_protocols - computed: true, optional: true, required: false
  private _vpnProtocols?: string[] | undefined; 
  public get vpnProtocols() {
    return this.getListAttribute('vpn_protocols');
  }
  public set vpnProtocols(value: string[] | undefined) {
    this._vpnProtocols = value;
  }
  public resetVpnProtocols() {
    this._vpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnProtocolsInput() {
    return this._vpnProtocols
  }

  // azure_active_directory_authentication - computed: false, optional: true, required: false
  private _azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | undefined; 
  public get azureActiveDirectoryAuthentication() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_active_directory_authentication') as any;
  }
  public set azureActiveDirectoryAuthentication(value: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | undefined) {
    this._azureActiveDirectoryAuthentication = value;
  }
  public resetAzureActiveDirectoryAuthentication() {
    this._azureActiveDirectoryAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryAuthenticationInput() {
    return this._azureActiveDirectoryAuthentication
  }

  // client_revoked_certificate - computed: false, optional: true, required: false
  private _clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[] | undefined; 
  public get clientRevokedCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_revoked_certificate') as any;
  }
  public set clientRevokedCertificate(value: VpnServerConfigurationClientRevokedCertificate[] | undefined) {
    this._clientRevokedCertificate = value;
  }
  public resetClientRevokedCertificate() {
    this._clientRevokedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRevokedCertificateInput() {
    return this._clientRevokedCertificate
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationClientRootCertificate[] | undefined; 
  public get clientRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_root_certificate') as any;
  }
  public set clientRootCertificate(value: VpnServerConfigurationClientRootCertificate[] | undefined) {
    this._clientRootCertificate = value;
  }
  public resetClientRootCertificate() {
    this._clientRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateInput() {
    return this._clientRootCertificate
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy?: VpnServerConfigurationIpsecPolicy | undefined; 
  private __ipsecPolicyOutput = new VpnServerConfigurationIpsecPolicyOutputReference(this as any, "ipsec_policy", true);
  public get ipsecPolicy() {
    return this.__ipsecPolicyOutput;
  }
  public putIpsecPolicy(value: VpnServerConfigurationIpsecPolicy | undefined) {
    this._ipsecPolicy = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: VpnServerConfigurationRadius | undefined; 
  private __radiusOutput = new VpnServerConfigurationRadiusOutputReference(this as any, "radius", true);
  public get radius() {
    return this.__radiusOutput;
  }
  public putRadius(value: VpnServerConfigurationRadius | undefined) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: VpnServerConfigurationRadiusServerA | undefined; 
  private __radiusServerOutput = new VpnServerConfigurationRadiusServerAOutputReference(this as any, "radius_server", true);
  public get radiusServer() {
    return this.__radiusServerOutput;
  }
  public putRadiusServer(value: VpnServerConfigurationRadiusServerA | undefined) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnServerConfigurationTimeouts | undefined; 
  private __timeoutsOutput = new VpnServerConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnServerConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpn_authentication_types: cdktf.listMapper(cdktf.stringToTerraform)(this._vpnAuthenticationTypes),
      vpn_protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._vpnProtocols),
      azure_active_directory_authentication: cdktf.listMapper(vpnServerConfigurationAzureActiveDirectoryAuthenticationToTerraform)(this._azureActiveDirectoryAuthentication),
      client_revoked_certificate: cdktf.listMapper(vpnServerConfigurationClientRevokedCertificateToTerraform)(this._clientRevokedCertificate),
      client_root_certificate: cdktf.listMapper(vpnServerConfigurationClientRootCertificateToTerraform)(this._clientRootCertificate),
      ipsec_policy: vpnServerConfigurationIpsecPolicyToTerraform(this._ipsecPolicy),
      radius: vpnServerConfigurationRadiusToTerraform(this._radius),
      radius_server: vpnServerConfigurationRadiusServerAToTerraform(this._radiusServer),
      timeouts: vpnServerConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
