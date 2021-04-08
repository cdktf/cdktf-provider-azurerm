// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricClusterConfig extends cdktf.TerraformMetaArguments {
  readonly addOnFeatures?: string[];
  readonly clusterCodeVersion?: string;
  readonly location: string;
  readonly managementEndpoint: string;
  readonly name: string;
  readonly reliabilityLevel: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly upgradeMode: string;
  readonly vmImage: string;
  /** azure_active_directory block */
  readonly azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory[];
  /** certificate block */
  readonly certificate?: ServiceFabricClusterCertificate[];
  /** certificate_common_names block */
  readonly certificateCommonNames?: ServiceFabricClusterCertificateCommonNames[];
  /** client_certificate_common_name block */
  readonly clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[];
  /** client_certificate_thumbprint block */
  readonly clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  /** diagnostics_config block */
  readonly diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig[];
  /** fabric_settings block */
  readonly fabricSettings?: ServiceFabricClusterFabricSettings[];
  /** node_type block */
  readonly nodeType: ServiceFabricClusterNodeType[];
  /** reverse_proxy_certificate block */
  readonly reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate[];
  /** reverse_proxy_certificate_common_names block */
  readonly reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames[];
  /** timeouts block */
  readonly timeouts?: ServiceFabricClusterTimeouts;
  /** upgrade_policy block */
  readonly upgradePolicy?: ServiceFabricClusterUpgradePolicy[];
}
export interface ServiceFabricClusterAzureActiveDirectory {
  readonly clientApplicationId: string;
  readonly clusterApplicationId: string;
  readonly tenantId: string;
}

function serviceFabricClusterAzureActiveDirectoryToTerraform(struct?: ServiceFabricClusterAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_application_id: cdktf.stringToTerraform(struct!.clientApplicationId),
    cluster_application_id: cdktf.stringToTerraform(struct!.clusterApplicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface ServiceFabricClusterCertificate {
  readonly thumbprint: string;
  readonly thumbprintSecondary?: string;
  readonly x509StoreName: string;
}

function serviceFabricClusterCertificateToTerraform(struct?: ServiceFabricClusterCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export interface ServiceFabricClusterCertificateCommonNamesCommonNames {
  readonly certificateCommonName: string;
  readonly certificateIssuerThumbprint?: string;
}

function serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterCertificateCommonNames {
  readonly x509StoreName: string;
  /** common_names block */
  readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNames[];
}

function serviceFabricClusterCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export interface ServiceFabricClusterClientCertificateCommonName {
  readonly commonName: string;
  readonly isAdmin: boolean;
  readonly issuerThumbprint?: string;
}

function serviceFabricClusterClientCertificateCommonNameToTerraform(struct?: ServiceFabricClusterClientCertificateCommonName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    issuer_thumbprint: cdktf.stringToTerraform(struct!.issuerThumbprint),
  }
}

export interface ServiceFabricClusterClientCertificateThumbprint {
  readonly isAdmin: boolean;
  readonly thumbprint: string;
}

function serviceFabricClusterClientCertificateThumbprintToTerraform(struct?: ServiceFabricClusterClientCertificateThumbprint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface ServiceFabricClusterDiagnosticsConfig {
  readonly blobEndpoint: string;
  readonly protectedAccountKeyName: string;
  readonly queueEndpoint: string;
  readonly storageAccountName: string;
  readonly tableEndpoint: string;
}

function serviceFabricClusterDiagnosticsConfigToTerraform(struct?: ServiceFabricClusterDiagnosticsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_endpoint: cdktf.stringToTerraform(struct!.blobEndpoint),
    protected_account_key_name: cdktf.stringToTerraform(struct!.protectedAccountKeyName),
    queue_endpoint: cdktf.stringToTerraform(struct!.queueEndpoint),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    table_endpoint: cdktf.stringToTerraform(struct!.tableEndpoint),
  }
}

export interface ServiceFabricClusterFabricSettings {
  readonly name: string;
  readonly parameters?: { [key: string]: string };
}

function serviceFabricClusterFabricSettingsToTerraform(struct?: ServiceFabricClusterFabricSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface ServiceFabricClusterNodeTypeApplicationPorts {
  readonly endPort: number;
  readonly startPort: number;
}

function serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct?: ServiceFabricClusterNodeTypeApplicationPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export interface ServiceFabricClusterNodeTypeEphemeralPorts {
  readonly endPort: number;
  readonly startPort: number;
}

function serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct?: ServiceFabricClusterNodeTypeEphemeralPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export interface ServiceFabricClusterNodeType {
  readonly capacities?: { [key: string]: string };
  readonly clientEndpointPort: number;
  readonly durabilityLevel?: string;
  readonly httpEndpointPort: number;
  readonly instanceCount: number;
  readonly isPrimary: boolean;
  readonly name: string;
  readonly placementProperties?: { [key: string]: string };
  readonly reverseProxyEndpointPort?: number;
  /** application_ports block */
  readonly applicationPorts?: ServiceFabricClusterNodeTypeApplicationPorts[];
  /** ephemeral_ports block */
  readonly ephemeralPorts?: ServiceFabricClusterNodeTypeEphemeralPorts[];
}

function serviceFabricClusterNodeTypeToTerraform(struct?: ServiceFabricClusterNodeType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacities: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.capacities),
    client_endpoint_port: cdktf.numberToTerraform(struct!.clientEndpointPort),
    durability_level: cdktf.stringToTerraform(struct!.durabilityLevel),
    http_endpoint_port: cdktf.numberToTerraform(struct!.httpEndpointPort),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    name: cdktf.stringToTerraform(struct!.name),
    placement_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.placementProperties),
    reverse_proxy_endpoint_port: cdktf.numberToTerraform(struct!.reverseProxyEndpointPort),
    application_ports: cdktf.listMapper(serviceFabricClusterNodeTypeApplicationPortsToTerraform)(struct!.applicationPorts),
    ephemeral_ports: cdktf.listMapper(serviceFabricClusterNodeTypeEphemeralPortsToTerraform)(struct!.ephemeralPorts),
  }
}

