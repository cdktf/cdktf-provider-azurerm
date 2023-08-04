// https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}
  */
  readonly dnsNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}
  */
  readonly dnsNameLabelReusePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}
  */
  readonly exposedPort?: ContainerGroupExposedPort[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#id ContainerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#location ContainerGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#os_type ContainerGroup#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#tags ContainerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#zones ContainerGroup#zones}
  */
  readonly zones?: string[];
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#container ContainerGroup#container}
  */
  readonly container: ContainerGroupContainer[] | cdktf.IResolvable;
  /**
  * diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}
  */
  readonly diagnostics?: ContainerGroupDiagnostics;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}
  */
  readonly dnsConfig?: ContainerGroupDnsConfig;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#identity ContainerGroup#identity}
  */
  readonly identity?: ContainerGroupIdentity;
  /**
  * image_registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}
  */
  readonly imageRegistryCredential?: ContainerGroupImageRegistryCredential[] | cdktf.IResolvable;
  /**
  * init_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#init_container ContainerGroup#init_container}
  */
  readonly initContainer?: ContainerGroupInitContainer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}
  */
  readonly timeouts?: ContainerGroupTimeouts;
}
export interface ContainerGroupExposedPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

export function containerGroupExposedPortToTerraform(struct?: ContainerGroupExposedPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: struct!.port === undefined ? null : cdktf.numberToTerraform(struct!.port),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
  }
}

export class ContainerGroupExposedPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupExposedPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupExposedPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ContainerGroupExposedPortList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupExposedPort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupExposedPortOutputReference {
    return new ContainerGroupExposedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerGpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#count ContainerGroup#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#sku ContainerGroup#sku}
  */
  readonly sku?: string;
}

export function containerGroupContainerGpuToTerraform(struct?: ContainerGroupContainerGpuOutputReference | ContainerGroupContainerGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export class ContainerGroupContainerGpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerGpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerGpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._sku = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._sku = value.sku;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }
}
export interface ContainerGroupContainerGpuLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#count ContainerGroup#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#sku ContainerGroup#sku}
  */
  readonly sku?: string;
}

export function containerGroupContainerGpuLimitToTerraform(struct?: ContainerGroupContainerGpuLimitOutputReference | ContainerGroupContainerGpuLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export class ContainerGroupContainerGpuLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerGpuLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerGpuLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._sku = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._sku = value.sku;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }
}
export interface ContainerGroupContainerLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

export function containerGroupContainerLivenessProbeHttpGetToTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export class ContainerGroupContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class ContainerGroupContainerLivenessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupContainerLivenessProbeHttpGet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupContainerLivenessProbeHttpGetOutputReference {
    return new ContainerGroupContainerLivenessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerLivenessProbeHttpGet[] | cdktf.IResolvable;
}

export function containerGroupContainerLivenessProbeToTerraform(struct?: ContainerGroupContainerLivenessProbeOutputReference | ContainerGroupContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerLivenessProbeHttpGetToTerraform, true)(struct!.httpGet),
  }
}

export class ContainerGroupContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._httpGet.internalValue = value.httpGet;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[]; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[]) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new ContainerGroupContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: ContainerGroupContainerLivenessProbeHttpGet[] | cdktf.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }
}
export interface ContainerGroupContainerPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

export function containerGroupContainerPortsToTerraform(struct?: ContainerGroupContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class ContainerGroupContainerPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupContainerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ContainerGroupContainerPortsList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupContainerPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupContainerPortsOutputReference {
    return new ContainerGroupContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

export function containerGroupContainerReadinessProbeHttpGetToTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export class ContainerGroupContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class ContainerGroupContainerReadinessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupContainerReadinessProbeHttpGet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupContainerReadinessProbeHttpGetOutputReference {
    return new ContainerGroupContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerReadinessProbeHttpGet[] | cdktf.IResolvable;
}

export function containerGroupContainerReadinessProbeToTerraform(struct?: ContainerGroupContainerReadinessProbeOutputReference | ContainerGroupContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerReadinessProbeHttpGetToTerraform, true)(struct!.httpGet),
  }
}

