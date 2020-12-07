// https://www.terraform.io/docs/providers/azurerm/r/container_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerGroupConfig extends cdktf.TerraformMetaArguments {
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

function containerGroupContainerGpuToTerraform(struct?: ContainerGroupContainerGpu): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export interface ContainerGroupContainerLivenessProbeHttpGet {
  readonly path?: string;
  readonly port?: number;
  readonly scheme?: string;
}

function containerGroupContainerLivenessProbeHttpGetToTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
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

function containerGroupContainerLivenessProbeToTerraform(struct?: ContainerGroupContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
  }
}

export interface ContainerGroupContainerPorts {
  readonly port?: number;
  readonly protocol?: string;
}

function containerGroupContainerPortsToTerraform(struct?: ContainerGroupContainerPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerGroupContainerReadinessProbeHttpGet {
  readonly path?: string;
  readonly port?: number;
  readonly scheme?: string;
}

function containerGroupContainerReadinessProbeHttpGetToTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
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

function containerGroupContainerReadinessProbeToTerraform(struct?: ContainerGroupContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
  }
}

export interface ContainerGroupContainerVolumeGitRepo {
  readonly directory?: string;
  readonly revision?: string;
  readonly url: string;
}

function containerGroupContainerVolumeGitRepoToTerraform(struct?: ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    revision: cdktf.stringToTerraform(struct!.revision),
    url: cdktf.stringToTerraform(struct!.url),
  }
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

function containerGroupContainerVolumeToTerraform(struct?: ContainerGroupContainerVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secret),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    git_repo: cdktf.listMapper(containerGroupContainerVolumeGitRepoToTerraform)(struct!.gitRepo),
  }
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

function containerGroupContainerToTerraform(struct?: ContainerGroupContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    secure_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secureEnvironmentVariables),
    gpu: cdktf.listMapper(containerGroupContainerGpuToTerraform)(struct!.gpu),
    liveness_probe: cdktf.listMapper(containerGroupContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    ports: cdktf.listMapper(containerGroupContainerPortsToTerraform)(struct!.ports),
    readiness_probe: cdktf.listMapper(containerGroupContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    volume: cdktf.listMapper(containerGroupContainerVolumeToTerraform)(struct!.volume),
  }
}

export interface ContainerGroupDiagnosticsLogAnalytics {
  readonly logType?: string;
  readonly metadata?: { [key: string]: string };
  readonly workspaceId: string;
  readonly workspaceKey: string;
}

function containerGroupDiagnosticsLogAnalyticsToTerraform(struct?: ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_type: cdktf.stringToTerraform(struct!.logType),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_key: cdktf.stringToTerraform(struct!.workspaceKey),
  }
}

export interface ContainerGroupDiagnostics {
  /** log_analytics block */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics[];
}

function containerGroupDiagnosticsToTerraform(struct?: ContainerGroupDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics: cdktf.listMapper(containerGroupDiagnosticsLogAnalyticsToTerraform)(struct!.logAnalytics),
  }
}

export interface ContainerGroupDnsConfig {
  readonly nameservers: string[];
  readonly options: string[];
  readonly searchDomains: string[];
}

function containerGroupDnsConfigToTerraform(struct?: ContainerGroupDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchDomains),
  }
}

export interface ContainerGroupIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function containerGroupIdentityToTerraform(struct?: ContainerGroupIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerGroupImageRegistryCredential {
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function containerGroupImageRegistryCredentialToTerraform(struct?: ContainerGroupImageRegistryCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface ContainerGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function containerGroupTimeoutsToTerraform(struct?: ContainerGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ContainerGroup extends cdktf.TerraformResource {

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
      dns_name_label: cdktf.stringToTerraform(this._dnsNameLabel),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      container: cdktf.listMapper(containerGroupContainerToTerraform)(this._container),
      diagnostics: cdktf.listMapper(containerGroupDiagnosticsToTerraform)(this._diagnostics),
      dns_config: cdktf.listMapper(containerGroupDnsConfigToTerraform)(this._dnsConfig),
      identity: cdktf.listMapper(containerGroupIdentityToTerraform)(this._identity),
      image_registry_credential: cdktf.listMapper(containerGroupImageRegistryCredentialToTerraform)(this._imageRegistryCredential),
      timeouts: containerGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
