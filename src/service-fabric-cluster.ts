// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceFabricClusterConfig extends TerraformMetaArguments {
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
  /** timeouts block */
  readonly timeouts?: ServiceFabricClusterTimeouts;
}
export interface ServiceFabricClusterAzureActiveDirectory {
  readonly clientApplicationId: string;
  readonly clusterApplicationId: string;
  readonly tenantId: string;
}
export interface ServiceFabricClusterCertificate {
  readonly thumbprint: string;
  readonly thumbprintSecondary?: string;
  readonly x509StoreName: string;
}
export interface ServiceFabricClusterCertificateCommonNamesCommonNames {
  readonly certificateCommonName: string;
  readonly certificateIssuerThumbprint?: string;
}
export interface ServiceFabricClusterCertificateCommonNames {
  readonly x509StoreName: string;
  /** common_names block */
  readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNames[];
}
export interface ServiceFabricClusterClientCertificateCommonName {
  readonly commonName: string;
  readonly isAdmin: boolean;
  readonly issuerThumbprint?: string;
}
export interface ServiceFabricClusterClientCertificateThumbprint {
  readonly isAdmin: boolean;
  readonly thumbprint: string;
}
export interface ServiceFabricClusterDiagnosticsConfig {
  readonly blobEndpoint: string;
  readonly protectedAccountKeyName: string;
  readonly queueEndpoint: string;
  readonly storageAccountName: string;
  readonly tableEndpoint: string;
}
export interface ServiceFabricClusterFabricSettings {
  readonly name: string;
  readonly parameters?: { [key: string]: string };
}
export interface ServiceFabricClusterNodeTypeApplicationPorts {
  readonly endPort: number;
  readonly startPort: number;
}
export interface ServiceFabricClusterNodeTypeEphemeralPorts {
  readonly endPort: number;
  readonly startPort: number;
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
export interface ServiceFabricClusterReverseProxyCertificate {
  readonly thumbprint: string;
  readonly thumbprintSecondary?: string;
  readonly x509StoreName: string;
}
export interface ServiceFabricClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServiceFabricCluster extends TerraformResource {

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
    this._timeouts = config.timeouts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_features: this._addOnFeatures,
      cluster_code_version: this._clusterCodeVersion,
      location: this._location,
      management_endpoint: this._managementEndpoint,
      name: this._name,
      reliability_level: this._reliabilityLevel,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      upgrade_mode: this._upgradeMode,
      vm_image: this._vmImage,
      azure_active_directory: this._azureActiveDirectory,
      certificate: this._certificate,
      certificate_common_names: this._certificateCommonNames,
      client_certificate_common_name: this._clientCertificateCommonName,
      client_certificate_thumbprint: this._clientCertificateThumbprint,
      diagnostics_config: this._diagnosticsConfig,
      fabric_settings: this._fabricSettings,
      node_type: this._nodeType,
      reverse_proxy_certificate: this._reverseProxyCertificate,
      timeouts: this._timeouts,
    };
  }
}