export class ContainerGroupContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._httpGet.internalValue = value.httpGet;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[]; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[]) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new ContainerGroupContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: ContainerGroupContainerReadinessProbeHttpGet[] | cdktf.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }
}
export interface ContainerGroupContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#url ContainerGroup#url}
  */
  readonly url: string;
}

export function containerGroupContainerVolumeGitRepoToTerraform(struct?: ContainerGroupContainerVolumeGitRepoOutputReference | ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._revision = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._revision = value.revision;
      this._url = value.url;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
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
    return this._url;
  }
}
export interface ContainerGroupContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupContainerVolumeGitRepo;
}

export function containerGroupContainerVolumeToTerraform(struct?: ContainerGroupContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secret),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    git_repo: containerGroupContainerVolumeGitRepoToTerraform(struct!.gitRepo),
  }
}

export class ContainerGroupContainerVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupContainerVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emptyDir = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._secret = undefined;
      this._shareName = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._gitRepo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emptyDir = value.emptyDir;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._secret = value.secret;
      this._shareName = value.shareName;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._gitRepo.internalValue = value.gitRepo;
    }
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktf.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktf.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
    return this._name;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: { [key: string]: string }; 
  public get secret() {
    return this.getStringMapAttribute('secret');
  }
  public set secret(value: { [key: string]: string }) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_account_key - computed: false, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new ContainerGroupContainerVolumeGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: ContainerGroupContainerVolumeGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }
}

export class ContainerGroupContainerVolumeList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupContainerVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupContainerVolumeOutputReference {
    return new ContainerGroupContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#cpu ContainerGroup#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#memory ContainerGroup#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /**
  * gpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#gpu ContainerGroup#gpu}
  */
  readonly gpu?: ContainerGroupContainerGpu;
  /**
  * gpu_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#gpu_limit ContainerGroup#gpu_limit}
  */
  readonly gpuLimit?: ContainerGroupContainerGpuLimit;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}
  */
  readonly livenessProbe?: ContainerGroupContainerLivenessProbe;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#ports ContainerGroup#ports}
  */
  readonly ports?: ContainerGroupContainerPorts[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}
  */
  readonly readinessProbe?: ContainerGroupContainerReadinessProbe;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupContainerVolume[] | cdktf.IResolvable;
}

export function containerGroupContainerToTerraform(struct?: ContainerGroupContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    cpu_limit: cdktf.numberToTerraform(struct!.cpuLimit),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
    name: cdktf.stringToTerraform(struct!.name),
    secure_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secureEnvironmentVariables),
    gpu: containerGroupContainerGpuToTerraform(struct!.gpu),
    gpu_limit: containerGroupContainerGpuLimitToTerraform(struct!.gpuLimit),
    liveness_probe: containerGroupContainerLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cdktf.listMapper(containerGroupContainerPortsToTerraform, true)(struct!.ports),
    readiness_probe: containerGroupContainerReadinessProbeToTerraform(struct!.readinessProbe),
    volume: cdktf.listMapper(containerGroupContainerVolumeToTerraform, true)(struct!.volume),
  }
}

