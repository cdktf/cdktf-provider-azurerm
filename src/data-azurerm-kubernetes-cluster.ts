// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKubernetesClusterConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKubernetesClusterTimeouts;
}
export class DataAzurermKubernetesClusterAddonProfileAzurePolicy extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: true
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
  }
}
export class DataAzurermKubernetesClusterAddonProfileKubeDashboard extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterAddonProfileOmsAgent extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_analytics_workspace_id - computed: true, optional: false, required: true
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
}
export class DataAzurermKubernetesClusterAddonProfile extends ComplexComputedList {

  // azure_policy - computed: true, optional: false, required: true
  public get azurePolicy() {
    return 'not implemented' as any;
  }

  // http_application_routing - computed: true, optional: false, required: true
  public get httpApplicationRouting() {
    return 'not implemented' as any;
  }

  // kube_dashboard - computed: true, optional: false, required: true
  public get kubeDashboard() {
    return 'not implemented' as any;
  }

  // oms_agent - computed: true, optional: false, required: true
  public get omsAgent() {
    return 'not implemented' as any;
  }
}
export class DataAzurermKubernetesClusterAgentPoolProfile extends ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // count - computed: true, optional: false, required: true
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enable_auto_scaling - computed: true, optional: false, required: true
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }

  // enable_node_public_ip - computed: true, optional: false, required: true
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }

  // max_count - computed: true, optional: false, required: true
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: true
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // min_count - computed: true, optional: false, required: true
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_taints - computed: true, optional: false, required: true
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }

  // os_disk_size_gb - computed: true, optional: false, required: true
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_type - computed: true, optional: false, required: true
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // vm_size - computed: true, optional: false, required: true
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: true
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
}
export class DataAzurermKubernetesClusterKubeAdminConfig extends ComplexComputedList {

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
export class DataAzurermKubernetesClusterKubeConfig extends ComplexComputedList {

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
export class DataAzurermKubernetesClusterLinuxProfileSshKey extends ComplexComputedList {

  // key_data - computed: true, optional: false, required: true
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
}
export class DataAzurermKubernetesClusterLinuxProfile extends ComplexComputedList {

  // admin_username - computed: true, optional: false, required: true
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // ssh_key - computed: true, optional: false, required: true
  public get sshKey() {
    return 'not implemented' as any;
  }
}
export class DataAzurermKubernetesClusterNetworkProfile extends ComplexComputedList {

  // dns_service_ip - computed: true, optional: false, required: true
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }

  // docker_bridge_cidr - computed: true, optional: false, required: true
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }

  // load_balancer_sku - computed: true, optional: false, required: true
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // network_plugin - computed: true, optional: false, required: true
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }

  // network_policy - computed: true, optional: false, required: true
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }

  // pod_cidr - computed: true, optional: false, required: true
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // service_cidr - computed: true, optional: false, required: true
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
}
export class DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory extends ComplexComputedList {

  // client_app_id - computed: true, optional: false, required: true
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }

  // server_app_id - computed: true, optional: false, required: true
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export class DataAzurermKubernetesClusterRoleBasedAccessControl extends ComplexComputedList {

  // azure_active_directory - computed: true, optional: false, required: true
  public get azureActiveDirectory() {
    return 'not implemented' as any;
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterServicePrincipal extends ComplexComputedList {

  // client_id - computed: true, optional: false, required: true
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}
export class DataAzurermKubernetesClusterWindowsProfile extends ComplexComputedList {

  // admin_username - computed: true, optional: false, required: true
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
}
export interface DataAzurermKubernetesClusterTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKubernetesCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_profile - computed: true, optional: false, required: true
  public addonProfile(index: string) {
    return new DataAzurermKubernetesClusterAddonProfile(this, 'addon_profile', index);
  }

  // agent_pool_profile - computed: true, optional: false, required: true
  public agentPoolProfile(index: string) {
    return new DataAzurermKubernetesClusterAgentPoolProfile(this, 'agent_pool_profile', index);
  }

  // api_server_authorized_ip_ranges - computed: true, optional: false, required: true
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }

  // dns_prefix - computed: true, optional: false, required: true
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
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
    return new DataAzurermKubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: true
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: true
  public kubeConfig(index: string) {
    return new DataAzurermKubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: true
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: false, required: true
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // linux_profile - computed: true, optional: false, required: true
  public linuxProfile(index: string) {
    return new DataAzurermKubernetesClusterLinuxProfile(this, 'linux_profile', index);
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_profile - computed: true, optional: false, required: true
  public networkProfile(index: string) {
    return new DataAzurermKubernetesClusterNetworkProfile(this, 'network_profile', index);
  }

  // node_resource_group - computed: true, optional: false, required: true
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }

  // private_fqdn - computed: true, optional: false, required: true
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: false, required: true
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // role_based_access_control - computed: true, optional: false, required: true
  public roleBasedAccessControl(index: string) {
    return new DataAzurermKubernetesClusterRoleBasedAccessControl(this, 'role_based_access_control', index);
  }

  // service_principal - computed: true, optional: false, required: true
  public servicePrincipal(index: string) {
    return new DataAzurermKubernetesClusterServicePrincipal(this, 'service_principal', index);
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // windows_profile - computed: true, optional: false, required: true
  public windowsProfile(index: string) {
    return new DataAzurermKubernetesClusterWindowsProfile(this, 'windows_profile', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKubernetesClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
