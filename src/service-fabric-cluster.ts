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
    return this._addOnFeatures;
  }
  public set addOnFeatures(value: string[] | undefined) {
    this._addOnFeatures = value;
  }

  // cluster_code_version - computed: true, optional: true, required: false
  private _clusterCodeVersion?: string;
  public get clusterCodeVersion() {
    return this._clusterCodeVersion ?? this.getStringAttribute('cluster_code_version');
  }
  public set clusterCodeVersion(value: string | undefined) {
    this._clusterCodeVersion = value;
  }

  // cluster_endpoint - computed: true, optional: false, required: true
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

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

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // reliability_level - computed: false, optional: false, required: true
  private _reliabilityLevel: string;
  public get reliabilityLevel() {
    return this._reliabilityLevel;
  }
  public set reliabilityLevel(value: string) {
    this._reliabilityLevel = value;
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

  // upgrade_mode - computed: false, optional: false, required: true
  private _upgradeMode: string;
  public get upgradeMode() {
    return this._upgradeMode;
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage: string;
  public get vmImage() {
    return this._vmImage;
  }
  public set vmImage(value: string) {
    this._vmImage = value;
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory[];
  public get azureActiveDirectory() {
    return this._azureActiveDirectory;
  }
  public set azureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory[] | undefined) {
    this._azureActiveDirectory = value;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ServiceFabricClusterCertificate[];
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: ServiceFabricClusterCertificate[] | undefined) {
    this._certificate = value;
  }

  // certificate_common_names - computed: false, optional: true, required: false
  private _certificateCommonNames?: ServiceFabricClusterCertificateCommonNames[];
  public get certificateCommonNames() {
    return this._certificateCommonNames;
  }
  public set certificateCommonNames(value: ServiceFabricClusterCertificateCommonNames[] | undefined) {
    this._certificateCommonNames = value;
  }

  // client_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  public get clientCertificateThumbprint() {
    return this._clientCertificateThumbprint;
  }
  public set clientCertificateThumbprint(value: ServiceFabricClusterClientCertificateThumbprint[] | undefined) {
    this._clientCertificateThumbprint = value;
  }

  // diagnostics_config - computed: false, optional: true, required: false
  private _diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig[];
  public get diagnosticsConfig() {
    return this._diagnosticsConfig;
  }
  public set diagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig[] | undefined) {
    this._diagnosticsConfig = value;
  }

  // fabric_settings - computed: false, optional: true, required: false
  private _fabricSettings?: ServiceFabricClusterFabricSettings[];
  public get fabricSettings() {
    return this._fabricSettings;
  }
  public set fabricSettings(value: ServiceFabricClusterFabricSettings[] | undefined) {
    this._fabricSettings = value;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: ServiceFabricClusterNodeType[];
  public get nodeType() {
    return this._nodeType;
  }
  public set nodeType(value: ServiceFabricClusterNodeType[]) {
    this._nodeType = value;
  }

  // reverse_proxy_certificate - computed: false, optional: true, required: false
  private _reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate[];
  public get reverseProxyCertificate() {
    return this._reverseProxyCertificate;
  }
  public set reverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate[] | undefined) {
    this._reverseProxyCertificate = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceFabricClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServiceFabricClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
      client_certificate_thumbprint: this._clientCertificateThumbprint,
      diagnostics_config: this._diagnosticsConfig,
      fabric_settings: this._fabricSettings,
      node_type: this._nodeType,
      reverse_proxy_certificate: this._reverseProxyCertificate,
      timeouts: this._timeouts,
    };
  }
}