export interface ServiceFabricClusterReverseProxyCertificate {
  readonly thumbprint: string;
  readonly thumbprintSecondary?: string;
  readonly x509StoreName: string;
}

function serviceFabricClusterReverseProxyCertificateToTerraform(struct?: ServiceFabricClusterReverseProxyCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export interface ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames {
  readonly certificateCommonName: string;
  readonly certificateIssuerThumbprint?: string;
}

function serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterReverseProxyCertificateCommonNames {
  readonly x509StoreName: string;
  /** common_names block */
  readonly commonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
}

function serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export interface ServiceFabricClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function serviceFabricClusterTimeoutsToTerraform(struct?: ServiceFabricClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ServiceFabricClusterUpgradePolicyDeltaHealthPolicy {
  readonly maxDeltaUnhealthyApplicationsPercent?: number;
  readonly maxDeltaUnhealthyNodesPercent?: number;
  readonly maxUpgradeDomainDeltaUnhealthyNodesPercent?: number;
}

function serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_delta_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyApplicationsPercent),
    max_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyNodesPercent),
    max_upgrade_domain_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUpgradeDomainDeltaUnhealthyNodesPercent),
  }
}

export interface ServiceFabricClusterUpgradePolicyHealthPolicy {
  readonly maxUnhealthyApplicationsPercent?: number;
  readonly maxUnhealthyNodesPercent?: number;
}

function serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxUnhealthyApplicationsPercent),
    max_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUnhealthyNodesPercent),
  }
}

export interface ServiceFabricClusterUpgradePolicy {
  readonly forceRestartEnabled?: boolean;
  readonly healthCheckRetryTimeout?: string;
  readonly healthCheckStableDuration?: string;
  readonly healthCheckWaitDuration?: string;
  readonly upgradeDomainTimeout?: string;
  readonly upgradeReplicaSetCheckTimeout?: string;
  readonly upgradeTimeout?: string;
  /** delta_health_policy block */
  readonly deltaHealthPolicy?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy[];
  /** health_policy block */
  readonly healthPolicy?: ServiceFabricClusterUpgradePolicyHealthPolicy[];
}

function serviceFabricClusterUpgradePolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    force_restart_enabled: cdktf.booleanToTerraform(struct!.forceRestartEnabled),
    health_check_retry_timeout: cdktf.stringToTerraform(struct!.healthCheckRetryTimeout),
    health_check_stable_duration: cdktf.stringToTerraform(struct!.healthCheckStableDuration),
    health_check_wait_duration: cdktf.stringToTerraform(struct!.healthCheckWaitDuration),
    upgrade_domain_timeout: cdktf.stringToTerraform(struct!.upgradeDomainTimeout),
    upgrade_replica_set_check_timeout: cdktf.stringToTerraform(struct!.upgradeReplicaSetCheckTimeout),
    upgrade_timeout: cdktf.stringToTerraform(struct!.upgradeTimeout),
    delta_health_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform)(struct!.deltaHealthPolicy),
    health_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyHealthPolicyToTerraform)(struct!.healthPolicy),
  }
}


// Resource

export class ServiceFabricCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceFabricClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addOnFeatures = config.addOnFeatures;
    this._clusterCodeVersion = config.clusterCodeVersion;
    this._location = config.location;
    this._managementEndpoint = config.managementEndpoint;
    this._name = config.name;
    this._reliabilityLevel = config.reliabilityLevel;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._vmImage = config.vmImage;
    this._azureActiveDirectory = config.azureActiveDirectory;
    this._certificate = config.certificate;
    this._certificateCommonNames = config.certificateCommonNames;
    this._clientCertificateCommonName = config.clientCertificateCommonName;
    this._clientCertificateThumbprint = config.clientCertificateThumbprint;
    this._diagnosticsConfig = config.diagnosticsConfig;
    this._fabricSettings = config.fabricSettings;
    this._nodeType = config.nodeType;
    this._reverseProxyCertificate = config.reverseProxyCertificate;
    this._reverseProxyCertificateCommonNames = config.reverseProxyCertificateCommonNames;
    this._timeouts = config.timeouts;
    this._upgradePolicy = config.upgradePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: false, optional: true, required: false
  private _addOnFeatures?: string[];
  public get addOnFeatures() {
    return this.getListAttribute('add_on_features');
  }
  public set addOnFeatures(value: string[] ) {
    this._addOnFeatures = value;
  }
  public resetAddOnFeatures() {
    this._addOnFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnFeaturesInput() {
    return this._addOnFeatures
  }

  // cluster_code_version - computed: true, optional: true, required: false
  private _clusterCodeVersion?: string;
  public get clusterCodeVersion() {
    return this.getStringAttribute('cluster_code_version');
  }
  public set clusterCodeVersion(value: string) {
    this._clusterCodeVersion = value;
  }
  public resetClusterCodeVersion() {
    this._clusterCodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCodeVersionInput() {
    return this._clusterCodeVersion
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

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

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint
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

  // reliability_level - computed: false, optional: false, required: true
  private _reliabilityLevel: string;
  public get reliabilityLevel() {
    return this.getStringAttribute('reliability_level');
  }
  public set reliabilityLevel(value: string) {
    this._reliabilityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reliabilityLevelInput() {
    return this._reliabilityLevel
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

  // upgrade_mode - computed: false, optional: false, required: true
  private _upgradeMode: string;
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage: string;
  public get vmImage() {
    return this.getStringAttribute('vm_image');
  }
  public set vmImage(value: string) {
    this._vmImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory[];
  public get azureActiveDirectory() {
    return this.interpolationForAttribute('azure_active_directory') as any;
  }
  public set azureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory[] ) {
    this._azureActiveDirectory = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ServiceFabricClusterCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: ServiceFabricClusterCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_common_names - computed: false, optional: true, required: false
  private _certificateCommonNames?: ServiceFabricClusterCertificateCommonNames[];
  public get certificateCommonNames() {
    return this.interpolationForAttribute('certificate_common_names') as any;
  }
  public set certificateCommonNames(value: ServiceFabricClusterCertificateCommonNames[] ) {
    this._certificateCommonNames = value;
  }
  public resetCertificateCommonNames() {
    this._certificateCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNamesInput() {
    return this._certificateCommonNames
  }

  // client_certificate_common_name - computed: false, optional: true, required: false
  private _clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[];
  public get clientCertificateCommonName() {
    return this.interpolationForAttribute('client_certificate_common_name') as any;
  }
  public set clientCertificateCommonName(value: ServiceFabricClusterClientCertificateCommonName[] ) {
    this._clientCertificateCommonName = value;
  }
  public resetClientCertificateCommonName() {
    this._clientCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateCommonNameInput() {
    return this._clientCertificateCommonName
  }

  // client_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  public get clientCertificateThumbprint() {
    return this.interpolationForAttribute('client_certificate_thumbprint') as any;
  }
  public set clientCertificateThumbprint(value: ServiceFabricClusterClientCertificateThumbprint[] ) {
    this._clientCertificateThumbprint = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint
  }

  // diagnostics_config - computed: false, optional: true, required: false
  private _diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig[];
  public get diagnosticsConfig() {
    return this.interpolationForAttribute('diagnostics_config') as any;
  }
  public set diagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig[] ) {
    this._diagnosticsConfig = value;
  }
  public resetDiagnosticsConfig() {
    this._diagnosticsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsConfigInput() {
    return this._diagnosticsConfig
  }

  // fabric_settings - computed: false, optional: true, required: false
  private _fabricSettings?: ServiceFabricClusterFabricSettings[];
  public get fabricSettings() {
    return this.interpolationForAttribute('fabric_settings') as any;
  }
  public set fabricSettings(value: ServiceFabricClusterFabricSettings[] ) {
    this._fabricSettings = value;
  }
  public resetFabricSettings() {
    this._fabricSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSettingsInput() {
    return this._fabricSettings
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: ServiceFabricClusterNodeType[];
  public get nodeType() {
    return this.interpolationForAttribute('node_type') as any;
  }
  public set nodeType(value: ServiceFabricClusterNodeType[]) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // reverse_proxy_certificate - computed: false, optional: true, required: false
  private _reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate[];
  public get reverseProxyCertificate() {
    return this.interpolationForAttribute('reverse_proxy_certificate') as any;
  }
  public set reverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate[] ) {
    this._reverseProxyCertificate = value;
  }
  public resetReverseProxyCertificate() {
    this._reverseProxyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateInput() {
    return this._reverseProxyCertificate
  }

  // reverse_proxy_certificate_common_names - computed: false, optional: true, required: false
  private _reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames[];
  public get reverseProxyCertificateCommonNames() {
    return this.interpolationForAttribute('reverse_proxy_certificate_common_names') as any;
  }
  public set reverseProxyCertificateCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNames[] ) {
    this._reverseProxyCertificateCommonNames = value;
  }
  public resetReverseProxyCertificateCommonNames() {
    this._reverseProxyCertificateCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateCommonNamesInput() {
    return this._reverseProxyCertificateCommonNames
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceFabricClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServiceFabricClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy?: ServiceFabricClusterUpgradePolicy[];
  public get upgradePolicy() {
    return this.interpolationForAttribute('upgrade_policy') as any;
  }
  public set upgradePolicy(value: ServiceFabricClusterUpgradePolicy[] ) {
    this._upgradePolicy = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_features: cdktf.listMapper(cdktf.stringToTerraform)(this._addOnFeatures),
      cluster_code_version: cdktf.stringToTerraform(this._clusterCodeVersion),
      location: cdktf.stringToTerraform(this._location),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      name: cdktf.stringToTerraform(this._name),
      reliability_level: cdktf.stringToTerraform(this._reliabilityLevel),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vm_image: cdktf.stringToTerraform(this._vmImage),
      azure_active_directory: cdktf.listMapper(serviceFabricClusterAzureActiveDirectoryToTerraform)(this._azureActiveDirectory),
      certificate: cdktf.listMapper(serviceFabricClusterCertificateToTerraform)(this._certificate),
      certificate_common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesToTerraform)(this._certificateCommonNames),
      client_certificate_common_name: cdktf.listMapper(serviceFabricClusterClientCertificateCommonNameToTerraform)(this._clientCertificateCommonName),
      client_certificate_thumbprint: cdktf.listMapper(serviceFabricClusterClientCertificateThumbprintToTerraform)(this._clientCertificateThumbprint),
      diagnostics_config: cdktf.listMapper(serviceFabricClusterDiagnosticsConfigToTerraform)(this._diagnosticsConfig),
      fabric_settings: cdktf.listMapper(serviceFabricClusterFabricSettingsToTerraform)(this._fabricSettings),
      node_type: cdktf.listMapper(serviceFabricClusterNodeTypeToTerraform)(this._nodeType),
      reverse_proxy_certificate: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateToTerraform)(this._reverseProxyCertificate),
      reverse_proxy_certificate_common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform)(this._reverseProxyCertificateCommonNames),
      timeouts: serviceFabricClusterTimeoutsToTerraform(this._timeouts),
      upgrade_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyToTerraform)(this._upgradePolicy),
    };
  }
}