export class ContainerGroupContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secureEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEnvironmentVariables = this._secureEnvironmentVariables;
    }
    if (this._gpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu?.internalValue;
    }
    if (this._gpuLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuLimit = this._gpuLimit?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._cpuLimit = undefined;
      this._environmentVariables = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._memoryLimit = undefined;
      this._name = undefined;
      this._secureEnvironmentVariables = undefined;
      this._gpu.internalValue = undefined;
      this._gpuLimit.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._cpu = value.cpu;
      this._cpuLimit = value.cpuLimit;
      this._environmentVariables = value.environmentVariables;
      this._image = value.image;
      this._memory = value.memory;
      this._memoryLimit = value.memoryLimit;
      this._name = value.name;
      this._secureEnvironmentVariables = value.secureEnvironmentVariables;
      this._gpu.internalValue = value.gpu;
      this._gpuLimit.internalValue = value.gpuLimit;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._volume.internalValue = value.volume;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
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
    return this._name;
  }

  // secure_environment_variables - computed: false, optional: true, required: false
  private _secureEnvironmentVariables?: { [key: string]: string }; 
  public get secureEnvironmentVariables() {
    return this.getStringMapAttribute('secure_environment_variables');
  }
  public set secureEnvironmentVariables(value: { [key: string]: string }) {
    this._secureEnvironmentVariables = value;
  }
  public resetSecureEnvironmentVariables() {
    this._secureEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEnvironmentVariablesInput() {
    return this._secureEnvironmentVariables;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu = new ContainerGroupContainerGpuOutputReference(this, "gpu");
  public get gpu() {
    return this._gpu;
  }
  public putGpu(value: ContainerGroupContainerGpu) {
    this._gpu.internalValue = value;
  }
  public resetGpu() {
    this._gpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu.internalValue;
  }

  // gpu_limit - computed: false, optional: true, required: false
  private _gpuLimit = new ContainerGroupContainerGpuLimitOutputReference(this, "gpu_limit");
  public get gpuLimit() {
    return this._gpuLimit;
  }
  public putGpuLimit(value: ContainerGroupContainerGpuLimit) {
    this._gpuLimit.internalValue = value;
  }
  public resetGpuLimit() {
    this._gpuLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuLimitInput() {
    return this._gpuLimit.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new ContainerGroupContainerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: ContainerGroupContainerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ContainerGroupContainerPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ContainerGroupContainerPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new ContainerGroupContainerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: ContainerGroupContainerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ContainerGroupContainerVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ContainerGroupContainerVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class ContainerGroupContainerList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupContainer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupContainerOutputReference {
    return new ContainerGroupContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupDiagnosticsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#log_type ContainerGroup#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#metadata ContainerGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}
  */
  readonly workspaceKey: string;
}

export function containerGroupDiagnosticsLogAnalyticsToTerraform(struct?: ContainerGroupDiagnosticsLogAnalyticsOutputReference | ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_type: cdktf.stringToTerraform(struct!.logType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_key: cdktf.stringToTerraform(struct!.workspaceKey),
  }
}

export class ContainerGroupDiagnosticsLogAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDiagnosticsLogAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceKey = this._workspaceKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDiagnosticsLogAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logType = undefined;
      this._metadata = undefined;
      this._workspaceId = undefined;
      this._workspaceKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logType = value.logType;
      this._metadata = value.metadata;
      this._workspaceId = value.workspaceId;
      this._workspaceKey = value.workspaceKey;
    }
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
    return this._workspaceId;
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
    return this._workspaceKey;
  }
}
export interface ContainerGroupDiagnostics {
  /**
  * log_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}
  */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics;
}

export function containerGroupDiagnosticsToTerraform(struct?: ContainerGroupDiagnosticsOutputReference | ContainerGroupDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics: containerGroupDiagnosticsLogAnalyticsToTerraform(struct!.logAnalytics),
  }
}

export class ContainerGroupDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalytics = this._logAnalytics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalytics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalytics.internalValue = value.logAnalytics;
    }
  }

  // log_analytics - computed: false, optional: false, required: true
  private _logAnalytics = new ContainerGroupDiagnosticsLogAnalyticsOutputReference(this, "log_analytics");
  public get logAnalytics() {
    return this._logAnalytics;
  }
  public putLogAnalytics(value: ContainerGroupDiagnosticsLogAnalytics) {
    this._logAnalytics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInput() {
    return this._logAnalytics.internalValue;
  }
}
export interface ContainerGroupDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#options ContainerGroup#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}
  */
  readonly searchDomains?: string[];
}

export function containerGroupDnsConfigToTerraform(struct?: ContainerGroupDnsConfigOutputReference | ContainerGroupDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchDomains),
  }
}

export class ContainerGroupDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameservers = undefined;
      this._options = undefined;
      this._searchDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameservers = value.nameservers;
      this._options = value.options;
      this._searchDomains = value.searchDomains;
    }
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
    return this._nameservers;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('search_domains'));
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }
}
export interface ContainerGroupIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#type ContainerGroup#type}
  */
  readonly type: string;
}

export function containerGroupIdentityToTerraform(struct?: ContainerGroupIdentityOutputReference | ContainerGroupIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerGroupIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
    return this._type;
  }
}
export interface ContainerGroupImageRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#password ContainerGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#server ContainerGroup#server}
  */
  readonly server: string;
  /**
  * The User Assigned Identity to use for Container Registry access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#username ContainerGroup#username}
  */
  readonly username?: string;
}

