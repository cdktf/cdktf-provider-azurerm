// https://www.terraform.io/docs/providers/azurerm/r/container_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#dns_name_label ContainerGroup#dns_name_label}
  */
  readonly dnsNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exposed_port ContainerGroup#exposed_port}
  */
  readonly exposedPort?: ContainerGroupExposedPort[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#ip_address_type ContainerGroup#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#location ContainerGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#network_profile_id ContainerGroup#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#os_type ContainerGroup#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#resource_group_name ContainerGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#restart_policy ContainerGroup#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#tags ContainerGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#container ContainerGroup#container}
  */
  readonly container: ContainerGroupContainer[];
  /**
  * diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#diagnostics ContainerGroup#diagnostics}
  */
  readonly diagnostics?: ContainerGroupDiagnostics;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#dns_config ContainerGroup#dns_config}
  */
  readonly dnsConfig?: ContainerGroupDnsConfig;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#identity ContainerGroup#identity}
  */
  readonly identity?: ContainerGroupIdentity;
  /**
  * image_registry_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#image_registry_credential ContainerGroup#image_registry_credential}
  */
  readonly imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeouts ContainerGroup#timeouts}
  */
  readonly timeouts?: ContainerGroupTimeouts;
}
export interface ContainerGroupExposedPort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

function containerGroupExposedPortToTerraform(struct?: ContainerGroupExposedPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerGroupContainerGpu {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#count ContainerGroup#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#sku ContainerGroup#sku}
  */
  readonly sku?: string;
}

function containerGroupContainerGpuToTerraform(struct?: ContainerGroupContainerGpuOutputReference | ContainerGroupContainerGpu): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export class ContainerGroupContainerGpuOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: true, required: false
  private _count?: number | undefined; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number | undefined) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }
}
export interface ContainerGroupContainerLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

function containerGroupContainerLivenessProbeHttpGetToTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export interface ContainerGroupContainerLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerLivenessProbeHttpGet[];
}

function containerGroupContainerLivenessProbeToTerraform(struct?: ContainerGroupContainerLivenessProbeOutputReference | ContainerGroupContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ContainerGroupContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[] | undefined; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[] | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: ContainerGroupContainerLivenessProbeHttpGet[] | undefined; 
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get') as any;
  }
  public set httpGet(value: ContainerGroupContainerLivenessProbeHttpGet[] | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }
}
export interface ContainerGroupContainerPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

function containerGroupContainerPortsToTerraform(struct?: ContainerGroupContainerPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerGroupContainerReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

function containerGroupContainerReadinessProbeHttpGetToTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export interface ContainerGroupContainerReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerReadinessProbeHttpGet[];
}

function containerGroupContainerReadinessProbeToTerraform(struct?: ContainerGroupContainerReadinessProbeOutputReference | ContainerGroupContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ContainerGroupContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[] | undefined; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[] | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: ContainerGroupContainerReadinessProbeHttpGet[] | undefined; 
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get') as any;
  }
  public set httpGet(value: ContainerGroupContainerReadinessProbeHttpGet[] | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }
}
export interface ContainerGroupContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#url ContainerGroup#url}
  */
  readonly url: string;
}

function containerGroupContainerVolumeGitRepoToTerraform(struct?: ContainerGroupContainerVolumeGitRepoOutputReference | ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    revision: cdktf.stringToTerraform(struct!.revision),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ContainerGroupContainerVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string | undefined; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string | undefined) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string | undefined; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string | undefined) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }
}
export interface ContainerGroupContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupContainerVolumeGitRepo;
}

function containerGroupContainerVolumeToTerraform(struct?: ContainerGroupContainerVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secret),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    git_repo: containerGroupContainerVolumeGitRepoToTerraform(struct!.gitRepo),
  }
}

export interface ContainerGroupContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#cpu ContainerGroup#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#memory ContainerGroup#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * gpu block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#gpu ContainerGroup#gpu}
  */
  readonly gpu?: ContainerGroupContainerGpu;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#liveness_probe ContainerGroup#liveness_probe}
  */
  readonly livenessProbe?: ContainerGroupContainerLivenessProbe;
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#ports ContainerGroup#ports}
  */
  readonly ports?: ContainerGroupContainerPorts[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#readiness_probe ContainerGroup#readiness_probe}
  */
  readonly readinessProbe?: ContainerGroupContainerReadinessProbe;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupContainerVolume[];
}

function containerGroupContainerToTerraform(struct?: ContainerGroupContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    secure_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secureEnvironmentVariables),
    gpu: containerGroupContainerGpuToTerraform(struct!.gpu),
    liveness_probe: containerGroupContainerLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cdktf.listMapper(containerGroupContainerPortsToTerraform)(struct!.ports),
    readiness_probe: containerGroupContainerReadinessProbeToTerraform(struct!.readinessProbe),
    volume: cdktf.listMapper(containerGroupContainerVolumeToTerraform)(struct!.volume),
  }
}

export interface ContainerGroupDiagnosticsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#log_type ContainerGroup#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#metadata ContainerGroup#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#workspace_id ContainerGroup#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#workspace_key ContainerGroup#workspace_key}
  */
  readonly workspaceKey: string;
}

function containerGroupDiagnosticsLogAnalyticsToTerraform(struct?: ContainerGroupDiagnosticsLogAnalyticsOutputReference | ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_type: cdktf.stringToTerraform(struct!.logType),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_key: cdktf.stringToTerraform(struct!.workspaceKey),
  }
}

