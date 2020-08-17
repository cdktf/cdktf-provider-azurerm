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
export interface ContainerGroupContainerVolume {
  readonly mountPath: string;
  readonly name: string;
  readonly readOnly?: boolean;
  readonly shareName: string;
  readonly storageAccountKey: string;
  readonly storageAccountName: string;
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
    return this._dnsNameLabel;
  }
  public set dnsNameLabel(value: string | undefined) {
    this._dnsNameLabel = value;
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

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this._ipAddressType;
  }
  public set ipAddressType(value: string | undefined) {
    this._ipAddressType = value;
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

  // network_profile_id - computed: false, optional: true, required: false
  private _networkProfileId?: string;
  public get networkProfileId() {
    return this._networkProfileId;
  }
  public set networkProfileId(value: string | undefined) {
    this._networkProfileId = value;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType: string;
  public get osType() {
    return this._osType;
  }
  public set osType(value: string) {
    this._osType = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string;
  public get restartPolicy() {
    return this._restartPolicy;
  }
  public set restartPolicy(value: string | undefined) {
    this._restartPolicy = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // container - computed: false, optional: false, required: true
  private _container: ContainerGroupContainer[];
  public get container() {
    return this._container;
  }
  public set container(value: ContainerGroupContainer[]) {
    this._container = value;
  }

  // diagnostics - computed: false, optional: true, required: false
  private _diagnostics?: ContainerGroupDiagnostics[];
  public get diagnostics() {
    return this._diagnostics;
  }
  public set diagnostics(value: ContainerGroupDiagnostics[] | undefined) {
    this._diagnostics = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ContainerGroupIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: ContainerGroupIdentity[] | undefined) {
    this._identity = value;
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  public get imageRegistryCredential() {
    return this._imageRegistryCredential;
  }
  public set imageRegistryCredential(value: ContainerGroupImageRegistryCredential[] | undefined) {
    this._imageRegistryCredential = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
      identity: this._identity,
      image_registry_credential: this._imageRegistryCredential,
      timeouts: this._timeouts,
    };
  }
}
