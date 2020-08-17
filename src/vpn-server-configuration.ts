// https://www.terraform.io/docs/providers/azurerm/r/vpn_server_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpnServerConfigurationConfig extends TerraformMetaArguments {
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
  /** radius_server block */
  readonly radiusServer?: VpnServerConfigurationRadiusServer[];
  /** timeouts block */
  readonly timeouts?: VpnServerConfigurationTimeouts;
}
export interface VpnServerConfigurationAzureActiveDirectoryAuthentication {
  readonly audience: string;
  readonly issuer: string;
  readonly tenant: string;
}
export interface VpnServerConfigurationClientRevokedCertificate {
  readonly name: string;
  readonly thumbprint: string;
}
export interface VpnServerConfigurationClientRootCertificate {
  readonly name: string;
  readonly publicCertData: string;
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
export interface VpnServerConfigurationRadiusServerClientRootCertificate {
  readonly name: string;
  readonly thumbprint: string;
}
export interface VpnServerConfigurationRadiusServerServerRootCertificate {
  readonly name: string;
  readonly publicCertData: string;
}
export interface VpnServerConfigurationRadiusServer {
  readonly address: string;
  readonly secret: string;
  /** client_root_certificate block */
  readonly clientRootCertificate?: VpnServerConfigurationRadiusServerClientRootCertificate[];
  /** server_root_certificate block */
  readonly serverRootCertificate: VpnServerConfigurationRadiusServerServerRootCertificate[];
}
export interface VpnServerConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VpnServerConfiguration extends TerraformResource {

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
    this._radiusServer = config.radiusServer;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpn_authentication_types - computed: false, optional: false, required: true
  private _vpnAuthenticationTypes: string[];
  public get vpnAuthenticationTypes() {
    return this._vpnAuthenticationTypes;
  }
  public set vpnAuthenticationTypes(value: string[]) {
    this._vpnAuthenticationTypes = value;
  }

  // vpn_protocols - computed: true, optional: true, required: false
  private _vpnProtocols?: string[];
  public get vpnProtocols() {
    return this._vpnProtocols ?? this.getListAttribute('vpn_protocols');
  }
  public set vpnProtocols(value: string[] | undefined) {
    this._vpnProtocols = value;
  }

  // azure_active_directory_authentication - computed: false, optional: true, required: false
  private _azureActiveDirectoryAuthentication?: VpnServerConfigurationAzureActiveDirectoryAuthentication[];
  public get azureActiveDirectoryAuthentication() {
    return this._azureActiveDirectoryAuthentication;
  }
  public set azureActiveDirectoryAuthentication(value: VpnServerConfigurationAzureActiveDirectoryAuthentication[] | undefined) {
    this._azureActiveDirectoryAuthentication = value;
  }

  // client_revoked_certificate - computed: false, optional: true, required: false
  private _clientRevokedCertificate?: VpnServerConfigurationClientRevokedCertificate[];
  public get clientRevokedCertificate() {
    return this._clientRevokedCertificate;
  }
  public set clientRevokedCertificate(value: VpnServerConfigurationClientRevokedCertificate[] | undefined) {
    this._clientRevokedCertificate = value;
  }

  // client_root_certificate - computed: false, optional: true, required: false
  private _clientRootCertificate?: VpnServerConfigurationClientRootCertificate[];
  public get clientRootCertificate() {
    return this._clientRootCertificate;
  }
  public set clientRootCertificate(value: VpnServerConfigurationClientRootCertificate[] | undefined) {
    this._clientRootCertificate = value;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy?: VpnServerConfigurationIpsecPolicy[];
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public set ipsecPolicy(value: VpnServerConfigurationIpsecPolicy[] | undefined) {
    this._ipsecPolicy = value;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: VpnServerConfigurationRadiusServer[];
  public get radiusServer() {
    return this._radiusServer;
  }
  public set radiusServer(value: VpnServerConfigurationRadiusServer[] | undefined) {
    this._radiusServer = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnServerConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpnServerConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      vpn_authentication_types: this._vpnAuthenticationTypes,
      vpn_protocols: this._vpnProtocols,
      azure_active_directory_authentication: this._azureActiveDirectoryAuthentication,
      client_revoked_certificate: this._clientRevokedCertificate,
      client_root_certificate: this._clientRootCertificate,
      ipsec_policy: this._ipsecPolicy,
      radius_server: this._radiusServer,
      timeouts: this._timeouts,
    };
  }
}