export function containerGroupImageRegistryCredentialToTerraform(struct?: ContainerGroupImageRegistryCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ContainerGroupImageRegistryCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupImageRegistryCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupImageRegistryCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._server = undefined;
      this._userAssignedIdentityId = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._server = value.server;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContainerGroupImageRegistryCredentialList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupImageRegistryCredential[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupImageRegistryCredentialOutputReference {
    return new ContainerGroupImageRegistryCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupInitContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#url ContainerGroup#url}
  */
  readonly url: string;
}

export function containerGroupInitContainerVolumeGitRepoToTerraform(struct?: ContainerGroupInitContainerVolumeGitRepoOutputReference | ContainerGroupInitContainerVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    revision: cdktf.stringToTerraform(struct!.revision),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ContainerGroupInitContainerVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupInitContainerVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainerVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._revision = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._revision = value.revision;
      this._url = value.url;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
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
    return this._url;
  }
}
export interface ContainerGroupInitContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupInitContainerVolumeGitRepo;
}

export function containerGroupInitContainerVolumeToTerraform(struct?: ContainerGroupInitContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secret),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    git_repo: containerGroupInitContainerVolumeGitRepoToTerraform(struct!.gitRepo),
  }
}

export class ContainerGroupInitContainerVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupInitContainerVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainerVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emptyDir = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._secret = undefined;
      this._shareName = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._gitRepo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emptyDir = value.emptyDir;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._secret = value.secret;
      this._shareName = value.shareName;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._gitRepo.internalValue = value.gitRepo;
    }
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktf.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktf.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
    return this._name;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: { [key: string]: string }; 
  public get secret() {
    return this.getStringMapAttribute('secret');
  }
  public set secret(value: { [key: string]: string }) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_account_key - computed: false, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new ContainerGroupInitContainerVolumeGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: ContainerGroupInitContainerVolumeGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }
}

export class ContainerGroupInitContainerVolumeList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupInitContainerVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupInitContainerVolumeOutputReference {
    return new ContainerGroupInitContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupInitContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupInitContainerVolume[] | cdktf.IResolvable;
}

export function containerGroupInitContainerToTerraform(struct?: ContainerGroupInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    secure_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secureEnvironmentVariables),
    volume: cdktf.listMapper(containerGroupInitContainerVolumeToTerraform, true)(struct!.volume),
  }
}

