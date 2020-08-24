// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface KubernetesClusterConfig extends TerraformMetaArguments {
  readonly apiServerAuthorizedIpRanges?: string[];
  readonly dnsPrefix: string;
  readonly enablePodSecurityPolicy?: boolean;
  readonly kubernetesVersion?: string;
  readonly location: string;
  readonly name: string;
  readonly nodeResourceGroup?: string;
  readonly privateLinkEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** addon_profile block */
  readonly addonProfile?: KubernetesClusterAddonProfile[];
  /** default_node_pool block */
  readonly defaultNodePool: KubernetesClusterDefaultNodePool[];
  /** identity block */
  readonly identity?: KubernetesClusterIdentity[];
  /** linux_profile block */
  readonly linuxProfile?: KubernetesClusterLinuxProfile[];
  /** network_profile block */
  readonly networkProfile?: KubernetesClusterNetworkProfile[];
  /** role_based_access_control block */
  readonly roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  /** service_principal block */
  readonly servicePrincipal: KubernetesClusterServicePrincipal[];
  /** timeouts block */
  readonly timeouts?: KubernetesClusterTimeouts;
  /** windows_profile block */
  readonly windowsProfile?: KubernetesClusterWindowsProfile[];
}
export class KubernetesClusterKubeAdminConfig extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: true
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: true
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: true
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class KubernetesClusterKubeConfig extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: true
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: true
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: true
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface KubernetesClusterAddonProfileAciConnectorLinux {
  readonly enabled: boolean;
  readonly subnetName?: string;
}
export interface KubernetesClusterAddonProfileAzurePolicy {
  readonly enabled: boolean;
}
export interface KubernetesClusterAddonProfileHttpApplicationRouting {
  readonly enabled: boolean;
}
export interface KubernetesClusterAddonProfileKubeDashboard {
  readonly enabled: boolean;
}
export interface KubernetesClusterAddonProfileOmsAgent {
  readonly enabled: boolean;
  readonly logAnalyticsWorkspaceId?: string;
}
export interface KubernetesClusterAddonProfile {
  /** aci_connector_linux block */
  readonly aciConnectorLinux?: KubernetesClusterAddonProfileAciConnectorLinux[];
  /** azure_policy block */
  readonly azurePolicy?: KubernetesClusterAddonProfileAzurePolicy[];
  /** http_application_routing block */
  readonly httpApplicationRouting?: KubernetesClusterAddonProfileHttpApplicationRouting[];
  /** kube_dashboard block */
  readonly kubeDashboard?: KubernetesClusterAddonProfileKubeDashboard[];
  /** oms_agent block */
  readonly omsAgent?: KubernetesClusterAddonProfileOmsAgent[];
}
export interface KubernetesClusterDefaultNodePool {
  readonly availabilityZones?: string[];
  readonly enableAutoScaling?: boolean;
  readonly enableNodePublicIp?: boolean;
  readonly maxCount?: number;
  readonly maxPods?: number;
  readonly minCount?: number;
  readonly name: string;
  readonly nodeCount?: number;
  readonly nodeTaints?: string[];
  readonly osDiskSizeGb?: number;
  readonly type?: string;
  readonly vmSize: string;
  readonly vnetSubnetId?: string;
}
export interface KubernetesClusterIdentity {
  readonly type: string;
}
export interface KubernetesClusterLinuxProfileSshKey {
  readonly keyData: string;
}
export interface KubernetesClusterLinuxProfile {
  readonly adminUsername: string;
  /** ssh_key block */
  readonly sshKey: KubernetesClusterLinuxProfileSshKey[];
}
export interface KubernetesClusterNetworkProfileLoadBalancerProfile {
  readonly managedOutboundIpCount?: number;
  readonly outboundIpAddressIds?: string[];
  readonly outboundIpPrefixIds?: string[];
}
export interface KubernetesClusterNetworkProfile {
  readonly dnsServiceIp?: string;
  readonly dockerBridgeCidr?: string;
  readonly loadBalancerSku?: string;
  readonly networkPlugin: string;
  readonly networkPolicy?: string;
  readonly podCidr?: string;
  readonly serviceCidr?: string;
  /** load_balancer_profile block */
  readonly loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile[];
}
export interface KubernetesClusterRoleBasedAccessControlAzureActiveDirectory {
  readonly clientAppId: string;
  readonly serverAppId: string;
  readonly serverAppSecret: string;
  readonly tenantId?: string;
}
export interface KubernetesClusterRoleBasedAccessControl {
  readonly enabled: boolean;
  /** azure_active_directory block */
  readonly azureActiveDirectory?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory[];
}
export interface KubernetesClusterServicePrincipal {
  readonly clientId: string;
  readonly clientSecret: string;
}
export interface KubernetesClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface KubernetesClusterWindowsProfile {
  readonly adminPassword?: string;
  readonly adminUsername: string;
}

// Resource

