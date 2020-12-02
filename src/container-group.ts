// https://www.terraform.io/docs/providers/azurerm/r/container_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerGroupConfig extends TerraformMetaArguments {
  readonly dnsNameLabel?: string;
  readonly ipAddressType?: string;
  readonly location: string;
  readonly name: string;
  readonly networkProfileId?: string;
  readonly osType: string;
  readonly resourceGroupName: string;
  readonly restartPolicy?: string;
  readonly tags?: { [key: string]: string };
  /** container block */
  readonly container: ContainerGroupContainer[];
  /** diagnostics block */
  readonly diagnostics?: ContainerGroupDiagnostics[];
  /** dns_config block */
  readonly dnsConfig?: ContainerGroupDnsConfig[];
  /** identity block */
  readonly identity?: ContainerGroupIdentity[];
  /** image_registry_credential block */
  readonly imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  /** timeouts block */
  readonly timeouts?: ContainerGroupTimeouts;
}
export interface ContainerGroupContainerGpu {
  readonly count?: number;
  readonly sku?: string;
}
export interface ContainerGroupContainerLivenessProbeHttpGet {
  readonly path?: string;
  readonly port?: number;
  readonly scheme?: string;
}
export interface ContainerGroupContainerLivenessProbe {
  readonly exec?: string[];
  readonly failureThreshold?: number;
  readonly initialDelaySeconds?: number;
  readonly periodSeconds?: number;
  readonly successThreshold?: number;
  readonly timeoutSeconds?: number;
  /** http_get block */
  readonly httpGet?: ContainerGroupContainerLivenessProbeHttpGet[];
}
export interface ContainerGroupContainerPorts {
  readonly port?: number;
  readonly protocol?: string;
}
export interface ContainerGroupContainerReadinessProbeHttpGet {
  readonly path?: string;
  readonly port?: number;
  readonly scheme?: string;
}
export interface ContainerGroupContainerReadinessProbe {
  readonly exec?: string[];
  readonly failureThreshold?: number;
  readonly initialDelaySeconds?: number;
  readonly periodSeconds?: number;
  readonly successThreshold?: number;
  readonly timeoutSeconds?: number;
  /** http_get block */
  readonly httpGet?: ContainerGroupContainerReadinessProbeHttpGet[];
}
export interface ContainerGroupContainerVolumeGitRepo {
  readonly directory?: string;
  readonly revision?: string;
  readonly url: string;
}
export interface ContainerGroupContainerVolume {
  readonly mountPath: string;
  readonly name: string;
  readonly readOnly?: boolean;
  readonly secret?: { [key: string]: string };
  readonly shareName?: string;
  readonly storageAccountKey?: string;
  readonly storageAccountName?: string;
  /** git_repo block */
  readonly gitRepo?: ContainerGroupContainerVolumeGitRepo[];
}
export interface ContainerGroupContainer {
  readonly commands?: string[];
  readonly cpu: number;
  readonly environmentVariables?: { [key: string]: string };
  readonly image: string;
  readonly memory: number;
  readonly name: string;
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /** gpu block */
  readonly gpu?: ContainerGroupContainerGpu[];
  /** liveness_probe block */
  readonly livenessProbe?: ContainerGroupContainerLivenessProbe[];
  /** ports block */
  readonly ports?: ContainerGroupContainerPorts[];
  /** readiness_probe block */
  readonly readinessProbe?: ContainerGroupContainerReadinessProbe[];
  /** volume block */
  readonly volume?: ContainerGroupContainerVolume[];
}
export interface ContainerGroupDiagnosticsLogAnalytics {
  readonly logType?: string;
  readonly metadata?: { [key: string]: string };
  readonly workspaceId: string;
  readonly workspaceKey: string;
}
export interface ContainerGroupDiagnostics {
  /** log_analytics block */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics[];
}
export interface ContainerGroupDnsConfig {
  readonly nameservers: string[];
  readonly options: string[];
  readonly searchDomains: string[];
}
export interface ContainerGroupIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface ContainerGroupImageRegistryCredential {
  readonly password: string;
  readonly server: string;
  readonly username: string;
}
export interface ContainerGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ContainerGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsNameLabel = config.dnsNameLabel;
    this._ipAddressType = config.ipAddressType;
    this._location = config.location;
    this._name = config.name;
    this._networkProfileId = config.networkProfileId;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._restartPolicy = config.restartPolicy;
    this._tags = config.tags;
    this._container = config.container;
    this._diagnostics = config.diagnostics;
    this._dnsConfig = config.dnsConfig;
    this._identity = config.identity;
    this._imageRegistryCredential = config.imageRegistryCredential;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name_label - computed: false, optional: true, required: false
  private _dnsNameLabel?: string;
  public get dnsNameLabel() {
    return this.getStringAttribute('dns_name_label');
  }
  public set dnsNameLabel(value: string ) {
    this._dnsNameLabel = value;
  }
  public resetDnsNameLabel() {
    this._dnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelInput() {
    return this._dnsNameLabel
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string ) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
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

  // network_profile_id - computed: false, optional: true, required: false
  private _networkProfileId?: string;
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string ) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId
  }

  // os_type - computed: false, optional: false, required: true
  private _osType: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
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

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string;
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string ) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy
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

  // container - computed: false, optional: false, required: true
  private _container: ContainerGroupContainer[];
  public get container() {
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: ContainerGroupContainer[]) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // diagnostics - computed: false, optional: true, required: false
  private _diagnostics?: ContainerGroupDiagnostics[];
  public get diagnostics() {
    return this.interpolationForAttribute('diagnostics') as any;
  }
  public set diagnostics(value: ContainerGroupDiagnostics[] ) {
    this._diagnostics = value;
  }
  public resetDiagnostics() {
    this._diagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsInput() {
    return this._diagnostics
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: ContainerGroupDnsConfig[];
  public get dnsConfig() {
    return this.interpolationForAttribute('dns_config') as any;
  }
  public set dnsConfig(value: ContainerGroupDnsConfig[] ) {
    this._dnsConfig = value;
  }
  public resetDnsConfig() {
    this._dnsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ContainerGroupIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ContainerGroupIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  public get imageRegistryCredential() {
    return this.interpolationForAttribute('image_registry_credential') as any;
  }
  public set imageRegistryCredential(value: ContainerGroupImageRegistryCredential[] ) {
    this._imageRegistryCredential = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerGroupTimeouts ) {
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
      dns_name_label: this._dnsNameLabel,
      ip_address_type: this._ipAddressType,
      location: this._location,
      name: this._name,
      network_profile_id: this._networkProfileId,
      os_type: this._osType,
      resource_group_name: this._resourceGroupName,
      restart_policy: this._restartPolicy,
      tags: this._tags,
      container: this._container,
      diagnostics: this._diagnostics,
      dns_config: this._dnsConfig,
      identity: this._identity,
      image_registry_credential: this._imageRegistryCredential,
      timeouts: this._timeouts,
    };
  }
}
