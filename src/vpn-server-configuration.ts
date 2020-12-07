// https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnServerConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly vpnAuthenticationTypes: string[];
  readonly vpnProtocols?: string[];
  /** azure_active_directory_authentication block */
  readonly azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[];
  /** client_revoked_certificate block */
  readonly clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[];
  /** client_root_certificate block */
  readonly clientRootCertificate?: VpnServerConfigurationClientRootCertificate[];
  /** ipsec_policy block */
  readonly ipsecPolicy?: VpnServerConfigurationIpsecPolicy[];
  /** radius block */
  readonly radius?: VpnServerConfigurationRadius[];
  /** radius_server block */
  readonly radiusServer?: VpnServerConfigurationRadiusServerA[];
  /** timeouts block */
  readonly timeouts?: VpnServerConfigurationTimeouts;
}
export interface VpnServerConfigurationAzureActiveDirectoryAuthentication {
  readonly audience: string;
  readonly issuer: string;
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
  readonly name: string;
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
  readonly name: string;
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
  readonly dhGroup: string;
  readonly ikeEncryption: string;
  readonly ikeIntegrity: string;
  readonly ipsecEncryption: string;
  readonly ipsecIntegrity: string;
  readonly pfsGroup: string;
  readonly saDataSizeKilobytes: number;
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
  readonly name: string;
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
  readonly address: string;
  readonly score: number;
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
  readonly name: string;
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
  /** client_root_certificate block */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusClientRootCertificate[];
  /** server block */
  readonly server?: VpnServerConfigurationRadiusServer[];
  /** server_root_certificate block */
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
  readonly name: string;
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
  readonly name: string;
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
  readonly address: string;
  readonly secret: string;
  /** client_root_certificate block */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[];
  /** server_root_certificate block */
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class VpnServerConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