export class KubernetesCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiServerAuthorizedIpRanges = config.apiServerAuthorizedIpRanges;
    this._dnsPrefix = config.dnsPrefix;
    this._enablePodSecurityPolicy = config.enablePodSecurityPolicy;
    this._kubernetesVersion = config.kubernetesVersion;
    this._location = config.location;
    this._name = config.name;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._privateLinkEnabled = config.privateLinkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._addonProfile = config.addonProfile;
    this._defaultNodePool = config.defaultNodePool;
    this._identity = config.identity;
    this._linuxProfile = config.linuxProfile;
    this._networkProfile = config.networkProfile;
    this._roleBasedAccessControl = config.roleBasedAccessControl;
    this._servicePrincipal = config.servicePrincipal;
    this._timeouts = config.timeouts;
    this._windowsProfile = config.windowsProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_authorized_ip_ranges - computed: false, optional: true, required: false
  private _apiServerAuthorizedIpRanges?: string[];
  public get apiServerAuthorizedIpRanges() {
    return this._apiServerAuthorizedIpRanges;
  }
  public set apiServerAuthorizedIpRanges(value: string[] | undefined) {
    this._apiServerAuthorizedIpRanges = value;
  }

  // dns_prefix - computed: false, optional: false, required: true
  private _dnsPrefix: string;
  public get dnsPrefix() {
    return this._dnsPrefix;
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean;
  public get enablePodSecurityPolicy() {
    return this._enablePodSecurityPolicy;
  }
  public set enablePodSecurityPolicy(value: boolean | undefined) {
    this._enablePodSecurityPolicy = value;
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kube_admin_config - computed: true, optional: false, required: true
  public kubeAdminConfig(index: string) {
    return new KubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: true
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: true
  public kubeConfig(index: string) {
    return new KubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: true
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string;
  public get kubernetesVersion() {
    return this._kubernetesVersion ?? this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string | undefined) {
    this._kubernetesVersion = value;
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

  // node_resource_group - computed: true, optional: true, required: false
  private _nodeResourceGroup?: string;
  public get nodeResourceGroup() {
    return this._nodeResourceGroup ?? this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string | undefined) {
    this._nodeResourceGroup = value;
  }

  // private_fqdn - computed: true, optional: false, required: true
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: false, optional: true, required: false
  private _privateLinkEnabled?: boolean;
  public get privateLinkEnabled() {
    return this._privateLinkEnabled;
  }
  public set privateLinkEnabled(value: boolean | undefined) {
    this._privateLinkEnabled = value;
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

  // addon_profile - computed: false, optional: true, required: false
  private _addonProfile?: KubernetesClusterAddonProfile[];
  public get addonProfile() {
    return this._addonProfile;
  }
  public set addonProfile(value: KubernetesClusterAddonProfile[] | undefined) {
    this._addonProfile = value;
  }

  // default_node_pool - computed: false, optional: false, required: true
  private _defaultNodePool: KubernetesClusterDefaultNodePool[];
  public get defaultNodePool() {
    return this._defaultNodePool;
  }
  public set defaultNodePool(value: KubernetesClusterDefaultNodePool[]) {
    this._defaultNodePool = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KubernetesClusterIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: KubernetesClusterIdentity[] | undefined) {
    this._identity = value;
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile?: KubernetesClusterLinuxProfile[];
  public get linuxProfile() {
    return this._linuxProfile;
  }
  public set linuxProfile(value: KubernetesClusterLinuxProfile[] | undefined) {
    this._linuxProfile = value;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile?: KubernetesClusterNetworkProfile[];
  public get networkProfile() {
    return this._networkProfile;
  }
  public set networkProfile(value: KubernetesClusterNetworkProfile[] | undefined) {
    this._networkProfile = value;
  }

  // role_based_access_control - computed: false, optional: true, required: false
  private _roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  public get roleBasedAccessControl() {
    return this._roleBasedAccessControl;
  }
  public set roleBasedAccessControl(value: KubernetesClusterRoleBasedAccessControl[] | undefined) {
    this._roleBasedAccessControl = value;
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal: KubernetesClusterServicePrincipal[];
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public set servicePrincipal(value: KubernetesClusterServicePrincipal[]) {
    this._servicePrincipal = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KubernetesClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile?: KubernetesClusterWindowsProfile[];
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public set windowsProfile(value: KubernetesClusterWindowsProfile[] | undefined) {
    this._windowsProfile = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_server_authorized_ip_ranges: this._apiServerAuthorizedIpRanges,
      dns_prefix: this._dnsPrefix,
      enable_pod_security_policy: this._enablePodSecurityPolicy,
      kubernetes_version: this._kubernetesVersion,
      location: this._location,
      name: this._name,
      node_resource_group: this._nodeResourceGroup,
      private_link_enabled: this._privateLinkEnabled,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      addon_profile: this._addonProfile,
      default_node_pool: this._defaultNodePool,
      identity: this._identity,
      linux_profile: this._linuxProfile,
      network_profile: this._networkProfile,
      role_based_access_control: this._roleBasedAccessControl,
      service_principal: this._servicePrincipal,
      timeouts: this._timeouts,
      windows_profile: this._windowsProfile,
    };
  }
}
