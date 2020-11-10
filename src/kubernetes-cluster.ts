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

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class KubernetesClusterKubeConfig extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
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
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }
  public set apiServerAuthorizedIpRanges(value: string[] ) {
    this._apiServerAuthorizedIpRanges = value;
  }
  public resetApiServerAuthorizedIpRanges() {
    this._apiServerAuthorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAuthorizedIpRangesInput() {
    return this._apiServerAuthorizedIpRanges
  }

  // dns_prefix - computed: false, optional: false, required: true
  private _dnsPrefix: string;
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean;
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean ) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kube_admin_config - computed: true, optional: false, required: false
  public kubeAdminConfig(index: string) {
    return new KubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  public kubeConfig(index: string) {
    return new KubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string;
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion
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

  // node_resource_group - computed: true, optional: true, required: false
  private _nodeResourceGroup?: string;
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: false, optional: true, required: false
  private _privateLinkEnabled?: boolean;
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean ) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled
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

  // addon_profile - computed: false, optional: true, required: false
  private _addonProfile?: KubernetesClusterAddonProfile[];
  public get addonProfile() {
    return this.interpolationForAttribute('addon_profile') as any;
  }
  public set addonProfile(value: KubernetesClusterAddonProfile[] ) {
    this._addonProfile = value;
  }
  public resetAddonProfile() {
    this._addonProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonProfileInput() {
    return this._addonProfile
  }

  // default_node_pool - computed: false, optional: false, required: true
  private _defaultNodePool: KubernetesClusterDefaultNodePool[];
  public get defaultNodePool() {
    return this.interpolationForAttribute('default_node_pool') as any;
  }
  public set defaultNodePool(value: KubernetesClusterDefaultNodePool[]) {
    this._defaultNodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodePoolInput() {
    return this._defaultNodePool
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KubernetesClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: KubernetesClusterIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile?: KubernetesClusterLinuxProfile[];
  public get linuxProfile() {
    return this.interpolationForAttribute('linux_profile') as any;
  }
  public set linuxProfile(value: KubernetesClusterLinuxProfile[] ) {
    this._linuxProfile = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile?: KubernetesClusterNetworkProfile[];
  public get networkProfile() {
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: KubernetesClusterNetworkProfile[] ) {
    this._networkProfile = value;
  }
  public resetNetworkProfile() {
    this._networkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // role_based_access_control - computed: false, optional: true, required: false
  private _roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  public get roleBasedAccessControl() {
    return this.interpolationForAttribute('role_based_access_control') as any;
  }
  public set roleBasedAccessControl(value: KubernetesClusterRoleBasedAccessControl[] ) {
    this._roleBasedAccessControl = value;
  }
  public resetRoleBasedAccessControl() {
    this._roleBasedAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAccessControlInput() {
    return this._roleBasedAccessControl
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal: KubernetesClusterServicePrincipal[];
  public get servicePrincipal() {
    return this.interpolationForAttribute('service_principal') as any;
  }
  public set servicePrincipal(value: KubernetesClusterServicePrincipal[]) {
    this._servicePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KubernetesClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile?: KubernetesClusterWindowsProfile[];
  public get windowsProfile() {
    return this.interpolationForAttribute('windows_profile') as any;
  }
  public set windowsProfile(value: KubernetesClusterWindowsProfile[] ) {
    this._windowsProfile = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile
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