export class ContainerGroupInitContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerGroupInitContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secureEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEnvironmentVariables = this._secureEnvironmentVariables;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._environmentVariables = undefined;
      this._image = undefined;
      this._name = undefined;
      this._secureEnvironmentVariables = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._environmentVariables = value.environmentVariables;
      this._image = value.image;
      this._name = value.name;
      this._secureEnvironmentVariables = value.secureEnvironmentVariables;
      this._volume.internalValue = value.volume;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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
    return this._name;
  }

  // secure_environment_variables - computed: false, optional: true, required: false
  private _secureEnvironmentVariables?: { [key: string]: string }; 
  public get secureEnvironmentVariables() {
    return this.getStringMapAttribute('secure_environment_variables');
  }
  public set secureEnvironmentVariables(value: { [key: string]: string }) {
    this._secureEnvironmentVariables = value;
  }
  public resetSecureEnvironmentVariables() {
    this._secureEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEnvironmentVariablesInput() {
    return this._secureEnvironmentVariables;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ContainerGroupInitContainerVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ContainerGroupInitContainerVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class ContainerGroupInitContainerList extends cdktf.ComplexList {
  public internalValue? : ContainerGroupInitContainer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerGroupInitContainerOutputReference {
    return new ContainerGroupInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#create ContainerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#delete ContainerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#read ContainerGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group#update ContainerGroup#update}
  */
  readonly update?: string;
}

export function containerGroupTimeoutsToTerraform(struct?: ContainerGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group azurerm_container_group}
*/
export class ContainerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/container_group azurerm_container_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.68.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsNameLabel = config.dnsNameLabel;
    this._dnsNameLabelReusePolicy = config.dnsNameLabelReusePolicy;
    this._exposedPort.internalValue = config.exposedPort;
    this._id = config.id;
    this._ipAddressType = config.ipAddressType;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._location = config.location;
    this._name = config.name;
    this._networkProfileId = config.networkProfileId;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._restartPolicy = config.restartPolicy;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._zones = config.zones;
    this._container.internalValue = config.container;
    this._diagnostics.internalValue = config.diagnostics;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._identity.internalValue = config.identity;
    this._imageRegistryCredential.internalValue = config.imageRegistryCredential;
    this._initContainer.internalValue = config.initContainer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name_label - computed: false, optional: true, required: false
  private _dnsNameLabel?: string; 
  public get dnsNameLabel() {
    return this.getStringAttribute('dns_name_label');
  }
  public set dnsNameLabel(value: string) {
    this._dnsNameLabel = value;
  }
  public resetDnsNameLabel() {
    this._dnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelInput() {
    return this._dnsNameLabel;
  }

  // dns_name_label_reuse_policy - computed: false, optional: true, required: false
  private _dnsNameLabelReusePolicy?: string; 
  public get dnsNameLabelReusePolicy() {
    return this.getStringAttribute('dns_name_label_reuse_policy');
  }
  public set dnsNameLabelReusePolicy(value: string) {
    this._dnsNameLabelReusePolicy = value;
  }
  public resetDnsNameLabelReusePolicy() {
    this._dnsNameLabelReusePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelReusePolicyInput() {
    return this._dnsNameLabelReusePolicy;
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort = new ContainerGroupExposedPortList(this, "exposed_port", true);
  public get exposedPort() {
    return this._exposedPort;
  }
  public putExposedPort(value: ContainerGroupExposedPort[] | cdktf.IResolvable) {
    this._exposedPort.internalValue = value;
  }
  public resetExposedPort() {
    this._exposedPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort.internalValue;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
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
    return this._location;
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
    return this._name;
  }

  // network_profile_id - computed: true, optional: true, required: false
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
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
    return this._osType;
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
    return this._resourceGroupName;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // container - computed: false, optional: false, required: true
  private _container = new ContainerGroupContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: ContainerGroupContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // diagnostics - computed: false, optional: true, required: false
  private _diagnostics = new ContainerGroupDiagnosticsOutputReference(this, "diagnostics");
  public get diagnostics() {
    return this._diagnostics;
  }
  public putDiagnostics(value: ContainerGroupDiagnostics) {
    this._diagnostics.internalValue = value;
  }
  public resetDiagnostics() {
    this._diagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsInput() {
    return this._diagnostics.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ContainerGroupDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ContainerGroupDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ContainerGroupIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ContainerGroupIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential = new ContainerGroupImageRegistryCredentialList(this, "image_registry_credential", false);
  public get imageRegistryCredential() {
    return this._imageRegistryCredential;
  }
  public putImageRegistryCredential(value: ContainerGroupImageRegistryCredential[] | cdktf.IResolvable) {
    this._imageRegistryCredential.internalValue = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new ContainerGroupInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: ContainerGroupInitContainer[] | cdktf.IResolvable) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name_label: cdktf.stringToTerraform(this._dnsNameLabel),
      dns_name_label_reuse_policy: cdktf.stringToTerraform(this._dnsNameLabelReusePolicy),
      exposed_port: cdktf.listMapper(containerGroupExposedPortToTerraform, false)(this._exposedPort.internalValue),
      id: cdktf.stringToTerraform(this._id),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      container: cdktf.listMapper(containerGroupContainerToTerraform, true)(this._container.internalValue),
      diagnostics: containerGroupDiagnosticsToTerraform(this._diagnostics.internalValue),
      dns_config: containerGroupDnsConfigToTerraform(this._dnsConfig.internalValue),
      identity: containerGroupIdentityToTerraform(this._identity.internalValue),
      image_registry_credential: cdktf.listMapper(containerGroupImageRegistryCredentialToTerraform, true)(this._imageRegistryCredential.internalValue),
      init_container: cdktf.listMapper(containerGroupInitContainerToTerraform, true)(this._initContainer.internalValue),
      timeouts: containerGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
