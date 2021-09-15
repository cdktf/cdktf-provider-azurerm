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
  readonly ipsecPolicy?: VpnServerConfigurationIpsecPolicy[];
  /**
  * radius block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#radius VpnServerConfiguration#radius}
  */
  readonly radius?: VpnServerConfigurationRadius[];
  /**
  * radius_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html#radius_server VpnServerConfiguration#radius_server}
  */
  readonly radiusServer?: VpnServerConfigurationRadiusServerA[];
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

function vpnServerConfigurationIpsecPolicyToTerraform(struct?: VpnServerConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function vpnServerConfigurationRadiusToTerraform(struct?: VpnServerConfigurationRadius): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusClientRootCertificateToTerraform)(struct!.clientRootCertificate),
    server: cdktf.listMapper(vpnServerConfigurationRadiusServerToTerraform)(struct!.server),
    server_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerRootCertificateToTerraform)(struct!.serverRootCertificate),
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

function vpnServerConfigurationRadiusServerAToTerraform(struct?: VpnServerConfigurationRadiusServerA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    secret: cdktf.stringToTerraform(struct!.secret),
    client_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerClientRootCertificateToTerraform)(struct!.clientRootCertificate),
    server_root_certificate: cdktf.listMapper(vpnServerConfigurationRadiusServerServerRootCertificateToTerraform)(struct!.serverRootCertificate),
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

function vpnServerConfigurationTimeoutsToTerraform(struct?: VpnServerConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _location: string;
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
  private _name: string;
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
  private _resourceGroupName: string;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _vpnAuthenticationTypes: string[];
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
  private _vpnProtocols?: string[];
  public get vpnProtocols() {
    return this.getListAttribute('vpn_protocols');
  }
  public set vpnProtocols(value: string[]) {
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
  private _azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[];
  public get azureActiveDirectoryAuthentication() {
    return this.interpolationForAttribute('azure_active_directory_authentication') as any;
  }
  public set azureActiveDirectoryAuthentication(value: VpnServerConfigurationAzureActiveDirectoryAuthentication[] ) {
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
  private _clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[];
  public get clientRevokedCertificate() {
    return this.interpolationForAttribute('client_revoked_certificate') as any;
  }
  public set clientRevokedCertificate(value: VpnServerConfigurationClientRevokedCertificate[] ) {
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
  private _clientRootCertificate?: VpnServerConfigurationClientRootCertificate[];
  public get clientRootCertificate() {
    return this.interpolationForAttribute('client_root_certificate') as any;
  }
  public set clientRootCertificate(value: VpnServerConfigurationClientRootCertificate[] ) {
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
  private _ipsecPolicy?: VpnServerConfigurationIpsecPolicy[];
  public get ipsecPolicy() {
    return this.interpolationForAttribute('ipsec_policy') as any;
  }
  public set ipsecPolicy(value: VpnServerConfigurationIpsecPolicy[] ) {
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
  private _radius?: VpnServerConfigurationRadius[];
  public get radius() {
    return this.interpolationForAttribute('radius') as any;
  }
  public set radius(value: VpnServerConfigurationRadius[] ) {
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
  private _radiusServer?: VpnServerConfigurationRadiusServerA[];
  public get radiusServer() {
    return this.interpolationForAttribute('radius_server') as any;
  }
  public set radiusServer(value: VpnServerConfigurationRadiusServerA[] ) {
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
  private _timeouts?: VpnServerConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpnServerConfigurationTimeouts ) {
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
      ipsec_policy: cdktf.listMapper(vpnServerConfigurationIpsecPolicyToTerraform)(this._ipsecPolicy),
      radius: cdktf.listMapper(vpnServerConfigurationRadiusToTerraform)(this._radius),
      radius_server: cdktf.listMapper(vpnServerConfigurationRadiusServerAToTerraform)(this._radiusServer),
      timeouts: vpnServerConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