export class ContainerGroupDiagnosticsLogAnalyticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string | undefined; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string | undefined) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // workspace_key - computed: false, optional: false, required: true
  private _workspaceKey?: string; 
  public get workspaceKey() {
    return this.getStringAttribute('workspace_key');
  }
  public set workspaceKey(value: string) {
    this._workspaceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceKeyInput() {
    return this._workspaceKey
  }
}
export interface ContainerGroupDiagnostics {
  /**
  * log_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#log_analytics ContainerGroup#log_analytics}
  */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics;
}

function containerGroupDiagnosticsToTerraform(struct?: ContainerGroupDiagnosticsOutputReference | ContainerGroupDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics: containerGroupDiagnosticsLogAnalyticsToTerraform(struct!.logAnalytics),
  }
}

export class ContainerGroupDiagnosticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // log_analytics - computed: false, optional: false, required: true
  private _logAnalytics?: ContainerGroupDiagnosticsLogAnalytics; 
  private __logAnalyticsOutput = new ContainerGroupDiagnosticsLogAnalyticsOutputReference(this as any, "log_analytics", true);
  public get logAnalytics() {
    return this.__logAnalyticsOutput;
  }
  public putLogAnalytics(value: ContainerGroupDiagnosticsLogAnalytics) {
    this._logAnalytics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInput() {
    return this._logAnalytics
  }
}
export interface ContainerGroupDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#nameservers ContainerGroup#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#options ContainerGroup#options}
  */
  readonly options: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#search_domains ContainerGroup#search_domains}
  */
  readonly searchDomains: string[];
}

function containerGroupDnsConfigToTerraform(struct?: ContainerGroupDnsConfigOutputReference | ContainerGroupDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchDomains),
  }
}

export class ContainerGroupDnsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers
  }

  // options - computed: false, optional: false, required: true
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // search_domains - computed: false, optional: false, required: true
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains
  }
}
export interface ContainerGroupIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#identity_ids ContainerGroup#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#type ContainerGroup#type}
  */
  readonly type: string;
}

function containerGroupIdentityToTerraform(struct?: ContainerGroupIdentityOutputReference | ContainerGroupIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerGroupIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ContainerGroupImageRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#password ContainerGroup#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#server ContainerGroup#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#username ContainerGroup#username}
  */
  readonly username: string;
}

function containerGroupImageRegistryCredentialToTerraform(struct?: ContainerGroupImageRegistryCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface ContainerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#create ContainerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#delete ContainerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#read ContainerGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#update ContainerGroup#update}
  */
  readonly update?: string;
}

function containerGroupTimeoutsToTerraform(struct?: ContainerGroupTimeoutsOutputReference | ContainerGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html azurerm_container_group}
*/
export class ContainerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_container_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html azurerm_container_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerGroupConfig
  */
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
    this._exposedPort = config.exposedPort;
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
  private _dnsNameLabel?: string | undefined; 
  public get dnsNameLabel() {
    return this.getStringAttribute('dns_name_label');
  }
  public set dnsNameLabel(value: string | undefined) {
    this._dnsNameLabel = value;
  }
  public resetDnsNameLabel() {
    this._dnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelInput() {
    return this._dnsNameLabel
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort?: ContainerGroupExposedPort[] | undefined; 
  public get exposedPort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exposed_port') as any;
  }
  public set exposedPort(value: ContainerGroupExposedPort[] | undefined) {
    this._exposedPort = value;
  }
  public resetExposedPort() {
    this._exposedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort
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
  private _ipAddressType?: string | undefined; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string | undefined) {
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
  private _location?: string; 
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
  private _name?: string; 
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
  private _networkProfileId?: string | undefined; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string | undefined) {
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
  private _osType?: string; 
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
  private _resourceGroupName?: string; 
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
  private _restartPolicy?: string | undefined; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _container?: ContainerGroupContainer[]; 
  public get container() {
    // Getting the computed value is not yet implemented
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
  private _diagnostics?: ContainerGroupDiagnostics | undefined; 
  private __diagnosticsOutput = new ContainerGroupDiagnosticsOutputReference(this as any, "diagnostics", true);
  public get diagnostics() {
    return this.__diagnosticsOutput;
  }
  public putDiagnostics(value: ContainerGroupDiagnostics | undefined) {
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
  private _dnsConfig?: ContainerGroupDnsConfig | undefined; 
  private __dnsConfigOutput = new ContainerGroupDnsConfigOutputReference(this as any, "dns_config", true);
  public get dnsConfig() {
    return this.__dnsConfigOutput;
  }
  public putDnsConfig(value: ContainerGroupDnsConfig | undefined) {
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
  private _identity?: ContainerGroupIdentity | undefined; 
  private __identityOutput = new ContainerGroupIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: ContainerGroupIdentity | undefined) {
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
  private _imageRegistryCredential?: ContainerGroupImageRegistryCredential[] | undefined; 
  public get imageRegistryCredential() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_registry_credential') as any;
  }
  public set imageRegistryCredential(value: ContainerGroupImageRegistryCredential[] | undefined) {
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
  private _timeouts?: ContainerGroupTimeouts | undefined; 
  private __timeoutsOutput = new ContainerGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ContainerGroupTimeouts | undefined) {
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
      exposed_port: cdktf.listMapper(containerGroupExposedPortToTerraform)(this._exposedPort),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      container: cdktf.listMapper(containerGroupContainerToTerraform)(this._container),
      diagnostics: containerGroupDiagnosticsToTerraform(this._diagnostics),
      dns_config: containerGroupDnsConfigToTerraform(this._dnsConfig),
      identity: containerGroupIdentityToTerraform(this._identity),
      image_registry_credential: cdktf.listMapper(containerGroupImageRegistryCredentialToTerraform)(this._imageRegistryCredential),
      timeouts: containerGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
